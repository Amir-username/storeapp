import { useState } from "react";
import NavMobile from "./NavMobile";
import NavFull from "./NavFull";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="pb-2 fixed bg-white shadow-lg shadow-white">
        {isOpen ? (
          <NavMobile setIsOpen={setIsOpen} />
        ) : (
          <NavFull setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
}

export default Navbar;
