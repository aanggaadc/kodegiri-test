import Hero from "./hero";
import Merchants from "./merchants";
import Rewards from "./rewards";
import AppBanner from "./app-banner";
// import PromoSlider from "../../components/promo-slider";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <PromoSlider /> */}

      <Merchants />
      <Rewards />
      <AppBanner />
    </>
  );
}
