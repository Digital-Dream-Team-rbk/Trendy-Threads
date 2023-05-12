
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dyrmior0g",
  api_key: "713614456113873",
  api_secret: "7fPA_Qy7RJUSiVw4VCvIwln9L3Y",
});
const uploadImage = async (imagePath) => {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
    try {
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};
module.exports={uploadImage}
