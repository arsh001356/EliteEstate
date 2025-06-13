import express from "express";
import { addProperty, getProperties, getPropertyById } from "../controllers/property.controller.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/addproperty", upload.single("image"), addProperty);
router.get("/", getProperties);
router.get("/:id", getPropertyById);


export default router; 