import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import createPartner from "../controllers/partnerFormController/create.partner.controller.js";
import { getPartners, getPartnerById, updatePartnerStatus } from "../controllers/partnerFormController/get.partner.controller.js";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECREAT_KEY,
});

// Set up Cloudinary Storage for partner documents
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "wedding-wire-clone/partners";
    
    // Create subfolder based on file type
    if (file.fieldname === 'governmentId') {
      folder += "/government-ids";
    } else if (file.fieldname === 'businessCertificate') {
      folder += "/business-certificates";
    } else if (file.fieldname === 'workSamples') {
      folder += "/work-samples";
    }

    return {
      folder: folder,
      resource_type: file.mimetype === 'application/pdf' ? "raw" : "image",
      allowedFormats: ['jpg', 'jpeg', 'png', 'pdf'],
      public_id: `${file.fieldname}-${Date.now()}`,
      transformation: file.mimetype.startsWith('image') ? [{ width: 1000, crop: "limit" }] : undefined
    };
  }
});

// Configure file filter
const fileFilter = (req, file, cb) => {
  // Accept images and PDFs
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only images and PDF files are allowed!'), false);
  }
};

// Initialize multer upload with Cloudinary storage
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB file size limit
});

// Setup uploads for different file types
const uploadFields = upload.fields([
  { name: 'governmentId', maxCount: 1 },
  { name: 'businessCertificate', maxCount: 1 },
  { name: 'workSamples', maxCount: 5 }
]);

const partnerRouteAdmin = express.Router();
const partnerRouteUser = express.Router();
const partnerRoutePublic = express.Router();

// 🚀 ****Public Routes**** (No authentication required)
{
  // Add a public route for submitting partner applications without authentication
  partnerRoutePublic.post("/", uploadFields, createPartner);
}

// 🔒 ****Admin Routes**** (Authenticated ADMIN / SUPER_ADMIN only)
{
  partnerRouteAdmin.use(jwtAuthentication, roleMiddleware(["ADMIN", "SUPER_ADMIN"]));
  // Get all partner applications
  partnerRouteAdmin.get("/", getPartners);
  // Get specific partner application
  partnerRouteAdmin.get("/:id", getPartnerById);
  // Update partner application status
  partnerRouteAdmin.patch("/:id/status", updatePartnerStatus);
}

// 🔑 ****User Routes**** (Any authenticated user)
{
  partnerRouteUser.use(jwtAuthentication);
  // Submit partner application
  partnerRouteUser.post("/", uploadFields, createPartner);
}

export { partnerRouteAdmin, partnerRouteUser, partnerRoutePublic };