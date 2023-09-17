import NavBrand from "./NavBrand";
import NavItem from "./NavItem";

function NavFull({isOpen}) {
  return (
    <div className="flex p-3 h-16 w-screen justify-center md:justify-start">
        <NavBrand />
    </div>
  );
}

export default NavFull;
