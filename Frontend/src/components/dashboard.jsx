import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { getProducts } from "../services/productService";

function Dashboard() {
  const navigate = useNavigate();
  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include"
      });
      // Optionally clear any local storage/session storage here
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };
  const [productsData, setProductsData] = useState([]);   // store products
  const [loading, setLoading] = useState(true);           // for loader
  const [error, setError] = useState(null);               // for errors
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch products from backend using productService
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProductsData(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))];

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand logo me-auto" href="#">Bakers Bliss</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto align-items-center">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#products">Products</a>
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#contact">Contact</a>
              <button className="btn btn-danger ms-3" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner / Hero Section */}
      <header className="banner d-flex align-items-center">
        <div className="banner-text">
          <h1 className="bakery-name">BAKERS BLISS</h1>
          <h4 className="bakery-desciption">
            Experience the art of baking—where passion meets perfection, and every bite tells a delicious story.
          </h4>
          <a href="#products" className="btn-order mt-3">Order Now</a>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="container-fluid py-5">
        {/* Category Buttons */}
        <div className="mb-4 text-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-light mx-1 mb-2${selectedCategory === cat ? ' active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {loading ? (
          <h3 className="text-center">Loading products...</h3>
        ) : error ? (
          <h3 className="text-center text-danger">{error}</h3>
        ) : filteredProducts.length === 0 ? (
          <h3 className="text-center">No products found.</h3>
        ) : (
          <div className="row gy-5">
            {filteredProducts.map((product, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="card-product">
                  <h5>{product.name}</h5>
                  <p>Price: ₹{product.price}</p>
                  <p>Weight: {product.weight}</p>
                  <img src={`http://localhost:3000/${product.image}`} alt={product.name} className="img-fluid" />
                  <button className="btn btn-dark mt-3">Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dark text-white text-center py-4 mt-5">
        <p>© {new Date().getFullYear()} Bakers Bliss. All Rights Reserved.</p>
        <p>
          Follow us: 
          <a href="#" className="text-white ms-2"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white ms-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white ms-2"><i className="fab fa-twitter"></i></a>
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
