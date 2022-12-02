import React, { useContext, useEffect, useState } from "react";
import dataContext from "../../context/dataContext";

const Home = () => {
  const baseUrl = "https://dummyjson.com";
  const { products, setLoading } = useContext(dataContext);
  // const [phones, setPhones] = useState();

  // const fetchPhones = async () => {
  //   setLoading(true);
  //   try {
  //     await fetch(baseUrl + "/products/search?q=phone")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPhones(data.products);
  //         console.log(data);
  //       });
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchPhones();
  // }, []);

  return (
    <main className="page home-page">
      <section className="section mobile-section">
        <div className="section-container">
          <h1>Phones</h1>
          <div className="grid-section">
            <div className="grid-wrapper">
              {products &&
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
                  ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
