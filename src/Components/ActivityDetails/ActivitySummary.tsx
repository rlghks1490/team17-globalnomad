import Image from "next/image";
import star_on from "../../../public/icons/star_on.svg"

interface ActivitySummaryProops {
  title: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
}

const ActivitySummary = ({ title, category, address, rating, reviewCount} : ActivitySummaryProops) => {
  return (
    <div className="flex flex-col gap-y-2.5">
      <div className="font-normal text-sm">
        <span>{category}</span>
      </div>
      <div className="font-bold text-4xl">
        <span>{title}</span>
      </div>
      <div className="flex items-center font-normal text-sm gap-3">
        <Image src={star_on} alt='rating' width={15} height={15}/>
        <span>{rating}({reviewCount}) {address}</span>
      </div>
    </div>
  )
}

export default ActivitySummary;