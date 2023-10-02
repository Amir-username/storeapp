import { useState, useContext } from "react";
import DropDownItem from "./DropDownItem";
import {StoreProvider } from "../../App";

function NavItemDropDown() {
  const [DropOpen, setDropOpen] = useState(false);

  const { categories } = useContext(StoreProvider);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-gray-700 hover:text-gray-900"
          onClick={() => setDropOpen((o) => !o)}
        >
          categories
          <svg
            className={`${
              DropOpen && "rotate-180"
            } h-5 w-5 text-gray-400 mt-1.5 duration-300`}
            viewBox="0 0 20 20"
            fill="gray"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          DropOpen === false && "hidden"
        } absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        {categories.map((category, index) => {
          return <DropDownItem name={category} key={index} />;
        })}
      </div>
    </div>
  );
}

export default NavItemDropDown;
