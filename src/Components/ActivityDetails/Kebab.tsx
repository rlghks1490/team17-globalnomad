import Image from "next/image";
import kebab from "../../../public/icons/kebab.svg";
import { useState } from "react";
import KebabOptions from "./KebabOptions";

interface KebabProps {
  activityId: number;
}

const Kebab = ({ activityId }: KebabProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="relative">
      <button onClick={() => setIsClicked(!isClicked)}>
        <Image src={kebab} alt="kebab" width={40} height={40} />
      </button>
      <>{isClicked && <KebabOptions activityId={activityId} />}</>
    </div>
  );
};

export default Kebab;
