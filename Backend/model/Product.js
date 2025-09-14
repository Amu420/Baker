import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: String },
  category: { type: String, required: true },
  img: { type: String } // store only the image path/URL
});

const Product = mongoose.model("Product", productSchema);

export default Product;
