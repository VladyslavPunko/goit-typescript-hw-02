import css from "./ImageCard.module.css";

export interface ImageCardProps {
  url: string;
  description: string;
  urlModal: string;
  openModal: (urlModal: string, description: string) => void;
}
const ImageCard = ({
  url,
  description,
  urlModal,
  openModal,
}: ImageCardProps) => {
  return (
    <div>
      <img
        className={css.gallery_image}
        src={url}
        alt={description}
        onClick={() => openModal(urlModal, description)}
      />
    </div>
  );
};

export default ImageCard;
