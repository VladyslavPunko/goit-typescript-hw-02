import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";
import { FC, FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (inputSearch: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputSearch = (
      form.querySelector<HTMLInputElement>('input[name="search"]') || {}
    ).value;
    if (!inputSearch || inputSearch.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(inputSearch);
  };

  return (
    <header className={css.headerSearch}>
      <form className={css.fomrSearch} onSubmit={handleOnSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit" className={css.btn}>
          <BsSearch />
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
