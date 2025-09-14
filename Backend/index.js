import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import connectToDatabase from "./config/mongodbconfig.js";

const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // allow frontend to access backend with cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Public folder for images
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/", userRoutes); 
app.use("/", productRoutes);

// Connect DB and Start Server
connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server is running on http://localhost:${port}`);
    });
    console.log("✅ Connected to the database successfully");
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
  });
