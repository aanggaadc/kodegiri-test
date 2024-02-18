import { Link } from "react-router-dom";

import LayaouteLogo from "../icons/layaoute-logo";
import Styles from "./logo.module.scss";

export default function HeaderLogo({ isHome }: { isHome: boolean }) {
  return (
    <div className={Styles.logo}>
      <Link to="/">
        <LayaouteLogo fontColor={isHome ? "#fff" : undefined} />

        <h1 className={Styles.hidden}>loyaoute</h1>
      </Link>
    </div>
  );
}
