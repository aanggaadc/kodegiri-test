import PlayStoreIcon from "../../components/icons/play-store";
import AppsStoreIcon from "../../components/icons/apps-store";
import { openNewTab } from "../../helper";
import Styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>
        Welcome to <span>Loyauté</span>
      </h2>

      <p className={Styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>

      <div className={Styles.ctaContainer}>
        <button
          onClick={() => openNewTab("https://play.google.com/")}
          className={Styles.ctaBtn}
        >
          <PlayStoreIcon />
          Play Store
        </button>

        <button
          onClick={() => openNewTab("https://www.apple.com/id/app-store/")}
          className={Styles.ctaBtn}
        >
          <AppsStoreIcon />
          Apps Store
        </button>
      </div>
    </section>
  );
}
