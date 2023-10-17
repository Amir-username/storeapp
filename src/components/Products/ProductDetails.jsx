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

  const { dispatch } = useContext(CartProvider);

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
          <div className="flex flex-col gap-5 m-28 mt-72 md:mt-80 p-10 items-center ring-1 ring-gray-200
           rounded-lg md:px-14 md:py-7">
            <img
              src={product.image}
              className={` ${
                product.description?.length > 500
                  ? "md:w-52 md:h-72 w-32 h-44"
                  : "w-44 h-56 md:w-64 md:h-80"
              }`}
            />
            <div className="text-center md:text-2xl text-lg font-bold text-gray-700">
              {product.title}
            </div>
            <div className="text-center md:text-lg text-gray-600 font-snigletR">
              {product.category}
            </div>

            <div
              className={`text-gray-700 ${
                product.description?.length > 500
                  ? "md:text-sm text-xs"
                  : "md:text-base text-sm"
              } text-justify`}
            >
              {product.description}
            </div>

            <div
              onClick={() => dispatch({ type: "add", payload: product })}
              className="flex gap-5 items-center justify-center
              p-2 rounded-lg bg-green-600 text-white md:text-xl text-lg
                mt-5 font-snigletR md:w-80 w-64 text-center hover:bg-green-500 cursor-pointer"
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
