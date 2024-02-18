import Hero from "./hero";
import Merchants from "./merchants";
import Rewards from "./rewards";
import AppBanner from "./app-banner";
import PromoSlider from "../../components/promo-slider";

import Styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Hero />

      <div className={Styles.promoContainer}>
        <div className={Styles.promoContent}>
          <div className={Styles.promoHeader}>
            <h2 className={Styles.promoTitle}>Latest Promo</h2>
            <img src="/assets/icons/fire.png" alt="fire" />
          </div>
          <p className={Styles.promoSubTitle}>
            Don't miss out! Limited time offer inside!
          </p>
        </div>

        <PromoSlider />
      </div>

      <Merchants />
      <Rewards />
      <AppBanner />
    </>
  );
}
