import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
      <h1>Explore Our<br/><span>Stylish Watch</span> Collection</h1>
        <p>
        Watches are more than just a way to tell time; they're an expression of style and sophistication. From classic designs to modern innovations, watches have adorned the wrists of people around the world for generations. Explore our curated collection of timepieces and find the perfect accessory to complement your lifestyle.
        </p>
        <div className="btn">
          <button className="First-btn">Shop Now</button>
          <button className="Second-btn">Category</button>
        </div>
        <div className="shoping">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-45-461766.png" alt=""></img>
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png" alt=""></img>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Hero;
