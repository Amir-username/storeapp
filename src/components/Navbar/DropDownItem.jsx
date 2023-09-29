function DropDownItem({name}) {
  return (
    <a
      href="#"
      className="text-gray-700 block px-4 py-4 text-sm hover:bg-gray-100"
      role="menuitem"
      tabIndex={-1}
      id="menu-item-0"
    >
      {name}
    </a>
  );
}

export default DropDownItem;
