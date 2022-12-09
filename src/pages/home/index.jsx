import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";
import SingleCard from "../../components/SingleCard";
import dataContext from "../../context/dataContext";

const Home = () => {
  const baseUrl = "https://dummyjson.com";
  const { products, setLoading, isLoading } = useContext(dataContext);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <main className="page home-page">
          <section className="section mobile-section">
            <div className="section-container">
              <div className="grid-section">
                <div className="grid-wrapper">
                  {products &&
                    products
                      .slice(0, 60)
                      .map((m, i) => <SingleCard product={m} key={i} />)}
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
