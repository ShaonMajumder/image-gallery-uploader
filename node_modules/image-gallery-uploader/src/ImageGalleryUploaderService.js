export const convertImageUrlToFile = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });

    return file;
  } catch (error) {
    console.error('Error converting image URL to file:', error);
    return null;
  }
};

const filterValue = (value) => {
  value = (value == 'true' || value === true) ? 1 : value;
  value = (value == 'false' || value === false) ? 0 : value;
  value = (value == null || Number.isNaN(value) || value == 'null') ? '' : value;
  return value;
}

export const fetchDBImages = async (images,images_url,imageViewerArray,setImageViewerArray) => {
  let  fileObj = [];
  images.map((element, index) =>{
    fileObj.push(`${images_url}${element.file}`)
  })
  setImageViewerArray([...imageViewerArray, ...fileObj ])
}

export const fetchEditDBImages = async (images,images_url,imageViewerArray,setImageViewerArray,imageFormdataArray,setImageFormdataArray) => {  
  let  fileObjView = [];
  let  fileObjFD = [];

  for (let index = 0; index < images.length; index++) {
      const element = images[index];
      const url = `${images_url}${element.file}`;
  
      fileObjView.push(url);
      const file = await convertImageUrlToFile(url);
      fileObjFD.push(file);
  }

  setImageViewerArray([]);
  setImageFormdataArray([]);
  setImageViewerArray([...imageViewerArray, ...fileObjView ]);
  setImageFormdataArray([...imageFormdataArray, ...fileObjFD]);
}

