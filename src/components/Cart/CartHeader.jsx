import CART from "../../assets/CART.png";

function CartHeader({ count }) {
  return (
    <div className="flex gap-5 items-center justify-center mt-40">
      <img src={CART} className="w-16 h-16 mt-2" />
      <p className="text-5xl font-patrick text-orange-300">
        your cart ({count})
      </p>
    </div>
  );
}

export default CartHeader;
