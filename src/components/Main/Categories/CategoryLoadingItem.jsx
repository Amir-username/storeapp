function CategoryLoadingItem() {
  return (
    <>
      <div
        className="flex justify-center animate-pulse items-center bg-gray-300 ring-1
         ring-gray-300 duration-500 hover:shadow-2xl cursor-pointer
           rounded-lg w-96 h-96"
      >
        <div className="flex flex-col justify-center items-center gap-y-3"></div>
      </div>
    </>
  );
}

export default CategoryLoadingItem;
