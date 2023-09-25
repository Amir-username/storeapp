import CategoryItem from "./CategoryItem";

import ELECTRONICCAT from "../../../assets/ELECTRONICCAT.png";
import JEWELERY from "../../../assets/JEWELERYCAT.png";
import MENCAT from "../../../assets/MENCAT.png";
import WOMENCAT from "../../../assets/WOMENCAT.png";
import GridHeader from "../GridHeader";

function Categories() {
  return (
    <>
      <GridHeader title={"categories"} />
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
