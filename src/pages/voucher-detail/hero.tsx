import Styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={Styles.container}>
      <img src="/assets/images/bg-hero-voucher.jpg" alt="hero voucher" />
    </section>
  );
}
