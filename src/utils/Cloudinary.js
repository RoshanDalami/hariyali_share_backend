import * as dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder:'hariyali'
    });
    //file has been uploaded
    // console.log("File is uploaded on Cloudinary");
    // console.log(response.url)
    fs.unlinkSync(localFilePath)
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove locally saved temp file as upload failed.
    return null
  }
};

export {uploadOnCloudinary}