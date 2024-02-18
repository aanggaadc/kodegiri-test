import { Link } from "react-router-dom";
import Styles from "./logo.module.scss";

export default function HeaderLogo({ isHome }: { isHome: boolean }) {
  return (
    <div className={Styles.logo}>
      <Link to="/">
        <img
          src={isHome ? "loyaoute.svg" : "/loyaoute-2.svg"}
          alt="company logo"
        />
        <h1 className={Styles.hidden}>loyaoute</h1>
      </Link>
    </div>
  );
}
