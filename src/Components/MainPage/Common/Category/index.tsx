import React from "react";

interface CategoryProps {
  category: "문화 · 예술" | "식음료" | "스포츠" | "투어" | "관광" | "웰빙";
  isActive?: boolean;
  onClick: (category: string) => void;
}

const Category = ({ category, isActive = false, onClick }: CategoryProps) => {
  const handleClick = () => {
    onClick(category);
  };

  return (
    <div
      className={`${isActive ? "rounded-[0.93rem] bg-gnDarkGreen px-[1.88rem] py-[1rem] text-lg text-white hover:bg-gnLightBlack" : "flex w-fit shrink-0 cursor-pointer items-center justify-center gap-[0.62rem] rounded-[0.93rem] border border-gnDarkGreen bg-white px-[1.88rem] py-[1rem] text-lg font-medium text-gnDarkGreen hover:bg-gnGray200 tablet:px-[1.2rem] tablet:py-[0.7rem] tablet:text-[1.2rem] mobile:px-[1rem] mobile:py-[0.5rem] mobile:text-[1rem]"}`}
      onClick={handleClick}
    >
      {category}
    </div>
  );
};

export default Category;
