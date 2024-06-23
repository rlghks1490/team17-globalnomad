import React from "react";
import Image from "next/image";
import ErrorImage from "../public/images/Lovepik_com-401711314-youth-festival-black-carnival-silhouette__1_-removebg.png";
import EmptyLayout from "@/layouts/EmptyLayout";
import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();

  const handleBackPage = () => {
    router.back();
  };
  return (
    <div className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center">
        <Image src={ErrorImage} alt="404 이미지" width={300} height={300} />
        <span className="mb-3 border-b-2 text-7xl font-bold drop-shadow-xl">
          404
        </span>
        <p className="text-xl font-bold">앗!! 페이지를 찾을 수 없습니다!!!</p>
        <p className="text-xl font-bold">Page Not Found</p>
      </div>
      <div>
        <button
          className="h-10 w-96 rounded-3xl border-4 bg-violet-500 text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
          type="button"
          onClick={handleBackPage}
        >
          이전 페이지로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default Page404;

Page404.getLayout = function getLayout(page: React.ReactNode) {
  return <EmptyLayout>{page}</EmptyLayout>;
};
