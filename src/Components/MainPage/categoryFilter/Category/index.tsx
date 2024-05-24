import { useState } from "react";
import Category from "./Category";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {["문화 · 예술", "식음료", "스포츠", "투어", "관광", "웰빙"].map(
        (category) => (
          <Category
            key={category}
            category={
              category as
                | "문화 · 예술"
                | "식음료"
                | "스포츠"
                | "투어"
                | "관광"
                | "웰빙"
            }
            isActive={selectedCategory === category}
            onClick={handleCategoryClick}
          />
        ),
      )}
    </div>
  );
};

export default Index;
