import NavItem from "./NavItem";
import HOME from "../../assets/HOME.svg";
import TAG from "../../assets/TAG.svg";
import CATEGORY from "../../assets/CATEGORY.svg";
import SHARE from "../../assets/SHARE.svg";

function NavMobile({ setIsOpen }) {
  return (
    <>
      <div className="bg-white fixed h-screen w-screen">
        <div className="text-left text-4xl p-5 font-mono text-gray-800">
          <span
            className="cursor-pointer active:bg-gray-100 py-3 px-6 rounded-full"
            onClick={() => setIsOpen((o) => !o)}
          >
            &#88;
          </span>
        </div>
        <div className="flex justify-center items-center mt-32 transition-all delay-150 duration-300">
          <div className="flex flex-col gap-5">
            <NavItem name={"Home"} icon={HOME} />
            <NavItem name={"Products"} icon={TAG} />
            <NavItem name={"Categories"} icon={CATEGORY} />
            <NavItem name={"Github"} icon={SHARE} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMobile;
