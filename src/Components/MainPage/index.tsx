import {
  getActivities,
  getPopularActivities,
  getSearchActivities,
} from "@/Components/MainPage/Apis/Get/GetActivities";
import MainLayout from "@/Components/MainPage/Common/MainLayout";
import Pagination from "@/Components/MainPage/Common/Pagination";
import Search from "@/Components/MainPage/Common/Search";
import Skeleton from "@/Components/MainPage/Common/Skeleton";
import ActivitiesList from "@/Components/MainPage/ActivitiesList";
import Banner from "@/Components/MainPage/Banner";
import CategoryFilter from "@/Components/MainPage/CategoryFilter";
import PopularActivitiesList from "@/Components/MainPage/PopularActivitiesList";
import { IMAGE } from "@/Components/MainPage/Constants/ImportImages";
import useResponsiveSize from "@/Components/MainPage/Hooks/useResponsiveSize";
import { useCategoryFilterStore } from "@/Components/MainPage/Stores/Activities";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

const MainPage = () => {
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const currentSize = useResponsiveSize();

  const { mainCategory, setMainCategory, mainFilter, setMainFilter } =
    useCategoryFilterStore();

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSearchResult = () => {
    setMainCategory("");
    setMainFilter("");
    setCurrentPage(1);
    if (keyword) {
      setSearchKeyword(keyword);
      return;
    }
    setSearchKeyword("");
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [mainCategory, mainFilter]);

  const {
    data: popularActivitiesData,
    isSuccess: isGetPopularActivitiesSuccess,
  } = useQuery({
    queryKey: ["popularActivities"],
    queryFn: getPopularActivities,
    retry: false,
  });

  const { data: activitiesData, isSuccess: isGetActivitiesSuccess } = useQuery({
    queryKey: [
      "activities",
      {
        categoryFilter: `${mainCategory}-${mainFilter}`,
        page: currentPage,
      },
    ],
    queryFn: () =>
      getActivities({
        currentPage,
        currentSize,
        category: mainCategory,
        filter: mainFilter,
      }),
    retry: false,
    placeholderData: keepPreviousData,
  });

  const { data: searchResultData, isSuccess: isGetSearchResultDataSuccess } =
    useQuery({
      queryKey: [
        "activities",
        { keyword: searchKeyword, page: currentPage, size: currentSize },
      ],
      queryFn: () =>
        getSearchActivities({
          currentPage,
          currentSize,
          keyword: searchKeyword,
        }),
      retry: false,
      enabled: !!searchKeyword,
    });

  if (!isGetPopularActivitiesSuccess || !isGetActivitiesSuccess)
    return (
      <MainLayout>
        <Banner />
        <div className="absolute bottom-[5rem]">
          <Search
            keyword={keyword}
            onSubmit={onSearchResult}
            onChange={handleValueChange}
          />
        </div>
        <div className="flex flex-col items-center gap-16">
          <Skeleton type="title" />
          <Skeleton type="popular" />
          <CategoryFilter />
          <Skeleton type="all" />
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <Banner />
      <div className="relative top-[31rem]">
        <Search
          keyword={keyword}
          onSubmit={onSearchResult}
          onChange={handleValueChange}
        />
      </div>
      {!!searchKeyword ? (
        <>
          {isGetSearchResultDataSuccess && searchResultData.totalCount > 0 ? (
            <>
              <div className="flex flex-col items-center gap-16">
                <ActivitiesList
                  activities={searchResultData.activities}
                  search={searchKeyword}
                  searchTotalCount={searchResultData.totalCount}
                />
              </div>
              <div className="mt-28">
                <Pagination
                  data={searchResultData}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  PAGE_LIMIT={currentSize}
                />
              </div>
            </>
          ) : (
            <div className="mt-40 flex flex-col items-center gap-8">
              <Image
                src={IMAGE.noData.default.src}
                alt={IMAGE.noData.default.alt}
                className="sm:h-80 sm:w-80 h-96 w-96"
              />
              <span className="text-2xl font-medium text-gray-600">
                검색 결과가 없습니다.
              </span>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex flex-col items-center gap-16 pt-[35rem]">
            <PopularActivitiesList
              popularActivities={popularActivitiesData.activities}
            />
            <CategoryFilter />
            <ActivitiesList
              category={mainCategory}
              activities={activitiesData?.activities}
            />
          </div>
          <div className="mt-28">
            <Pagination
              data={activitiesData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              PAGE_LIMIT={currentSize}
            />
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default MainPage;
