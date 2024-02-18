import { useState } from "react";
import Hero from "./hero";
import Navigation from "./navigation";
import Content from "./content";
import PromoSlider from "../../components/promo-slider";

import Styles from "./index.module.scss";

export default function VoucherDetail() {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      <Navigation threshold={120} activeSection={activeSection} />

      <Hero />
      <div className={Styles.content}>
        <Content onScroll={handleScroll} activeSection={activeSection} />
        <div id="anotherPromo" className={Styles.promoContainer}>
          <h2 className={Styles.promoTitle}>Promo you might like</h2>
          <p className={Styles.promoSubTitle}>
            Don't miss out! Limited time offer inside!
          </p>

          <PromoSlider padding="190px" />
        </div>
      </div>
    </>
  );
}
