import PointIcon from "../icons/point";
import Styles from "./index.module.scss";

type RewardCardProps = {
  image: string;
  name: string;
  brandLogo: string;
  brandName: string;
  point: number;
};

export default function RewardCard({
  image,
  name,
  brandLogo,
  brandName,
  point,
}: RewardCardProps) {
  return (
    <article className={Styles.cardContainer}>
      <div className={Styles.cardImage}>
        <img src={image} alt={name} />
      </div>

      <div className={Styles.brand}>
        <div className={Styles.brandLogo}>
          <img src={brandLogo} alt={brandName} />
        </div>
        <p className={Styles.brandName}>{brandName}</p>
      </div>

      <p className={Styles.cardName}>{name}</p>

      <p className={Styles.pointStatus}>Point earned</p>
      <div className={Styles.point}>
        <PointIcon />
        {point}
      </div>
    </article>
  );
}
