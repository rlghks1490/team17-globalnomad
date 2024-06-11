import { ReactNode, useEffect, useRef } from "react";

interface CommonModalProps {
  isOpenModal: boolean;
  children: ReactNode;
  onClose: () => void;
  size: "alert" | "Review" | "ReservationCancel";
}

const CommonModal = ({
  isOpenModal,
  children,
  onClose,
  size,
}: CommonModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const modalSize = {
    alert: "w-[540px] h-[250px]",
    Review: "w-[480px] h-[750px]",
    ReservationCancel: "w-[300px] h-[185px]",
  };

  if (!isOpenModal) return null;

  return (
    <div className="fixed z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80">
      <div
        className={`flex items-center justify-center rounded-lg bg-white p-6 ${modalSize[size]}`}
        ref={wrapperRef}
      >
        {children}
      </div>
    </div>
  );
};

export default CommonModal;
