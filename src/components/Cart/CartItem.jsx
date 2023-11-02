function CartItem({ product }) {
  return (
    // <div className="flex gap-3 p-10 ring-1 ring-gray-400 rounded-lg h-20 w-[1000px] items-center">
    //   <img src={product.image} className="w-20 h-20 rounded-lg" />
    //   <div>{product.title}</div>
    //   <div className="text-base text-gray-700">{product.category}</div>
    //   <button className="bg-rose-700 rounded-lg p-3 text-white">delete</button>
    // </div>
    <div className="relative md:w-[1000px] w-[500px] h-24 rounded-lg ring-1 ring-gray-400 p-10 gap-3">
      <img src={product.image} className="absolute w-20 h-20 rounded-lg bottom-2 left-3" />
      <div className="absolute left-32 bottom-10">{product.title}</div>
      <div className="absolute text-base text-gray-700 left-32 bottom-5">{product.category}</div>
      <button className="absolute bg-rose-700 rounded-lg p-3 text-white right-3 bottom-6">delete</button>
    </div>
  );
}

export default CartItem;
