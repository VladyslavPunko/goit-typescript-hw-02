import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { useRef } from "react";

import { Photo } from "../App";

export interface ImageGalleryProps {
  photos: Photo[];
  openModal: (urlModal: string, description: string) => void;
}

const ImageGallery = ({ photos, openModal }: ImageGalleryProps) => {
  const lastPhotoRef = useRef(null);

  return (
    <ul className={css.gallery_list}>
      {photos.map((photo, index) => (
        <li
          className={css.gallery_item}
          key={photo.id}
          ref={index === photos.length - 1 ? lastPhotoRef : null}
        >
          <ImageCard
            url={photo.urls.small}
            description={photo.alt_description}
            urlModal={photo.urls.regular}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
