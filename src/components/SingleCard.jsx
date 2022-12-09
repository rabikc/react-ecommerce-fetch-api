import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ product }) => {
  return (
    <div className="single-grid-item">
      <div className="item-wrapper">
        <div className="item-img-container">
          <Link to={`/react-ecommerce-fetch-api/products/${product.id}`}>
            <img
              src={
                product.images.length > 1 ? product.images[1] : product.images
              }
              alt={product.title}
              loading={product.id > 10 ? "lazy" : "eager"}
            />
          </Link>
        </div>
        <div className="details-container">
          <Link to={`/react-ecommerce-fetch-api/products/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>
          <div className="details">
            <span>${product.price}</span>
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
