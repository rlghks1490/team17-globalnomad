import Image from "next/image";
import kebab from "../../../public/icons/kebab.svg";
import { useState } from "react";
import KebabOptions from "./KebabOptions";

const Kebab = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="relative">
      <button onClick={() => setIsClicked(!isClicked)}>
        <Image src={kebab} alt="kebab" width={40} height={40} />
      </button>
      <>{isClicked && <KebabOptions />}</>
    </div>
  );
};

export default Kebab;
