import { useParams } from "react-router-dom";
import { useStore } from "../../customHooks/useStore";
import { useState } from "react";
import ProductItem from "../Main/Products/ProductItem";
import ProductsLoading from "../Main/Products/ProductLoading";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [productError, setProductError] = useState("");

  const { category } = useParams();

  useStore(
    category === "all"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${category}`,
    setProducts,
    setProductError,
    setProductLoading,
    [category]
  );

  return (
    <>
      <div className="flex flex-col mt-32 gap-8">
        <div className="text-center text-4xl font-semibold font-snigletR text-gray-500">
          {category}
        </div>
        <div
          className="flex flex-wrap md:gap-10 gap-5 justify-center
        items-center rounded-lg p-5 md:pt-32 pt-4"
        >
          {productLoading ? (
            <ProductsLoading count={9} />
          ) : (
            products.map((product) => {
              return <ProductItem product={product} key={product.id} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
