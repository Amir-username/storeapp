function ProductDetailsLoader() {
  return (
    <div className="flex items-center md:p-96 p-20 justify-center h-screen">
      <div className="flex flex-col gap-5 m-28 mt-72 md:mt-80 p-10 items-center ring-1 ring-gray-200 rounded-lg md:px-14 md:py-7">
        <div className="w-96 h-96 bg-gray-400 rounded-lg animate-pulse"></div>
        <div className="bg-gray-400 rounded-lg h-10 w-full animate-pulse"></div>
        <div className="bg-gray-400 rounded-lg h-10 w-full animate-pulse"></div>
        <div className="bg-gray-400 rounded-lg h-10 w-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default ProductDetailsLoader;
