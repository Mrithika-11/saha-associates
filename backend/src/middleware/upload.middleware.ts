import multer from "multer";
import path from "path";
import cloudinary from "@/config/cloudinary";

// Temporary local disk storage before streaming to Cloudinary
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, "src/uploads"),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

function fileFilter(_req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) {
  const allowedImage = /jpeg|jpg|png|webp/;
  const allowedDoc = /pdf/;
  const ext = path.extname(file.originalname).toLowerCase().replace(".", "");

  if (file.fieldname === "resume" ? allowedDoc.test(ext) : allowedImage.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"));
  }
}

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

/** Streams a local file to Cloudinary and returns the secure URL. Call after multer saves the temp file. */
export async function uploadToCloudinary(localPath: string, folder: string) {
  const result = await cloudinary.uploader.upload(localPath, {
    folder: `saha-associates/${folder}`,
    resource_type: "auto",
  });
  return result.secure_url;
}
