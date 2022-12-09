import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataContext from "../../context/dataContext";

const Home = () => {
  const baseUrl = "https://dummyjson.com";
  const { products, setLoading, isLoading } = useContext(dataContext);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <main className="page home-page">
          <section className="section mobile-section">
            <div className="section-container">
              {/* <h1>Phones</h1> */}
              <div className="grid-section">
                <div className="grid-wrapper">
                  {/* {products &&
                    products
                      .filter((p) => p.category === "smartphones")
                      .slice(0, 4)
                      .map((m, i) => (
                        <div className="grid-item" key={i}>
                          <div className="item-wrapper">
                            <h1>{m.title}</h1>
                            <img
                              src={m.images.length > 1 ? m.images[3] : m.images}
                              alt={m.title}
                            />
                          </div>
                        </div>
                      ))} */}
                  {products &&
                    products.slice(0, 50).map((m, i) => (
                      <div className="single-grid-item" key={i}>
                        <div className="item-wrapper">
                          <div className="item-img-container">
                            <Link to={`/products/${m.id}`}>
                              <img
                                src={
                                  m.images.length > 1 ? m.images[1] : m.images
                                }
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
                    ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
