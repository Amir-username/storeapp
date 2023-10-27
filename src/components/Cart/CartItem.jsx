function CartItem({ product }) {
  return (
    <div className="flex gap-3 p-10 ring-1 ring-gray-400 rounded-lg h-20 w-[1000px] items-center">
      <img src={product.image} className="w-20 h-20 rounded-lg" />
      <div>{product.title}</div>
      <div className="text-base text-gray-700">{product.category}</div>
      <button className="bg-rose-700 rounded-lg p-3 text-white">delete</button>
    </div>
  );
}

export default CartItem;
