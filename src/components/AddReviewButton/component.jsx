import { useState } from "react";
import { Button } from "../Button/component";
import { ReviewsForm } from "../ReviewsForm/component";
import { Modal } from "../Modal/component";
import { useBlur } from "../../contexts/Blur";

export const AddReviewButton = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { switchBlur, isBlurActive } = useBlur();

  const openModal = () => {
    setIsModalOpen(true);
    switchBlur();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    switchBlur();
  };

  return (
    <>
      <Button
        onClick={() => openModal()}
        className={className}
        disabled={isModalOpen === true}
      >
        Add Your review
      </Button>
      {isModalOpen && (
        <Modal onClose={() => closeModal()}>
          <ReviewsForm onSubmit={() => closeModal()} />
        </Modal>
      )}
    </>
  );
};
