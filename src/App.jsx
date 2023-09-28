import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const fetchCategories = async () => {
      const res = await fetch('https://fakestoreapi.com/products/categories');
      const data = await res.json();
      setCategories(data)
    }

    fetchCategories();
  }, [])

  return (
    <div>
      <Navbar />
      <Main categories={categories}/>
      <Footer />
    </div>
  );
}

export default App;
