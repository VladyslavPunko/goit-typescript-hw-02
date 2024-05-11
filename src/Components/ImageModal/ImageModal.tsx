import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
  },
};

Modal.setAppElement("#root");

export interface ImageModalProps {
  urlModal: string | null;
  description: string | null;
  isOpen: boolean;
  onClose: () => void;
}
const ImageModal = ({
  onClose,
  urlModal,
  isOpen,
  description,
}: ImageModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      {urlModal !== null && <img src={urlModal} alt={description ?? ""} />}
    </Modal>
  );
};

export default ImageModal;
