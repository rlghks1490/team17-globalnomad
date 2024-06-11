import { useState } from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
    document.body.style.overflow = "auto";
  };

  return {
    isOpenModal,
    handleModalOpen,
    handleModalClose,
  };
};

export interface ModalType {
  isOpenModal: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
}
