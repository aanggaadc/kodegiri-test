import { Link } from "react-router-dom";
import { merchantListData } from "../../constant";
import Styles from "./merchants.module.scss";

export default function Merchants() {
  return (
    <section className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h2>Popular Merchant</h2>

          <Link to="/">
            <p>View More</p>
          </Link>
        </div>

        <div className={Styles.merchantList}>
          {merchantListData.map((merchant) => (
            <MerchantCard
              key={merchant.id}
              image={merchant.image}
              name={merchant.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const MerchantCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className={Styles.card}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};
