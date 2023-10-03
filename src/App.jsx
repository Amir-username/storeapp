import { useEffect, useState, useContext, createContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/Products/ProductsPage";

export const StoreProvider = createContext();

function App() {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categoryError, setCategoryError] = useState("");

  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [productError, setProductError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoryLoading(true);
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setCategoryError(error.message);
        console.log(error.message);
      } finally {
        setCategoryLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProductLoading(true);
        const res = await fetch("https://fakestoreapi.com/products?limit=9");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setProductError(error.message);
        console.log(error.message);
      } finally {
        setProductLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
            <Route path="" element={<Main />}/>
            <Route path="products" element={<ProductsPage />}/>
          </Routes>
      </StoreProvider.Provider>
      <Footer />
    </div>
  );
}

export default App;
