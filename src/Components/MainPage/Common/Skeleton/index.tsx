import throttle from "@/Components/MainPage/Function/Throttle";
import { useEffect, useState } from "react";

type Props =
  | "popular"
  | "all"
  | "reservation"
  | "management"
  | "search"
  | "title";

const Skeleton = ({ type }: { type: Props }) => {
  const [allItem, setAllItem] = useState(8);
  const [popularItem, setPopularItem] = useState(3);

  useEffect(() => {
    const handleResize = throttle(() => {
      const breakPoint = window.innerWidth;

      if (breakPoint > 1200) {
        setAllItem(8);
        setPopularItem(3);
      } else if (breakPoint > 768) {
        setAllItem(9);
        setPopularItem(3);
      } else if (breakPoint > 375) {
        setAllItem(4);
        setPopularItem(9);
      }
    }, 100);

    window.addEventListener("resize", handleResize);
    document.body.style.overflowX = "hidden";

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  switch (type) {
    case "popular":
      return (
        <div className="grid grid-cols-3 gap-6">
          {[...Array(popularItem)].map((_, idx) => (
            <div key={idx} className="h-96 w-96 bg-gray-300"></div>
          ))}
        </div>
      );
    case "all":
      return (
        <div className="grid grid-cols-4 gap-12">
          {[...Array(allItem)].map((_, idx) => (
            <div key={idx} className="space-y-4">
              <div className="h-72 w-full rounded-xl bg-gray-300"></div>
              <div className="h-5 w-36 bg-gray-300"></div>
              <div className="h-7 w-full bg-gray-300"></div>
              <div className="h-8 w-60 bg-gray-300"></div>
            </div>
          ))}
        </div>
      );
    case "reservation":
      return (
        <div className="space-y-6">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="flex space-x-6">
              <div className="h-52 w-52 rounded-xl bg-gray-300"></div>
              <div className="flex-1 space-y-4">
                <div className="h-6 w-24 bg-gray-300"></div>
                <div className="h-6 w-full bg-gray-300"></div>
                <div className="h-6 w-full bg-gray-300"></div>
                <div className="h-7 w-40 bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      );
    case "management":
      return (
        <div className="space-y-6">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex space-x-6">
              <div className="h-52 w-52 rounded-xl bg-gray-300"></div>
              <div className="flex-1 space-y-4">
                <div className="h-6 w-24 bg-gray-300"></div>
                <div className="h-6 w-full bg-gray-300"></div>
                <div className="mt-20 h-7 w-full bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      );
    case "search":
      return (
        <div className="h-44 w-full rounded-lg bg-gray-300 shadow-lg"></div>
      );
    case "title":
      return (
        <div className="flex w-full items-center justify-between">
          <span className="text-3xl font-bold">🔥 인기 체험</span>
          <span className="h-12 w-40 bg-gray-300"></span>
        </div>
      );
    default:
      return null;
  }
};

export default Skeleton;
