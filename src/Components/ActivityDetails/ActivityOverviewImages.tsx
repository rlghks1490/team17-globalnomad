import Image from "next/image";

interface SubImage {
  id: number;
  imageUrl: string;
}

interface ActivityOverviewImagesProps {
  bannerImageUrl: string;
  subImages: SubImage[];
}

const ActivityOverviewImages = ({
  bannerImageUrl,
  subImages,
}: ActivityOverviewImagesProps) => {
  return (
    <div className="grid-row-4 grid h-[534px] w-[1200px] grid-cols-4 justify-items-center gap-2">
      <div
        className="relative col-span-2 row-span-2"
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          src={bannerImageUrl}
          alt="bannerImage"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {subImages.map((subImage) => (
        <div
          key={subImage.id}
          className="relative"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={subImage.imageUrl}
            alt="introductionImage"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ActivityOverviewImages;
