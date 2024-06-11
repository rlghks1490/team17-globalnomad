import Link from "next/link";

const KebabOptions = () => {
  return (
    <div>
      <div className="absolute right-0 z-50 flex flex-col items-center justify-center divide-y rounded-md border border-gnGray300 bg-white shadow-[0_4px_16px_0_#112211]">
        <Link href="/">
          <button className="whitespace-nowrap  px-11 py-4 text-lg font-medium">
            수정하기
          </button>
        </Link>
        <button className="whitespace-nowrap px-11 py-4 text-lg font-medium">
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default KebabOptions;
