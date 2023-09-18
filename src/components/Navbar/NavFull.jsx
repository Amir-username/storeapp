import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import NAVMENUN from "../../assets/NAVMENU.svg";
import NavItemFull from "./NavItemFull";

function NavFull({ setIsOpen }) {
  return (
    <>
      <div className="flex p-3 gap-2 h-16 w-screen justify-center md:justify-start">
        <div className="flex w-full md:w-32 items-center justify-center mt-1">
          <NavBrand />
        </div>
        <div className="hidden md:visible md:flex py-2 gap-10 w-full pl-36">
          <NavItemFull name={"home"}/>
          <NavItemFull name={"home"}/>
          <NavItemFull name={"home"}/>
          <NavItemFull name={"home"}/>
          <NavItemFull name={"home"}/>
        </div>
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
