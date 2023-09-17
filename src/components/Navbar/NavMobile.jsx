import NavItem from "./NavItem";
import HOME from "../../assets/HOME.svg";
import TAG from "../../assets/TAG.svg";
import CATEGORY from "../../assets/CATEGORY.svg";
import SHARE from "../../assets/SHARE.svg";

function NavMobile({ isOpen, setIsOpen }) {
  return (
    isOpen && (
      <>
        <div className="text-left text-5xl p-5 font-mono text-gray-800">
          <span className="cursor-pointer" onClick={() => setIsOpen((o) => !o)}>
            &#88;
          </span>
        </div>
        <div className="flex h-72 justify-center items-center mt-20">
          <div className="flex flex-col gap-5">
            <NavItem name={"Home"} icon={HOME} />
            <NavItem name={"Products"} icon={TAG} />
            <NavItem name={"Categories"} icon={CATEGORY} />
            <NavItem name={"Github"} icon={SHARE} />
          </div>
        </div>
      </>
    )
  );
}

export default NavMobile;
