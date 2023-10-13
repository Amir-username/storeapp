import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <Link to={`../product-details/${product.id}`}>
      <div
        className="flex flex-col justify-center items-center ring-1
       ring-gray-300 duration-500 hover:shadow-2xl cursor-pointer
         rounded-lg w-96 h-96"
      >
        <div className="flex flex-col justify-center items-center gap-y-4">
          <img src={product.image} className="w-44 h-44" />
          <p
            className={`text-center text-gray-700 ${
              product.title.length > 50 ? "text-base" : "text-lg"
            } px-10 capitalize overflow-clip`}
          >
            {product.title}
          </p>
          <p className="text-center text-gray-700 text-sm px-10 capitalize font-snigletR">
            {product.category}
          </p>
          <p className="text-center text-gray-700 text-sm px-10 capitalize font-snigletR">
            {product.price}$
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
