import express from "express";
import {
  deleteImage,
  getImages,
  saveImages,
} from "../controllers/editorController/editor.controller.js";
import jwtAuthentication from "../middleware/auth.middleware.js";

const editorRouter = express.Router();

// Apply authentication middleware
editorRouter.use(jwtAuthentication);

// Define the route correctly
editorRouter.route("/").post(saveImages).get(getImages).delete(deleteImage);

export default editorRouter;

