import MainLayout from "@/Components/MainPage/MainLayout";
import Banner from "@/Components/MainPage/Banner/Banner";
import Pagination from "@/Components/MainPage/Pagination";
import Search from "@/Components/MainPage/Search";
import Filter from "@/Components/MainPage/categoryFilter/Filter";
import Category from "@/Components/MainPage/categoryFilter/Category";
// import PopularActivitiesList from "@/Components/MainPage/PopularActivitiesList";

const MainPage = () => {
  return (
    <MainLayout>
      <div>
        <Category />
      </div>
      <div className="relative bottom-24">
        <Search />
      </div>
      <div className="flex flex-col items-center gap-16">
        <Filter />
      </div>
      <div className="mt-28">
        <Pagination />
      </div>
      <Banner />
    </MainLayout>
  );
};

export default MainPage;
