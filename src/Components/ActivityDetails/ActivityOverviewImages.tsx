import Image from "next/image";

interface SubImage {
  id: number;
  imageUrl: string;
}

interface ActivityOverviewImagesProps {
  bannerImageUrl: string;
  subImages: SubImage[];
}

const ActivityOverviewImages = ({ bannerImageUrl, subImages} : ActivityOverviewImagesProps) => {
  return (
    <div className="grid grid-cols-4 grid-row-4 gap-2 justify-items-center w-[1200px] h-[534px]">
      <div className="col-span-2 row-span-2 relative" style={{width:'100%', height: '100%'}}>
          <Image src={`${bannerImageUrl}`} alt="bannerImage" fill style={{objectFit: 'cover'}}/>
      </div>
      <div className="relative" style={{width:'100%', height: '100%'}}>
          <Image src="/images/ActivityIntroductionImage_test1.png" alt="introductionImage" fill style={{objectFit: 'cover'}} />
      </div>
      <div className="relative" style={{width:'100%', height: '100%'}}>
          <Image src="/images/ActivityIntroductionImage_test2.png" alt="introductionImage" fill style={{objectFit: 'cover'}}/>
      </div>
      <div className="relative" style={{width:'100%', height: '100%'}}>
          <Image src="/images/ActivityIntroductionImage_test3.png" alt="introductionImage" fill style={{objectFit: 'cover'}}/>
      </div>
      <div className="relative" style={{width:'100%', height: '100%'}}>
          <Image src="/images/ActivityIntroductionImage_test4.png" alt="introductionImage" fill style={{objectFit: 'cover'}}/>
      </div>
    </div>
  )
}

export default ActivityOverviewImages;