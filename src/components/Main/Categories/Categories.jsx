import { useContext } from 'react';

import CategoryItem from "./CategoryItem";

import GridHeader from "../GridHeader";

import ELECTRONICCAT from "../../../assets/ELECTRONICCAT.png";
import JEWELERY from "../../../assets/JEWELERYCAT.png";
import MENCAT from "../../../assets/MENCAT.png";
import WOMENCAT from "../../../assets/WOMENCAT.png";
import { CategoryProvider } from '../../../App';
import CategoryLoading from './CategoryLoading';

const images = [ELECTRONICCAT, JEWELERY, MENCAT, WOMENCAT];

function Categories() {
  const {categories, categoryLoading} = useContext(CategoryProvider)

  return (
    <>
      <GridHeader title={"categories"} />
      <div className="flex flex-wrap md:gap-10 gap-5 justify-center items-center rounded-lg p-5 md:mx-80 md:pt-8 pt-4">
        {!categoryLoading ? categories.map((category, index) => {
          return (
            <CategoryItem
              name={category}
              image={images[index]}
              key={category}
            />
          );
        }) : (
          <CategoryLoading />
        )}
      </div>
    </>
  );
}

export default Categories;
