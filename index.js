import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dhxs2rcpj",
  api_key: "627993321328399",
  api_secret: "nYh7TPokTVNv2CacDyN60ro60W8",
});
cloudinary.uploader.upload("./desplay1.png", function (error, result) {
  console.log(result);
});
