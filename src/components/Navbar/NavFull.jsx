import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import NAVMENUN from "../../assets/NAVMENU.svg";

function NavFull({ isOpen }) {
  return (
    <>
      <div className="flex p-3 gap-2 h-16 w-screen justify-center md:justify-start">
        <div className="flex w-full items-center justify-center mt-1">
          <NavBrand />
        </div>
        <img
          src={NAVMENUN}
          alt="menu"
          className="w-12 h-12 cursor-pointer active:bg-gray-100 rounded-full"
        />
      </div>
    </>
  );
}

export default NavFull;
