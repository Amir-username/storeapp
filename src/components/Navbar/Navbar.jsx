import { useState } from "react";
import NavMobile from "./NavMobile";
import NavFull from "./NavFull";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <NavMobile setIsOpen={setIsOpen} />
      ) : (
        <NavFull setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default Navbar;
