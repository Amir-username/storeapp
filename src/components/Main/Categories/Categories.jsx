import { useContext } from 'react';

import CategoryItem from "./CategoryItem";

import GridHeader from "../GridHeader";

import ELECTRONICCAT from "../../../assets/ELECTRONICCAT.png";
import JEWELERY from "../../../assets/JEWELERYCAT.png";
import MENCAT from "../../../assets/MENCAT.png";
import WOMENCAT from "../../../assets/WOMENCAT.png";
import { CategoryProvider } from '../../../App';

const images = [ELECTRONICCAT, JEWELERY, MENCAT, WOMENCAT];

function Categories() {
  const {categories} = useContext(CategoryProvider)

  return (
    <>
      <GridHeader title={"categories"} />
      <div className="flex flex-wrap md:gap-10 gap-5 justify-center items-center rounded-lg p-5 md:mx-80 md:pt-8 pt-4">
        {categories.map((category, index) => {
          console.log(category);
          return (
            <CategoryItem
              name={category}
              image={images[index]}
              key={category}
            />
          );
        })}
      </div>
    </>
  );
}

export default Categories;
