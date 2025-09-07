import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";
import "./dashboard.css";
import { breadimage, cake } from '../assets/assets';
function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#"><span className="logo">Bakers Bliss</span></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Products</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner">
        <div className="banner-text">
          <h1 className="bakery-name">BAKERS BLISS</h1>
          <h4 className="bakery-desciption">
            Experience the art of baking—where passion meets perfection, and every bite tells a delicious story.
          </h4>
          <a href="#" className="btn-order">Order Now</a>
        </div>
      </div>

      {/* About Bakery */}
      <div className="container-fluid about-bakery mt-5">
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
              <p>Skilled Professional</p>
              <h2>175</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bakery-card">
              <i className="fa-solid fa-bread-slice bakery-card-icons"></i>
              <p>Total Product</p>
              <h2>135</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bakery-card">
              <i className="fa-solid fa-cart-plus bakery-card-icons"></i>
              <p>Order Everyday</p>
              <h2>9357</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Call Us Section */}
      <div className="call-us container-fluid mt-5 text-center">
        <div className="row">
          <div className="col-lg-6">
            <h3>The best bakery In <br /> Your city</h3>
          </div>
          <div className="col-lg-6">
            <h3>Call Us <br /> +0123456789 </h3>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container-fluid mt-5">
        <h4>CAKES</h4>
        <div className="row gy-5">
          <div className="col-lg-3">
            <div className="card-product">
              <h5>American-heritage-chocolate</h5>
              <p>Price:1500/-</p>
              <p>Weight:1.5kg</p>
              <img src={cake.cake1} alt="" className="img-fluid" />
              <button className="btn btn-dark mt-3">Add To Cart</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-product">
              <h5>Strawberry Chocolate</h5>
              <p>Price:900/-</p>
              <p>Weight:1.5kg</p>
              <img src={cake.cake2} alt="" className="img-fluid" />
              <button className="btn btn-dark mt-3">Add To Cart</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-product">
              <h5>Pineapple Chocolate</h5>
              <p>Price:850/-</p>
              <p>Weight:3kg</p>
              <img src={cake.cake3} alt="" className="img-fluid" />
              <button className="btn btn-dark mt-3">Add To Cart</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-product">
              <h5>Pineapple+Strawberry Cake</h5>
              <p>Price:1500/-</p>
              <p>Weight:3kg</p>
              <img src={cake.cake4} alt="" className="img-fluid" />
              <button className="btn btn-dark mt-3">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
