# image-gallery-uploader
Image Gallery can view, upload and update your image file.
# Features
- Multi Image Uploader
- Drag and Drop / Click to Select Multiple Image
- Image Gallery with Good slider
- Multiple Modes

# Table of Contents
    - Screenshots
    - Installation
    - API Reference
        - ImageGalleryUploader
        - convertImageUrlToFile
        - fetchDBImages
        - fetchEditDBImages
# Screenshots
Intially the component looks like this if it is in uploading mode.
![Initial State](https://github.com/ShaonMajumder/image-gallery-uploader/blob/HEAD/pictures/inital.jpg)

If you want to just view images -
![Initial State](https://github.com/ShaonMajumder/image-gallery-uploader/blob/HEAD/pictures/view.png)

After selecting image it will look like this in create/uploading mode -
![Initial State](https://github.com/ShaonMajumder/image-gallery-uploader/blob/HEAD/pictures/create.png)

This is an example of editing images, where you can remove and add new image also -
![Initial State](https://github.com/ShaonMajumder/image-gallery-uploader/blob/HEAD/pictures/update.png)

# Installation
**npm**:
```bash
npm install image-gallery-uploader
```
**or**,
**yarn**
```bash
yarn add image-gallery-uploader
```
# Api Reference
## fetchEditDBImages

The `ImageGalleryUploader` component is a reusable component that provides an interface for uploading and displaying images. It supports drag and drop functionality, image validation, and the ability to remove uploaded images. 

It has 3 modes.

- Viewer
- Create Uploader
- Edit Uploader

### Props

- `isImageUploader` (boolean, required): Determines whether the component acts as an image uploader or just an image viewer. If `isImageUploader` is `true`, the component provides functionality for uploading images.
- `imageArray` (array): An array of image URLs to be displayed in the gallery. `imageArray` is an prop that contains an array of image URLs to be displayed in the gallery.
- `handleImage` (function): A callback function that handles the selected images. `handleImage` is a callback function that handles the selected images. It receives the selected image files as a parameter.
- `handleRemoveImage` (function): A callback function that handles the removal of images. `handleRemoveImage` is a callback function that handles the removal of images. It receives the index of the image to be removed as a parameter.
- `validation` (object): An object containing validation configurations for uploaded images, including `maxFileCount` (maximum number of files allowed) and `maxFileSize` (maximum file size allowed in MB).

### Usage

```javascript
import React, { useState } from 'react';

const MAX_IMAGE_SIZE = 5; // Maximum file size in MB
const MAX_IMAGE_COUNT = 10; // Maximum number of files allowed

const YourComponent = () => {
  const [imageViewerArray, setImageViewerArray] = useState([]);
  const [imageFormdataArray, setImageFormdataArray] = useState([]);
  
  const uploadMultipleFiles = (files) => {
    // Handle the selected image files
    let fileObj = [];
    setImageFormdataArray([...imageFormdataArray, ...files]);
    for (let i = 0; i < files.length; i++) {
      fileObj.push(URL.createObjectURL(files[i]));
    }
    setImageViewerArray([...imageViewerArray, ...fileObj]);
  };
  
  const handleRemoveImage = (id) => {
    // Remove the image at the specified index
    let objA = imageViewerArray.filter((img, i) => i !== id);
    let objB = imageFormdataArray.filter((imgs, idx) => idx !== id);
    setImageViewerArray(objA);
    setImageFormdataArray(objB);
  };
  
  return (
    <div>
      {/* Other content */}
      
      <ImageGalleryUploader 
        isImageUploader={true} 
        validation={{
          maxFileSize: MAX_IMAGE_SIZE,
          maxFileCount: MAX_IMAGE_COUNT
        }} 
        imageArray={imageViewerArray} 
        handleImage={uploadMultipleFiles} 
        handleRemoveImage={handleRemoveImage}
      />
      
      {/* Other content */}
    </div>
  );
};

export default YourComponent;
```



## convertImageUrlToFile

The **convertImageUrlToFile** function is used to convert an image URL to a File object asynchronously.
### Syntax
```javascript
convertImageUrlToFile(imageUrl)
```
### Parameters
    - `imageUrl` : A string representing the URL of the image to be converted.
### Return Value
A Promise that resolves to a File object representing the image file, or null if an error occurs during the conversion process.

### Usage
```javascript
import { convertImageUrlToFile } from 'image-gallery-uploader';

const imageUrl = 'https://example.com/image.jpg';

convertImageUrlToFile(imageUrl)
  .then((file) => {
    // File conversion successful
    console.log('Converted file:', file);
  })
  .catch((error) => {
    // Error occurred during conversion
    console.error('Error converting image URL to file:', error);
  });
```

The **`convertImageUrlToFile`** function uses the **`fetch`** API to retrieve the image data from the specified URL. It then converts the response into a **`Blob`** object and creates a **`File`** object from the blob with a specified name and MIME type.

If the conversion is successful, the Promise resolves with the **`File`** object representing the image file. If any errors occur during the conversion process, the Promise rejects with an error object.

**Note**: Make sure to handle any errors that may occur during the conversion process and provide appropriate error handling in your application.

That concludes the documentation for the **`convertImageUrlToFile`** function.



## fetchDBImages

The **`fetchDBImages`** function is used to fetch and append image URLs from a database to an existing array.

### Syntax

```javascript
fetchDBImages(images, images_url, imageViewerArray, setImageViewerArray)
```

### Parameters

    images: An array of image objects from the database.
    images_url: A string representing the base URL for the images.
    imageViewerArray: An existing array of image URLs to which the fetched URLs will be appended.
    setImageViewerArray: A function to update the imageViewerArray with the fetched URLs.

### Return Value

It converts given images to File Objects and set it to `imageViewerArray`,

### Usage

```javascript
import { fetchDBImages } from 'image-gallery-uploader';

const images = [
  { file: 'image1.jpg' },
  { file: 'image2.jpg' },
  { file: 'image3.jpg' },
];

const images_url = 'https://example.com/images/';
const [imageViewerArray, setImageViewerArray] = useState([]);

fetchDBImages(images, images_url, imageViewerArray, setImageViewerArray);
```

The `fetchDBImages` function takes an array of image objects, `images`, and appends the corresponding image URLs to the `imageViewerArray`. It does so by iterating over the `images` array and concatenating the `images_url` with the `file` property of each image object. The resulting URL is then pushed to the `imageViewerArray`.

The function expects a callback function, `setImageViewerArray`, which is responsible for updating the `imageViewerArray` with the new image URLs. You need to implement this function according to your specific use case.

Once the `fetchDBImages` function is called, it will populate the `imageViewerArray` with the fetched image URLs.

**Note:** The `fetchDBImages` function assumes that the necessary variables (`images`, `images_url`, `imageViewerArray`, `setImageViewerArray`) are available and used appropriately in your application.

That concludes the documentation for the `fetchDBImages` function.

## fetchEditDBImages

The `fetchEditDBImages` function is used to fetch and append image URLs from a database, convert them to `File` objects, and update corresponding arrays for image viewing and form submission.

### Syntax

```javascript
fetchEditDBImages(images, images_url, imageViewerArray, setImageViewerArray, imageFormdataArray, setImageFormdataArray)
```

### Parameters

    images: An array of image objects from the database.
    images_url: A string representing the base URL for the images.
    imageViewerArray: An existing array of image URLs for image viewing.
    setImageViewerArray: A function to update the imageViewerArray with the fetched image URLs.
    imageFormdataArray: An existing array of File objects for form submission.
    setImageFormdataArray: A function to update the imageFormdataArray with the converted File objects.

### Return Value

It loads images from Response and pass the file objects to imageViewerArray for displaying. It supports Edit mode for ImageGalleryUploader

### Usage

```javascript
import { fetchEditDBImages, convertImageUrlToFile } from 'image-gallery-uploader';

const images = [
  { file: 'image1.jpg' },
  { file: 'image2.jpg' },
  { file: 'image3.jpg' },
];

const images_url = 'https://example.com/images/';

const [imageViewerArray, setImageViewerArray] = useState([]);
const [imageFormdataArray, setImageFormdataArray] = useState([]);

fetchEditDBImages(
  images,
  images_url,
  imageViewerArray,
  setImageViewerArray,
  imageFormdataArray,
  setImageFormdataArray
);

```

The `fetchEditDBImages` function iterates over the `images` array, fetches the corresponding image URLs from the `images_url`, and performs the following actions for each image:

1. Appends the image URL to the `imageViewerArray` for image viewing.
2. Converts the image URL to a `File` object using the `convertImageUrlToFile` function.
3. Appends the `File` object to the `imageFormdataArray` for form submission.

After processing all the images, the function updates the `imageViewerArray` and `imageFormdataArray` using the provided callback functions.

**Note:** The `fetchEditDBImages` function assumes that the necessary variables (`images`, `images_url`, `imageViewerArray`, `setImageViewerArray`, `imageFormdataArray`, `setImageFormdataArray`) are available and used appropriately in your application.

That concludes the documentation for the `fetchEditDBImages` function.