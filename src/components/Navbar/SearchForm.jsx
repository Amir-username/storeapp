import SEARCHW from "../../assets/SEARCHW.svg";

function SearchForm() {
  return (
    <div className="hidden md:flex md:visable gap-2  m-1 md:ml-10 md:w-fit">
      <input
        className="bg-gray-100 p-4 w-96 rounded-lg 
        focus:outline-none text-gray-500 dark:text-gray-300"
        type="search"
        placeholder="search products"
      />
      <div
        className=" bg-orange-400 hover:bg-orange-300 flex 
        rounded-lg gap-1 cursor-pointer"
      >
        <img src={SEARCHW} className="w-6 h-6 pl-1 mt-1" />
        <span className="lowercase text-white text-lg pr-3">Search</span>
      </div>
    </div>
  );
}

export default SearchForm;
