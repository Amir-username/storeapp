import { Link, Outlet } from "react-router-dom";

function DropDownItem({ name, setDropDown }) {
  return (
    <Link to={`products/${name}`} onClick={() => setDropDown(false)}>
      <div className="text-gray-700 block px-4 py-4 text-sm hover:bg-gray-100 cursor-pointer">
        {name}
      </div>
    </Link>
  );
}

export default DropDownItem;
