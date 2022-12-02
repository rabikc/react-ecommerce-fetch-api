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
      await fetch(baseUrl + "/products?limit=100")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          console.log(data.products);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      await fetch(baseUrl + "/users?limit=100")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.users);
          console.log(data.users);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      await fetch(baseUrl + "/posts?limit=150")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data.posts);
          console.log(data.posts);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchUsers();
    fetchPosts();
  }, []);

  const value = {
    products,
    users,
    posts,
    isLoading,
    setLoading,
  };

  return (
    <dataContext.Provider value={value}>{props.children}</dataContext.Provider>
  );
};
