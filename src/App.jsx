import React from "react";
import { DataProvider } from "./context/dataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingComponent from "./components/LoadingComponent";

const HomePage = React.lazy(() => import("./pages/home/index"));
const SingleProductPage = React.lazy(() =>
  import("./pages/singleProduct/index")
);

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/react-ecommerce-fetch-api/"
              exact
              element={
                <React.Suspense fallback={<LoadingComponent />}>
                  <HomePage />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/react-ecommerce-fetch-api/products/:productId"
              exact
              element={
                <React.Suspense fallback={<LoadingComponent />}>
                  <SingleProductPage />
                </React.Suspense>
              }
            ></Route>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
