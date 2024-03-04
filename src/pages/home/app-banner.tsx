import PlayStoreIcon from "../../components/icons/play-store";
import AppsStoreIcon from "../../components/icons/apps-store";
import LayaouteLogo from "../../components/icons/layaoute-logo";
import { openNewTab } from "../../helper";
import Styles from "./app-banner.module.scss";

export default function AppBanner() {
  return (
    <section className={Styles.container}>
      <div className={Styles.imageApps}>
        <img src="/assets/images/bg-apps.png" alt="apps" />
      </div>

      <div className={Styles.content}>
        <div className={Styles.logo}>
          <LayaouteLogo
            width="156px"
            height="34px"
            fontColor="#fff"
            fill="#fff"
          />
        </div>

        <h2>Get Instant Access: Download Now!</h2>
        <p>
          Download our <span>Loyauté</span> now to unlock exclusive promotions
          and explore exciting features
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
      </div>
    </section>
  );
}
