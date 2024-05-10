import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPhotosByInput } from "../photos-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

export interface Photo {
  url: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  urlModal: string;
  description: string;
}

export interface FetchPhotoResponse {
  total_pages: number;
  results: Photo[];
}

function App() {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>("");

  useEffect((): void | (() => void) => {
    if (!inputSearch) return;

    async function fetchPhotos() {
      try {
        setLoading(true);
        const { total_pages, results } = await fetchPhotosByInput(
          inputSearch,
          page
        );
        setPhotos((prevPhotos) => [...prevPhotos, ...results]);
        setShowBtn(total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [inputSearch, page]);

  const onSubmit = (inputSearch: string): void => {
    setInputSearch(inputSearch);
    setPhotos([]);
    setPage(1);
    setShowBtn(false);
  };

  const onClickButton = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (urlModal: string, description: string): void => {
    setImageSrc(urlModal);
    setDescription(description);
  };

  const closeModal = (): void => {
    setImageSrc(null);
    setDescription(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length !== 0 && (
        <ImageGallery photos={photos} openModal={openModal} />
      )}
      {showBtn && <LoadMoreBtn onClickButton={onClickButton} />}
      <ImageModal
        isOpen={imageSrc !== null}
        onClose={closeModal}
        urlModal={imageSrc}
        description={description}
      />
    </>
  );
}

export default App;
