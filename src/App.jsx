import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
