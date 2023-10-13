import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../customHooks/useStore";
import { useEffect, useState } from "react";
import { CartProvider } from "../../App";
import ProductDetailsLoader from "./ProductDetailsLoader";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {dispatch} = useContext(CartProvider);

  useStore(
    `https://fakestoreapi.com/products/${id}`,
    setProduct,
    setError,
    setIsLoading,
    []
  );

  return (
    <>
      {isLoading ? (
        <ProductDetailsLoader />
      ) : (
        <div className="flex items-center md:p-96 p-20 justify-center h-screen">
          <div className="flex flex-col gap-5 m-28 mt-72 md:mt-80 p-10 items-center ring-1 ring-gray-200 rounded-lg md:px-14 md:py-7">
            <img src={product.image} className="w-64 h-72 md:w-72 md:h-96" />
            <div className="text-center md:text-2xl text-xl font-bold text-gray-700">
              {product.title}
            </div>
            <div className="text-center md:text-xl text-gray-600 font-snigletR">
              {product.category}
            </div>

            <div className="text-gray-700 md:text-lg text-justify">
              {product.description}
            </div>

            <div
              onClick={() => dispatch({ type: "add", payload: product })}
              className="flex gap-5 items-center justify-center
              p-5 rounded-lg bg-green-600 text-white md:text-xl text-lg
                mt-5 font-snigletR md:w-80 w-72 text-center hover:bg-green-500 cursor-pointer"
            >
              add to cart <span className="text-2xl">{product.price}$</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
