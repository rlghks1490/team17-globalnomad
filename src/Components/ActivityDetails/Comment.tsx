import Image from "next/image";
import Avatar from "../../../public/icons/avatar.svg";

interface CommnetProps {
  profileImageUrl: string;
  nickname: string;
  content: string;
  createdAt: string;
}

const Comment = ({
  profileImageUrl,
  nickname,
  content,
  createdAt,
}: CommnetProps) => {
  return (
    <div className="flex w-[1200px] flex-row gap-4">
      {profileImageUrl ? (
        <div className="h-[45px] w-[45px]">
          <Image
            className="h-[45px] w-[45px] rounded-full"
            src={profileImageUrl}
            alt="profileImage"
            width={15}
            height={45}
            priority
          />
        </div>
      ) : (
        <div className="h-[45px] w-[45px]">
          <Image
            className="h-[45px] w-[45px] rounded-full"
            src={Avatar}
            alt="profileImage"
            width={15}
            height={45}
            priority
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="text-base font-bold">{nickname}</div>
          <div>|</div>
          <div className="text-base font-normal text-gnGray600">
            {createdAt.slice(0, 10)}
          </div>
        </div>
        <div className="w-[729px] text-base font-normal">{content}</div>
      </div>
    </div>
  );
};

export default Comment;
