import { useEffect, useState, useContext, createContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/Products/ProductsPage";
import { useStore } from "./customHooks/useStore";

export const StoreProvider = createContext();

function App() {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categoryError, setCategoryError] = useState("");

  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [productError, setProductError] = useState("");

  useStore(
    "https://fakestoreapi.com/products/categories",
    setCategories,
    setCategoryError,
    setCategoryLoading,
    []
  );

  useStore(
    "https://fakestoreapi.com/products?limit=9",
    setProducts,
    setProductError,
    setProductLoading,
    []
  )

  return (
    <div>
      <StoreProvider.Provider
        value={{
          categories,
          categoryLoading,
          products,
          productLoading,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="products/:category" index element={<ProductsPage />} />
        </Routes>
      </StoreProvider.Provider>
      <Footer />
    </div>
  );
}

export default App;
