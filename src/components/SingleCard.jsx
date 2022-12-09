import React from "react";

const SingleCard = () => {
  return (
    <div className="single-grid-item" key={i}>
      <div className="item-wrapper">
        <div className="item-img-container">
          <Link to={`/products/${m.id}`}>
            <img
              src={m.images.length > 1 ? m.images[1] : m.images}
              alt={m.title}
              loading={m.id > 10 ? "lazy" : "eager"}
            />
          </Link>
        </div>

        <Link to={`/products/${m.id}`}>
          <h2>{m.title}</h2>
        </Link>
        <span>${m.price}</span>
        <span>{m.rating}</span>
      </div>
    </div>
  );
};

export default SingleCard;
