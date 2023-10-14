import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import NAVMENUN from "../../assets/NAVMENU.svg";
import NavItemFull from "./NavItemFull";
import NavItemDropDown from "./NavItemDropDown";
import { Link, Outlet } from "react-router-dom";
import Cart from "./Cart";

function NavFull({ setIsOpen }) {
  return (
    <>
      <div className="flex p-3 md:gap-96 h-16 w-screen justify-center md:justify-start">
        <div className="flex gap-2 w-full md:w-32 items-center justify-center mt-1">
          <Link to={""}>
            <NavBrand />
          </Link>
        </div>
        <div className="hidden md:visible md:flex py-2 gap-10 w-fit mt-0.5">
          <Link to={"products/all"}>
            <NavItemFull name={"products"} />
          </Link>
          <NavItemDropDown />
          <NavItemFull name={"signup"} />
        </div>
        <Cart />
        <img
          onClick={() => setIsOpen(true)}
          src={NAVMENUN}
          alt="menu"
          className="w-12 h-12 cursor-pointer active:bg-gray-100 rounded-full md:hidden"
        />
      </div>
    </>
  );
}

export default NavFull;
