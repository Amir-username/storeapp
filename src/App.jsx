import { useEffect, useState, useContext, createContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export const CategoryProvider = createContext();

function App() {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false);

  console.log(categoryLoading);

  useEffect(() => {
    const fetchCategories = async () => {
      setCategoryLoading(true);
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
      setCategoryLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <CategoryProvider.Provider
        value={{
          categories,
          setCategories,
          categoryLoading,
        }}
      >
        <Navbar />
        <Main />
      </CategoryProvider.Provider>
      <Footer />
    </div>
  );
}

export default App;
