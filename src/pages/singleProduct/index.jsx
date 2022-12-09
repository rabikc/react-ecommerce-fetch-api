import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";
import dataContext from "../../context/dataContext";

const SingleProduct = () => {
  const { productId } = useParams();
  const { isLoading, setLoading } = useContext(dataContext);
  const [product, setProduct] = useState();

  const productUrl = `https://dummyjson.com/products/${parseInt(productId)}`;

  const fetchProduct = async () => {
    setLoading(true);
    try {
      fetch(productUrl)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          console.log(data);
        })
        .finally(setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <section className="single-product-section single-page">
          {product && (
            <>
              <h1>{product.title}</h1>
              <img src={product.images[0]} alt={product.title} />
            </>
          )}
        </section>
      )}
    </>
  );
};

export default SingleProduct;
