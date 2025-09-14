import axios from "axios";

const API_URL = "http://localhost:3000/getproducts"; // your backend API

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Add new product (if you need form later)
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
  }
};
