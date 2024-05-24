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
      className={`flex w-fit cursor-pointer items-center justify-center gap-4 rounded-lg border p-4 text-center md:p-2 ${isActive ? "bg-gnDarkGreen text-white" : "bg-white text-gnDarkGreen"} ${isActive ? "border-gnDarkGreen" : "border-gnDarkGreen"}`}
      onClick={handleClick}
    >
      {category}
    </div>
  );
};

export default Category;
