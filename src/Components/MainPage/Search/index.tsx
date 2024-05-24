import { useState } from "react";
import Search from "./Search";

interface Activity {
  title: string;
}

const index = () => {
  const [activities] = useState<Activity[]>([
    { title: "Activity 1" },
    { title: "Activity 2" },
    { title: "Activity 3" },
  ]);

  const [searchResult, setSearchResult] = useState<Activity[]>([]);

  return (
    <div>
      <Search data={{ activities }} setSearchResult={setSearchResult} />
      {/* 검색 결과를 표시할 수 있습니다 */}
      <div>
        {searchResult.map((activity, index) => (
          <div key={index}>{activity.title}</div>
        ))}
      </div>
    </div>
  );
};

export default index;
