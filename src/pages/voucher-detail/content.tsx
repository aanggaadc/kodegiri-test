import CalendarIcon from "../../components/icons/calendar";
import Styles from "./content.module.scss";

export default function Content() {
  return (
    <article className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.brand}>
          <div className={Styles.brandLogo}>
            <img src="/assets/images/merchants/starbucks.png" alt="starbucks" />
          </div>
          <p className={Styles.brandName}>Starbucks</p>
        </div>

        <h2 className={Styles.titleVoucher}>STARBUCKS BUY ONE GET ONE</h2>

        <div className={Styles.divider} />

        <div className={Styles.date}>
          <CalendarIcon />

          <div className={Styles.dateDetail}>
            <p>Expiry date</p>
            <p>30 Februray 2024 - 07 March 2024</p>
          </div>
        </div>

        <p className={`${Styles.text} ${Styles.justify}`}>
          Indulge in the ultimate coffee experience with our exclusive Starbucks
          Buy One Get One (BOGO) offer! Savor the rich flavors of your favorite
          handcrafted beverages while enjoying the delightful perk of getting a
          second one on the house. Embrace the joy of sharing and make every sip
          a moment to remember. Hurry, this limited-time offer is your perfect
          excuse to treat yourself and a friend to the comforting warmth and
          deliciousness of Starbucks. Terms and conditions apply; visit our
          stores or website for more details. Cheers to twice the enjoyment at
          Starbucks!
        </p>

        <div className={Styles.dashedDivider} />

        <div className={Styles.section}>
          <p className={Styles.titleSection}>Benefit</p>

          <ul className={Styles.sectionList}>
            <li>
              <p className={Styles.text}>
                <b>Double the Enjoyment</b>: <br /> With the BOGO voucher, you
                get the opportunity to enjoy two Starbucks beverages for the
                price of one. This means you can savor your favorite coffee or
                try a new drink without worrying about the additional cost.
              </p>
            </li>
            <li>
              <p className={Styles.text}>
                <b>Perfect for Sharing Moments</b>: <br /> The BOGO voucher is
                ideal for sharing moments with friends, family, or colleagues.
                Whether it's catching up over coffee or surprising a loved one
                with their favorite Starbucks drink, the voucher enhances the
                social aspect of enjoying Starbucks together.
              </p>
            </li>
            <li>
              <p className={Styles.text}>
                <b>Exploration of Flavors:</b>
                <br /> Use the BOGO voucher to explore a variety of flavors and
                beverages. Try a different coffee blend, experiment with various
                syrups, or opt for a seasonal specialty drink. This promotion
                encourages customers to broaden their taste preferences
              </p>
            </li>
          </ul>
        </div>

        <div className={Styles.section}>
          <p className={Styles.titleSection}>How to get</p>

          <ul className={`${Styles.sectionList} ${Styles.decimal}`}>
            <li>
              <p className={Styles.text}>
                <b>Visit Starbucks:</b> <br /> Swing by any participating
                Starbucks store.
              </p>
            </li>
            <li>
              <p className={Styles.text}>
                <b>Order Your Favorite:</b> <br />
                Choose your go-to handcrafted beverage from the menu.
              </p>
            </li>
            <li>
              <p className={Styles.text}>
                <b>Mention BOGO at Checkout:</b>
                <br /> Inform the barista you're here for the Buy One Get One
                deal when placing your order.
              </p>
            </li>
            <li>
              <p className={Styles.text}>
                <b>Enjoy the Extra Treat:</b> <br /> Pay for one drink and savor
                a second one for free. Limited time only, so seize the moment!
              </p>
            </li>
          </ul>
        </div>

        <div className={Styles.section}>
          <p className={Styles.titleSection}>Terms and conditions</p>

          <ul className={`${Styles.sectionList} ${Styles.decimal}`}>
            <li>
              <p className={Styles.text}>
                This promotion is valid for a limited time only and is subject
                to change without notice.
              </p>
            </li>
            <li>
              <p className={Styles.text}>
                To avail of the Buy One Get One (BOGO) offer, customers must
                purchase a qualifying beverage at the regular price to receive a
                second beverage of equal or lesser value at no additional cost.
              </p>
            </li>
            <li>
              <p className={Styles.text}>
                The BOGO offer is applicable to select handcrafted beverages and
                sizes, as determined by Starbucks. Exclusions may apply.
              </p>
            </li>
            <li>
              <p className={Styles.text}>
                This promotion is valid at participating Starbucks stores only.
                Please check with your local store to confirm participation.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
