import Modal from "react-modal";
import { useEffect } from "react";
Modal.setAppElement("#root");

// const ImageModal = ({ isOpen, image, onClose }) => {
//   return <Modal></Modal>;
// };

const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
    >
      <div onClick={handleOverlayClick}>
        <img src={image} />
      </div>
    </Modal>
  );
};
export default ImageModal;
