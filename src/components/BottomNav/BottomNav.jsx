import { useContext } from "react";
import { CartProvider } from "../../App";
import { Link, useLocation } from "react-router-dom";

import CARTWHITE from "../../assets/CARTWHITE.png";
import CHECK from "../../assets/CHECK.svg";

function BottomNav() {
  const { pathname } = useLocation();
  console.log(pathname);

  const { count } = useContext(CartProvider);

  return (
    <Link to={"/cart"}>
      <div
        className="flex items-center justify-center md:hidden w-full hover:bg-orange-500 hover:opacity-95
     bg-orange-400 h-14 fixed bottom-0 opacity-80 rounded-t-full cursor-pointer"
      >
        <div className="flex gap-0.5">
          {pathname === "/cart" ? (
            <>
              <div className="text-lg font-semibold text-white uppercase">
                Confirm Orders
              </div>
              <img src={CHECK} className="w-5 h-5 ml-1" />
            </>
          ) : (
            <>
              <span className="text-3xl font-patrick mt-0.5 text-white">
                {count}
              </span>
              <img src={CARTWHITE} className="w-10 h-10" />
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BottomNav;
