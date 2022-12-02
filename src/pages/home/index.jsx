import React, { useContext } from "react";
import dataContext from "../../context/dataContext";

const Home = () => {
  const { products } = useContext(dataContext);

  return (
    <main className="page home-page">
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </main>
  );
};

export default Home;
