import css from "./LoadMoreBtn.module.css";

export interface LoadMoreBtn {
  onClickButton: () => void;
}

const LoadMoreBtn = ({ onClickButton }: LoadMoreBtn) => {
  return (
    <button type="button" className={css.btn} onClick={onClickButton}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
