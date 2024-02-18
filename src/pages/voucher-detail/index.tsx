import Hero from "./hero";
import Content from "./content";
import PromoSlider from "../../components/promo-slider";

import Styles from "./index.module.scss";

export default function VoucherDetail() {
  return (
    <div className={Styles.container}>
      <Hero />
      <div className={Styles.content}>
        <Content />
        <div className={Styles.promoContainer}>
          <h2 className={Styles.promoTitle}>Promo you might like</h2>
          <p className={Styles.promoSubTitle}>
            Don't miss out! Limited time offer inside!
          </p>

          <PromoSlider padding="190px" />
        </div>
      </div>
    </div>
  );
}
