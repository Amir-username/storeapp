import { useContext } from "react";
import GridHeader from "../GridHeader";
import ProductItem from "./ProductItem";
import { StoreProvider } from "../../../App";

function Products() {
  const { products } = useContext(StoreProvider);

  return (
    <div>
      <GridHeader title={"products"} />
      <div
        className="flex flex-wrap md:gap-10 gap-5 justify-center
       items-center rounded-lg p-5 md:pt-8 pt-4"
      >
        {products.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </div>
      <div className="flex justify-center items-center p-10 ">
        <div
          className="p-4 bg-orange-500 rounded-lg text-white text-lg
         font-bold cursor-pointer hover:bg-orange-400"
        >
          view all products
        </div>
      </div>
    </div>
  );
}

export default Products;
