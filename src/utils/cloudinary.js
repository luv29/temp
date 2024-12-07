import { v2 as cloudinary } from 'cloudinary';
import fs from fs;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KERY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        console.log("File is uploaded on cloudinary", response.url);
        return response;
    }
    catch(error) {
        // remove the locallys saved uploaded file as the upload got failed
        fs.unlinkSync(localFilePath);
        return null;
    }
};

export {uploadOnCloudinary}