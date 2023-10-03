import { useParams } from "react-router-dom"

function ProductsPage() {
    const {category} = useParams()
  return (
    <>
      <div className="flex h-screen justify-center items-center text-6xl">
        {category ? category : <p>category</p>}
      </div>
    </>
  );
}

export default ProductsPage;
