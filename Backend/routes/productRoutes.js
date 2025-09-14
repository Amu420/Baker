import express from "express";
import multer from "multer";
import { createProduct, getProducts } from "../controller/product/productController.js";

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// Add product (with image upload)
router.post("/add", upload.single("image"), createProduct);

// Get all products
router.get("/getproducts", getProducts);

export default router;
