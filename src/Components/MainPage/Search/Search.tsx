import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import BaseButton from "@/Components/Button/BaseButton";

interface Activity {
  title: string;
}

interface Props {
  data: {
    activities: Activity[];
  };
  setSearchResult: Dispatch<SetStateAction<Activity[]>>;
}

const Search = ({ data, setSearchResult }: Props) => {
  const [isKeyword, setIsKeyword] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);

    if (e.target.value === "") {
      setIsKeyword(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword) return;

    const filterItem = data.activities.filter((activity: Activity) =>
      activity.title.includes(keyword),
    );
    setSearchResult(filterItem);
    setIsKeyword(true);
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <p className="mb-8 text-2xl font-bold text-gnLightBlack lg:mb-6 lg:text-lg">
        무엇을 체험하고 싶으신가요?
      </p>
      <div className="relative flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className={`flex w-full items-center justify-center gap-4 ${isKeyword ? "active" : ""}`}
        >
          <input
            className="w-full rounded-lg border border-gnGray400 bg-white bg-[url('/icons/bedIcon.svg')] bg-[1.2rem_1.6rem] bg-no-repeat p-4 pl-12 text-lg lg:bg-[url('/icons/bedIcon.svg')] lg:bg-[1.2rem_1.2rem] lg:bg-no-repeat lg:text-base"
            type="search"
            placeholder="내가 원하는 체험은"
            onChange={handleValueChange}
            value={keyword}
          />
          <div className="button">
            <BaseButton type={"submit"} size={"md"} text={"검색하기"} />
          </div>
        </form>
        {isKeyword && (
          <span className="absolute left-[4.3rem] top-[-1.2rem] bg-white px-1 text-lg text-gnGray500 lg:top-[-1rem] lg:text-base">
            내가 원하는 체험은
          </span>
        )}
      </div>
    </div>
  );
};

export default Search;
