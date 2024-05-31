import { ReactNode, useEffect, useRef } from "react";

interface CommonModalProps {
  isOpenModal: boolean;
  children: ReactNode;
  onClose: () => void;
}

const CommonModal = ({ isOpenModal, children, onClose }: CommonModalProps) => {
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

  if (!isOpenModal) return null;

  return (
    <div className="fixed z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex rounded-lg bg-white p-6" ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
};

export default CommonModal;
