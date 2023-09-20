import CategoryItem from "./CategoryItem";

import ELECTRONICCAT from "../../../assets/ELECTRONICCAT.png";
import JEWELERY from "../../../assets/JEWELERYCAT.png";
import MENCAT from "../../../assets/MENCAT.png";
import WOMENCAT from "../../../assets/WOMENCAT.png";

import DOUBLEUNDERLINE from "../../../assets/DOUBLEUNDERLINE.svg";

function Categories() {
  return (
    <>
      <div className="flex flex-col gap-0 mt-40 mb-10 justify-center items-center">
        <p className="text-gray-600 text-center md:text-4xl text-2xl font-bold">
          categories
        </p>
        <img src={DOUBLEUNDERLINE} alt="underline" className="md:w-12 md:h-12 w-8 h-8"/>
      </div>
      <div className="flex flex-wrap md:gap-10 gap-5 justify-center items-center rounded-lg p-5 md:mx-80 md:pt-8 pt-4">
        <CategoryItem image={ELECTRONICCAT} name={"electronic"} />
        <CategoryItem image={JEWELERY} name={"jewelery"} />
        <CategoryItem image={MENCAT} name={"men's clothing"} />
        <CategoryItem image={WOMENCAT} name={"women's clothing"} />
      </div>
    </>
  );
}

export default Categories;
