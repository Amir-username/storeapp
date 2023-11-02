function CartItem({ product }) {
  return (
    // <div className="flex gap-3 p-10 ring-1 ring-gray-400 rounded-lg h-20 w-[1000px] items-center">
    //   <img src={product.image} className="w-20 h-20 rounded-lg" />
    //   <div>{product.title}</div>
    //   <div className="text-base text-gray-700">{product.category}</div>
    //   <button className="bg-rose-700 rounded-lg p-3 text-white">delete</button>
    // </div>
    <div className="relative md:w-[750px] w-[350px] h-24 rounded-lg ring-1 ring-gray-400 p-10 gap-3">
      <img src={product.image} className="absolute w-20 h-20 rounded-lg bottom-2 left-3" />
      <div className="absolute md:left-32 left-28 md:bottom-10 bottom-12 md:text-lg text-[12px]">{product.title}</div>
      <div className="absolute md:text-base text-[12px] text-gray-700 md:left-32 left-28 md:bottom-5 bottom-7">{product.category}</div>
      <button className="absolute bg-rose-700 rounded-lg p-3 text-white right-3 bottom-6 hover:bg-rose-600">delete</button>
    </div>
  );
}

export default CartItem;
