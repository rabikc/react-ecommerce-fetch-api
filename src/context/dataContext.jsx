import { useState, useEffect, createContext } from "react";

const dataContext = createContext("");

export default dataContext;

export const DataProvider = (props) => {
  const baseUrl = "https://dummyjson.com";

  const [isLoading, setLoading] = useState(false);

  const [products, setProducts] = useState();
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();
  const [comments, setComments] = useState();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      await fetch(baseUrl + "/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .finally((data) => console.log(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    products,
  };

  return (
    <dataContext.Provider value={value}>{props.children}</dataContext.Provider>
  );
};
