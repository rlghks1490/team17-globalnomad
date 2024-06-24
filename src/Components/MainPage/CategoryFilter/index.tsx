import Category from "@/Components/MainPage/Common/Category";
import Filter from "@/Components/MainPage/Common/Filter/Filter";
import { ICON } from "@/Components/MainPage/Constants/ImportImages";
import useResponsiveSize from "@/Components/MainPage/Hooks/useResponsiveSize";
import { useCategoryFilterStore } from "@/Components/MainPage/Stores/Activities";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CategoryFilter = () => {
  const [categoryState, setCategoryState] = useState("");
  const [filterState, setFilterState] = useState("");
  const [categoryXState, setCategoryXState] = useState(0);
  const translateSize = useResponsiveSize(1, 1, 2, 3);
  const categoryRef = useRef<HTMLUListElement>(null);

  const { mainCategory, setMainCategory, mainFilter, setMainFilter } =
    useCategoryFilterStore();

  const categoryList: (
    | "문화 · 예술"
    | "식음료"
    | "스포츠"
    | "투어"
    | "관광"
    | "웰빙"
  )[] = ["문화 · 예술", "식음료", "스포츠", "투어", "관광", "웰빙"];

  const handleCategoryClick = (category: string) => {
    setFilterState("");
    if (category === categoryState) {
      setCategoryState("");
      return;
    }
    setCategoryState(category);
  };

  useEffect(() => {
    if (categoryRef.current !== null) {
      categoryRef.current.style.transition = "all 0.5s ease-in-out";
    }

    if (categoryRef.current !== null) {
      categoryRef.current.style.transform = `translateX(-${categoryXState * 50}%)`;
    }
  }, [categoryXState, translateSize]);

  useEffect(() => {
    setMainCategory(categoryState);
    setFilterState("");
    setMainFilter("");
  }, [categoryState, setMainCategory, setMainFilter]);

  useEffect(() => {
    setMainFilter(filterState);
  }, [filterState, setMainFilter]);

  return (
    <div className="flex w-full min-w-0 items-center justify-between">
      <div className="relative flex min-w-0 items-center justify-start">
        <div className="overflow-hidden">
          <ul
            className="flex items-center justify-start gap-[1.5rem] tablet:gap-[1rem] mobile:gap-[0.5rem]"
            ref={categoryRef}
          >
            {categoryList.map((category, index) => (
              <li key={`${category}-${index}`} className="flex-shrink-0">
                <Category
                  category={category}
                  isActive={categoryState === category}
                  onClick={handleCategoryClick}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Filter
          type="price"
          filterState={filterState}
          setFilterState={setFilterState}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
