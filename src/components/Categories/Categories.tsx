import { useRef } from "react";
import "./Categories.css";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import { scrollHandler } from "../../util/functions";
import { useGetCategoriesQuery } from "../../Store/CategotieSlice";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate();

  const catRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetCategoriesQuery(1);

  const selectCategoryHandler = (e: React.MouseEvent) => {
    const selectedCategory = e.currentTarget.id;

    navigate(`/products/category/${selectedCategory}`);
  };

  return (
    <div className="flex ">
      <ChevronDoubleLeftIcon
        className="w-70 md:w-40"
        onClick={() => scrollHandler("left", catRef.current)}
      />
      <div
        ref={catRef}
        className="categories-box flex overflow-x-auto scroll-smooth whitespace-nowrap "
      >
        {!isLoading &&
          data.map((item: string) => (
            <div
              key={item}
              id={item}
              className="m-4 text-2xl p-4 rounded-lg shadow-sm hover:shadow-md "
              onClick={selectCategoryHandler}
            >
              {item}
            </div>
          ))}
      </div>
      <ChevronDoubleRightIcon
        className="w-70 md:w-40"
        onClick={() => scrollHandler("right", catRef.current)}
      />
    </div>
  );
};

export default Categories;
