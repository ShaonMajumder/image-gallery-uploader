import React from 'react'
import { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { ImCross } from "react-icons/im";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { notify } from "utils/Toast";
import { SUCCESS } from "services/MessageConst";
import { ERROR } from "services/MessageConst";

const ImageGalleryUploader = ({isImageUploader, imageArray, handleImage, handleRemoveImage, validation, rowIndex}) => {
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);
  
  

  const scrollContainerRef = React.useRef(null);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [mouseDownX, setMouseDownX] = React.useState(0);
  const hasMouseMoved = React.useRef(false);
  const [isMouseReleased, setIsMouseReleased] = React.useState(false);

  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if(isImageUploader){
        if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
        } else if (e.type === "dragleave") {
        setDragActive(false);
        }
    }
  };

  const isValidImage = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
  
      img.onload = () => {
        URL.revokeObjectURL(img.src);
        resolve(true);
      };
  
      img.onerror = () => {
        notify(`${file.name} is not image.`, ERROR);
        reject(false);
      };
    });
  };

  const handleAndValidateImage = async (filesArray) => {
    const files = Array.from(filesArray);      
    if (files.length > 0) {
      // filtering & notifying valid images
      const validImageFiles = await Promise.all(
        files.map(async (file) => {
          try {
            const isValid = await isValidImage(file);
            return isValid ? file : null;
          } catch (error) {
            return null;
          }
        })
      );
      const filteredFiles = validImageFiles.filter((file) => file !== null);

      if (validation.maxFileCount && (files.length+imageArray[rowIndex]?.length ?? 0) > validation.maxFileCount) {
          notify(`Maximum file count exceeded. Only ${validation.maxFileCount} files will be selected.`, ERROR);
      }

      const selectedFiles = filteredFiles.slice(0, validation.maxFileCount - (imageArray[rowIndex]?.length ?? 0));

      const filteredSelectedFiles = selectedFiles.filter(
        (file) => {
          if (file && file.size > validation.maxFileSize * 1024 * 1024) {
            notify(
              `File size exceeds ${validation.maxFileSize}MB: ${file.name}. Please select a smaller file.`,
              ERROR
            );
          }
          return file.size <= validation.maxFileSize * 1024 * 1024
        }
      );
      
      if (filteredSelectedFiles.length > 0) {
        handleImage(rowIndex,filteredSelectedFiles);
      }else{
        notify(
          `There is no valid images to import`,
          ERROR
        );
      }
    }
  }

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isImageUploader) {
      setDragActive(false);
      handleAndValidateImage(e.dataTransfer.files)
    }
  };
    
  // triggers when file is selected with click
  const handleChange = (e) => {
    e.preventDefault();
    if(isImageUploader){
        if (e.target.files && e.target.files[0]) {
            handleAndValidateImage(e.target.files)
        }
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    if(isImageUploader){
        inputRef.current.click();
    }
  };

  const handleFormClick = (item) => {
    if(!(imageArray[rowIndex]?.length ?? 0)){
        onButtonClick();
    }
  }

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setMouseDownX(e.clientX);
    setIsMouseReleased(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setIsMouseReleased(true);

    // Check if the mouse was moved during the click
    if (hasMouseMoved.current) {
      hasMouseMoved.current = false;
      return;
    }

    // Store the current scroll position
    const currentScrollLeft = scrollContainerRef.current.scrollLeft;

    // Update the scrollLeft value to the current position
    setScrollLeft(currentScrollLeft);

    // Remove the event listener for mouseup
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // const handleMouseUp = () => {
  //   setIsMouseDown(false);
  //   window.removeEventListener('mousemove', handleMouseMove);
  // };

  const handleMouseMove = (e) => {
    if (isMouseDown) {
      const scrollContainer = scrollContainerRef.current;
      const distance = e.clientX - mouseDownX;
      const scrollLeft = scrollContainer.scrollLeft;
  
      // Set the scroll speed factor
      const scrollSpeedFactor = 0.09; // Adjust this value as desired
  
      // Calculate the new scroll position with reduced scroll speed
      const newScrollLeft = scrollLeft - distance * scrollSpeedFactor;
  
      // Scroll to the opposite direction if the mouse moved to the left or right
      if (distance < 0 && newScrollLeft >= 0) {
        // the condition ensures that mouse movement is to the left and the scroll doesn't go beyond the leftmost edge of the scrollable container.
        scrollContainer.scrollLeft = newScrollLeft;
      } else if (distance > 0 && newScrollLeft <= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        // the condition ensures that mouse movement is to the right and the scroll doesn't go beyond the rightmost edge of the scrollable container.
        scrollContainer.scrollLeft = newScrollLeft;
      }
    }
  };

  const handleWindowMouseUp = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  };

  // event handler is triggered when the mouse cursor enters the boundaries of an element
  const handleMouseEnter = () => {
    if (isMouseReleased && !isMouseDown) {
      setIsMouseReleased(false);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  // event handler is triggered when the mouse cursor leaves the boundaries of an element
  const handleMouseLeave = () => {
    if (isMouseDown) {
      setIsMouseReleased(true);
    }
  };
  
  React.useEffect(() => {
    const handleWindowMouseUp = () => {
      // Check if the mouse button is released outside the div
      if (isMouseDown && !scrollContainerRef.current.contains(document.activeElement)) {
        setIsMouseDown(false);
      }
    };

    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [isMouseDown]);

  return (
    <>
    {
      (!isImageUploader && (imageArray[rowIndex] === undefined || imageArray[rowIndex].length == 0) ) ? '' :
        (
          <form onClick={handleFormClick}
              id="form-file-upload" 
              onDragEnter={handleDrag} 
              onSubmit={(e) => e.preventDefault()}
          >
            <input 
              ref={inputRef} 
              id={"input-file-upload"+rowIndex}
              class="input-file-upload"
              type="file"
              controlId="validationFormik01" 
              onChange={handleChange}
              accept="image/jpg, image/jpeg, image/gif, image/bmp, image/svg" 
              multiple={true}
            />
            <div 
              className="image-gallery-uploader-container form-group multi-preview text-center d-flex align-items-center"
              ref={scrollContainerRef}
              onClick={(e)=>{
                e.stopPropagation();
                if(isImageUploader & ( imageArray[rowIndex] === undefined || imageArray[rowIndex].length == 0) ){
                  inputRef.current.click();
                }
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}

              style={{ userSelect: 'none' }}
            >
              {
                (imageArray[rowIndex] === undefined || imageArray[rowIndex].length == 0) ? 
                    ( !isImageUploader ) ? '' : (
                      <div style={{
                        zIndex:'1', 
                        backgroundImage: `url(${AiOutlineCloudUpload})`,
                        margin:"0 auto"}}>                      
                        <span variant="success">Choose files to Upload</span>
                        <br></br>
                        <span className="text-danger font-weight-bold">Or drag and drop them here</span>
                      </div>
                    )
                  :
                  (imageArray || []).map((imageRowArray,rowId) => {
                    if(rowId == rowIndex){
                      return (imageRowArray || []).map((url,id) => (
                        <div key={id} className="d-flex" style={{
                            marginLeft: '10px',
                            zIndex: '1'
                        }}>
                          <img  draggable="false" src={url ? url : ''} alt="..." style={{ width: 100, height: 100 }} />
                          {
                            isImageUploader ?
                              <ImCross 
                                className="p-1" 
                                onClick={(e)=>{
                                  e.stopPropagation();
                                  handleRemoveImage(rowIndex,id)
                                }} 
                                size={20} 
                                style={{ 
                                  marginLeft:'-10px', 
                                  marginTop:'-10px', 
                                  zIndex: '2', 
                                  color: 'white', 
                                  backgroundColor: '#f56969', 
                                  borderRadius: '13px'
                                }} 
                              />
                            : ''
                          }
                        </div>
                      ))
                    }
                  })
                              
              }
            </div>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            { 
              (imageArray[rowIndex] === undefined)  ? '' :
              ( imageArray[rowIndex].length && isImageUploader ) ? <Button  onClick={onButtonClick}>Upload More Files</Button> : ''
            }
          </form>
        )
    }
    </>
  )
}

export default ImageGalleryUploader