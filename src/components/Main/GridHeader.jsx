import DOUBLEUNDERLINE from "../../assets/DOUBLEUNDERLINE.svg";

function GridHeader({ title }) {
  return (
    <div className="flex flex-col gap-0 mt-40 mb-10 justify-center items-center">
    <p className="text-gray-600 text-center md:text-4xl text-2xl font-bold">
      {title}
    </p>
    <img
      src={DOUBLEUNDERLINE}
      alt="underline"
      className="md:w-12 md:h-12 w-8 h-8"
    />
  </div>
  );
}

export default GridHeader;
