import { useState } from "react";
import { Button } from "../Button/component";
import { Modal } from "../Modal/component";
import { useBlur } from "../../contexts/Blur";
import { useUserAuthorization } from "../../contexts/UserAuthorization";
import { ReviewsFormContainer } from "../ReviewsForm/container";

export const AddReviewButton = ({ restaurantId, className }) => {
  const { isUserAuthorization } = useUserAuthorization();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { switchBlur } = useBlur();

  const openModal = () => {
    setIsModalOpen(true);
    switchBlur();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    switchBlur();
  };

  return (
    isUserAuthorization && (
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
            <ReviewsFormContainer
              restaurantId={restaurantId}
              closeModal={closeModal}
            />
          </Modal>
        )}
      </>
    )
  );
};
