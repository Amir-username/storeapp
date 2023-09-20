import CategoryItem from "./CategoryItem";

import ELECTRONICCAT from "../../../assets/ELECTRONICCAT.png";
import JEWELERY from "../../../assets/JEWELERYCAT.png";
import MENCAT from "../../../assets/MENCAT.png";
import WOMENCAT from "../../../assets/WOMENCAT.png";

import DOUBLEUNDERLINE from "../../../assets/DOUBLEUNDERLINE.svg";

function Categories() {
  return (
    <div>
      <div className="flex flex-col gap-0 mt-40 mb-10 justify-center items-center">
        <p className="text-gray-600 text-center text-4xl font-bold">
          categories
        </p>
        <img src={DOUBLEUNDERLINE} alt="underline" className="w-12 h-12" />
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center  rounded-lg p-5 mx-80 pt-8">
        <CategoryItem image={ELECTRONICCAT} name={"electronic"} />
        <CategoryItem image={JEWELERY} name={"jewelery"} />
        <CategoryItem image={MENCAT} name={"men's clothing"} />
        <CategoryItem image={WOMENCAT} name={"women's clothing"} />
      </div>
    </div>
  );
}

export default Categories;
