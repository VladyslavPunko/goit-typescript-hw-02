import css from "./Loader.module.css";
import { InfinitySpin } from "react-loader-spinner";

import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
