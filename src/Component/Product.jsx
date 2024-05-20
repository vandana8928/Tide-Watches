import React from "react";

const Product = () => {
  // Array of products
  const products = [
    {
      name: "LifeStyle",
      imageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3,
      description: "Elegant Stainless Steel Watch",
      price: 19.99,
      oldPrice:300
    },
    {
        name: "LifeStyle",
        imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        description: "ELEGANT STAINLESS STEEL WATCH",
        price: 19.99,
        oldPrice:300
      },
      {
        name: "LifeStyle",
        imageUrl: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        description: "ELEGANT STAINLESS STEEL WATCH",
        price: 19.99,
        oldPrice:300
      },
      {
        name: "LifeStyle",
        imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        description: "ELEGANT STAINLESS STEEL WATCH",
        price: 19.99,
        oldPrice:300
      },
      {
        name: "LifeStyle",
        imageUrl: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        description: "ELEGANT STAINLESS STEEL WATCH",
        price: 19.99,
        oldPrice:300
      },
      {
        name: "LifeStyle",
        imageUrl: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        description: "ELEGANT STAINLESS STEEL WATCH",
        price: 19.99,
        oldPrice:300
      },
      {
        name: "LifeStyle",
        imageUrl: "https://images.unsplash.com/photo-1605101232508-283d0cd4909e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        description: "ELEGANT STAINLESS STEEL WATCH",
        price: 19.99,
        oldPrice:300
      },
      {
        name: "LifeStyle",
        imageUrl: "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        description: "ELEGANT STAINLESS STEEL WATCH",
        price: 19.99,
        oldPrice:300
      },
    // Add more products here as needed
  ];

  return (
    <div className="product">
      <h1>Products</h1>
      <div className="card">
        {products.map((product, index) => (
          <div className="sub-card" key={index}>
            <div className="images">
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="content">
              <div className="heading">
                <h5>{product.name}</h5>
                <div className="rating">
                  {Array.from({ length: product.rating }, (_, i) => (
                    <span key={i} className="star">&#9733;</span>
                  ))}
                  {Array.from({ length: 5 - product.rating }, (_, i) => (
                    <span key={i + product.rating} className="star">&#9734;</span>
                  ))}
                </div>
              </div>
              <p className="description">{product.description}</p>
              <div className="price">
                <del>{product.oldPrice}<span>&#8377;</span></del>
                <p><span>&#8377;</span>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
