import { useState } from "react";
import Filter from "@/Components/MainPage/categoryFilter/Filter/Filter";

const Index = () => {
  const [filterState, setFilterState] = useState<string>("");

  return (
    <div>
      <Filter type="price" setFilterState={setFilterState} />
    </div>
  );
};

export default Index;
