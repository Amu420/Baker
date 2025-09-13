import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";
import "./dashboard.css";
import productsData from "./products"; // adjust the path if needed
import ProductCard from "./ProductCard"; // adjust the path if needed

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand logo" href="#">Bakers Bliss</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#products">Products</a>
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#contact">Contact</a>
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

      {/* About Bakery */}
      <section id="about" className="container-fluid about-bakery py-5">
        <div className="row gy-5">
          <div className="col-lg-3">
            <div className="bakery-card">
              <i className="fa-solid fa-shield bakery-card-icons"></i>
              <p>Years Experience</p>
              <h2>50</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bakery-card">
              <i className="fa-solid fa-user-tie bakery-card-icons"></i>
              <p>Skilled Professionals</p>
              <h2>175</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bakery-card">
              <i className="fa-solid fa-bread-slice bakery-card-icons"></i>
              <p>Total Products</p>
              <h2>135</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bakery-card">
              <i className="fa-solid fa-cart-plus bakery-card-icons"></i>
              <p>Orders Everyday</p>
              <h2>9357</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Call Us */}
      <section className="call-us container-fluid text-center py-5">
        <div className="row">
          <div className="col-lg-6">
            <h3>The best bakery in <br /> your city</h3>
          </div>
          <div className="col-lg-6">
            <h3>Call Us <br /> +0123456789</h3>
          </div>
        </div>
      </section>




      {/* Products Section */}
<section id="products" className="container-fluid py-5">
  {productsData.map((category, index) => (
    <div key={index}>
      <h2 className="text-center mb-4">{category.category}</h2>
      <div className="row gy-5">
        {category.items.map((product, i) => (
          <div key={i} className="col-lg-3 col-md-6">
            <div className="card-product">
              <h5>{product.name}</h5>
              <p>Price: ₹{product.price}</p>
              <p>Weight: {product.weight}</p>
              <img src={product.img} alt={product.name} className="img-fluid" />
              <button className="btn btn-dark mt-3">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</section>


      

      {/* Footer */}
      <footer id="contact" className="bg-dark text-white text-center py-4 mt-5">
        <p>© {new Date().getFullYear()} Bakers Bliss. All Rights Reserved.</p>
        <p>Follow us: 
          <a href="#" className="text-white ms-2"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white ms-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white ms-2"><i className="fab fa-twitter"></i></a>
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
