import Image from "next/image";

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
    <div className="flex flex-row gap-4">
      <div>
        <Image
          src={`${profileImageUrl}`}
          alt="profileImage"
          width={15}
          height={45}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="text-base font-bold">{nickname}</div>
          <div>|</div>
          <div className="text-base font-normal">{createdAt}</div>
        </div>
        <div className="text-base font-normal">{content}</div>
      </div>
    </div>
  );
};

export default Comment;
