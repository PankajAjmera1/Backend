import {v2 as cloudinary} from "cloudinary"
import { log } from "console"
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDE_NAME ,
    api_key:process.env.COLUDINARY_API_KEY,
    api_secret:process.env.COLUDINARY_API_SECRET
})



const uploadOnCloudinary = async(localFilePath) =>{
    try {
        if(!localFilePath) return null

        // uplad file on cloudinary

       const response = await cloudinary.uploader.upload(localFilePath ,{
            resource_type : "auto"
        })
        //file uplaod succesfully
        console.log("File uploaded on cloudinar",response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally save temporary file as opr got failes
        return null

        
    }
}

export {uploadOnCloudinary}