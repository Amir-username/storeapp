function NavItem({ name, icon }) {
  return (
    <div className="flex gap-0 cursor-pointer">
      <img src={icon} alt="" className="w-5 h-5 mt-2.5" />
      <div className="text-gray-600 hover:text-gray-900 active:text-gray-900 p-1 text-lg lowercase text-center">
        {name}
      </div>
    </div>
  );
}

export default NavItem;
