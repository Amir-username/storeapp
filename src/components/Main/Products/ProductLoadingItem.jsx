function ProductLoadingItem() {
  return (
    <>
      <div className="flex flex-col gap-2 p-5 ring-1 ring-gray-300 rounded-lg">
        <div
          className="flex justify-center animate-pulse items-center bg-gray-300 ring-1
        ring-gray-300 duration-500 hover:shadow-2xl cursor-pointer
        rounded-lg w-80 h-64"
        ></div>
        <div
          className="flex justify-center animate-pulse items-center bg-gray-300 ring-1
        ring-gray-300 duration-500 hover:shadow-2xl cursor-pointer
        rounded-lg w-80 h-5"
        ></div>
        <div
          className="flex justify-center animate-pulse items-center bg-gray-300 ring-1
        ring-gray-300 duration-500 hover:shadow-2xl cursor-pointer
        rounded-lg w-80 h-5"
        ></div>
        <div
          className="flex justify-center animate-pulse items-center bg-gray-300 ring-1
        ring-gray-300 duration-500 hover:shadow-2xl cursor-pointer
        rounded-lg w-80 h-5"
        ></div>
      </div>
    </>
  );
}

export default ProductLoadingItem;
