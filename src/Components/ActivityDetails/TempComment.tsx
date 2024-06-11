import Image from "next/image";

const TempComment = () => {
  return (
    <div className="flex w-[1200px] flex-row gap-4">
      <div className="h-[45px] w-[45px]">
        <Image
          className="h-[45px] w-[45px] rounded-full"
          src="/images/sampleProfileImage2.png"
          alt="profileImage"
          width={45}
          height={45}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="text-base font-bold">코드잇</div>
          <div>|</div>
          <div className="text-base font-normal text-gnGray600">2023. 2. 4</div>
        </div>
        <div className="w-[729px] text-base font-normal">
          저는 저희 스트릿 댄서 체험에 참가하게 된지 얼마 안됐지만, 정말 즐거운
          시간을 보냈습니다. 새로운 스타일과 춤추기를 좋아하는 나에게 정말
          적합한 체험이었고, 전문가가 직접 강사로 참여하기 때문에 어떤 수준의
          춤추는 사람도 쉽게 이해할 수 있었습니다. 강사님께서 정말 친절하게
          설명해주셔서 정말 좋았고, 이번 체험을 거쳐 새러운 스타일과 춤추기에
          대한 열정이 더욱 생겼습니다. 저는 이 체험을 적극 추천합니다!
        </div>
      </div>
    </div>
  );
};

export default TempComment;
