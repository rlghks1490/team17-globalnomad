import Image from "next/image";
import kebab from "../../../public/icons/kebab.svg";
import { useEffect, useRef, useState } from "react";
import KebabOptions from "./KebabOptions";
import { useModal } from "@/hooks/useModal";
import ModalDeleteActivity from "../Modal/ModalDeleteActivity";

interface KebabProps {
  activityId: number;
}

const Kebab = ({ activityId }: KebabProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const kebabRef = useRef<HTMLDivElement>(null);
  const { isOpenModal, handleModalOpen, handleModalClose } = useModal();

  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      if (
        kebabRef.current &&
        !kebabRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="relative" ref={kebabRef}>
      <button onClick={() => setIsClicked(!isClicked)}>
        <Image src={kebab} alt="kebab" width={40} height={40} />
      </button>
      {isClicked && (
        <KebabOptions
          activityId={activityId}
          handleModalOpen={handleModalOpen}
        />
      )}
      {isOpenModal && (
        <ModalDeleteActivity
          isOpenModal={isOpenModal}
          onClose={handleModalClose}
          activityId={activityId}
        />
      )}
    </div>
  );
};

export default Kebab;
