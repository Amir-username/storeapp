import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../customHooks/useStore";
import { useEffect, useState } from "react";
import { CartProvider } from "../../App";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const cart = useContext(CartProvider);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-10">{product.title}</div>
    </div>
  );
}

export default ProductDetails;
