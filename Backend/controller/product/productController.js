import Product from "../../model/Product.js";

// Add new product
export const createProduct = async (req, res) => {
  try {
    const { name, price, weight } = req.body;

    const newProduct = new Product({
      name,
      price,
      weight,
      img: req.file ? `/uploads/${req.file.filename}` : null
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
