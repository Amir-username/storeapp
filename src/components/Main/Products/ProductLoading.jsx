import ProductLoadingItem from "./ProductLoadingItem";

function ProductsLoading({ count }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        return <ProductLoadingItem key={i}/>;
      })}
    </>
  );
}

export default ProductsLoading;
