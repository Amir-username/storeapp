function ProductItem({ name }) {
  return (
    <div
      className="flex justify-center items-center ring-1 ring-gray-300 duration-500 hover:shadow-2xl cursor-pointer
         rounded-lg w-96 h-96"
    >
      <div className="flex flex-col justify-center items-center gap-y-3">
        <div className="bg-gray-400 rounded-lg w-64 h-64"></div>
        <p className="text-center text-gray-700 text-xl capitalize">{name}</p>
      </div>
    </div>
  );
}

export default ProductItem;
