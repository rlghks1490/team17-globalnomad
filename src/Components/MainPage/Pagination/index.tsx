import { useState } from "react";
import Pagination from "./Pagination";

const Index = () => {
  // Example data
  const [data] = useState({ totalCount: 100 }); // Assuming a total count of 100 for this example
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_LIMIT = 10; // Example page limit

  return (
    <div>
      <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        PAGE_LIMIT={PAGE_LIMIT}
      />
    </div>
  );
};

export default Index;
