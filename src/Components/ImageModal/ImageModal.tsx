import Modal from "react-modal";
import { Photo } from "../App";

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
  urlModal: string;
  description: string;
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
      <img src={urlModal} alt={description} />
    </Modal>
  );
};

export default ImageModal;
