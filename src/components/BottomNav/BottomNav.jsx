import { useContext } from "react";
import CARTWHITE from "../../assets/CARTWHITE.png";
import { CartProvider } from "../../App";

function BottomNav() {
  const { count } = useContext(CartProvider);

  return (
    <div
      className="flex items-center justify-center md:hidden w-full
     bg-orange-400 h-14 fixed bottom-0 opacity-95 rounded-t-full"
    >
      <div className="flex gap-0.5">
        <span className="text-3xl font-patrick mt-0.5 text-white">{count}</span>
        <img src={CARTWHITE} className="w-10 h-10" />
      </div>
    </div>
  );
}

export default BottomNav;
