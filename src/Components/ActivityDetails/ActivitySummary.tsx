import Image from "next/image";
import star_on from "../../../public/icons/star_on.svg"


const ActivitySummary = () => {
  return (
    <div className="flex flex-col gap-y-2.5">
      <div className="font-normal text-sm">
        <span>문화 · 예술</span>
      </div>
      <div className="font-bold text-4xl">
        <span>함께 배우면 즐거운 스트릿 댄스</span>
      </div>
      <div className="flex items-center font-normal text-sm gap-3">
        <Image src={star_on} alt='rating' width={15} height={15}/>
        <span>4.9(283) 서울 중구 청계천로 100</span>
      </div>
    </div>
  )
}

export default ActivitySummary;