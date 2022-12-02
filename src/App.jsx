import React from "react";
import { DataProvider } from "./context/dataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

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
              path="/"
              exact
              element={
                <React.Suspense fallback={"Loading..."}>
                  <HomePage />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/"
              exact
              element={
                <React.Suspense fallback={"Loading..."}>
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
