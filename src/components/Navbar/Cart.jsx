import { useContext } from "react";
import CART from "../../assets/CART.png";
import { CartProvider } from "../../App";

function Cart() {
  const { count } = useContext(CartProvider);

  return (
    <div
      className="md:flex hidden md:visible items-center gap-2 ring-1 ring-orange-100 hover:ring-orange-300 p-3
         rounded-lg cursor-pointer"
    >
      <div className="text-xl text-orange-400">{count}</div>
      <img src={CART} className="w-8 h-8" />
    </div>
  );
}

export default Cart;
