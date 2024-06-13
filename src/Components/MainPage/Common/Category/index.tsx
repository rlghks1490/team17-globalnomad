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
      className={`category ${isActive ? "active" : ""} 
                        flex w-fit flex-shrink-0 cursor-pointer items-center justify-center gap-4 rounded-xl border border-gnDarkGreen bg-white p-4 text-lg font-medium text-gnDarkGreen
                        ${isActive ? "hover:bg-gnGray900 bg-gnDarkGreen text-white" : "hover:bg-gnDarkGreen"}`}
      onClick={handleClick}
    >
      {category}
    </div>
  );
};

export default Category;
