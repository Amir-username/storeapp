import HEART from "../../assets/HEART.svg";

function Header() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center">
      <div className="text-gray-700 text-center text-4xl md:text-6xl font-patrick font-bold">
          welcome to store app
        </div>
        <div className="flex gap-1">
          <div className="text-gray-500 text-center md:text-xl font-snigletR">
            shopping is meditation
          </div>
          <img src={HEART} alt="" className="h-5 w-5 mt-0.5 animate-pulse" />
        </div>
      </div>
    </>
  );
}

export default Header;
