import { ChangeEvent, FormEvent, useState, useRef, useEffect } from "react";
import BaseButton from "@/Components/MainPage/Common/Button/BaseButton";
import { instance } from "@/Components/MainPage/Apis/axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/Components/MainPage/Common/Skeleton";

interface Props {
  onSubmit: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}

const Search = ({ keyword, onSubmit, onChange }: Props) => {
  const [isKeyword, setIsKeyword] = useState(false);
  const [title, setTitle] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getActivity = async () => {
    const res = await instance.get("/activities", {
      params: {
        method: "offset",
      },
    });
    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["/activities"],
    queryFn: getActivity,
  });

  const handleSearchFocus = () => {
    setIsFocus(true);
    setIsKeyword(true);
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    if (e.target.value === "") {
      setIsKeyword(false);
    } else {
      setIsKeyword(true);
      setIsFocus(false);
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      onChange(e);
    }, 300);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  let count = 1;
  useEffect(() => {
    if (data) {
      setTitle(data?.activities[0].title);
    }

    const title = setInterval(() => {
      if (count < data?.activities.length) {
        setTitle(data?.activities[count++].title);
      }
    }, 3000);

    return () => clearInterval(title);
  }, [data]);

  if (isLoading) return <Skeleton type="search" />;

  return (
    <div className="rounded-[1rem] bg-white px-[1.5rem] py-[1.5rem] shadow-lg">
      <p className="text-#333236 mb-[2rem] text-[1.25rem] font-bold leading-[1.5rem]">
        무엇을 체험하고 싶으신가요?
      </p>
      <div
        className={`relative flex items-center ${isKeyword ? "active" : ""}`}
      >
        <form
          onSubmit={handleSubmit}
          className={`flex w-full items-center gap-3 ${isKeyword ? "active" : ""}`}
          onFocus={handleSearchFocus}
        >
          <input
            className="w-full rounded-lg border border-gnGray300 bg-white bg-[url('/icons/bedIcon.svg')] bg-[1rem_1rem] bg-no-repeat p-4 pl-12 text-black"
            type="search"
            placeholder="내가 원하는 체험은"
            onChange={handleValueChange}
            value={keyword}
          />
          <div>
            <BaseButton type="submit" size="md" text="검색하기" />
          </div>
        </form>
        <div className="absolute left-44 top-1/2 hidden translate-y-1/2 transform text-lg text-gnGray500">
          <ul>{!keyword && !isFocus && <li>{title}</li>}</ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
