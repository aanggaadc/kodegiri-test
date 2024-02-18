import RewardCard from "../../components/reward-card";
import { rewardCategories, rewardList } from "../../constant";
import Styles from "./rewards.module.scss";

export default function Rewards() {
  return (
    <section className={Styles.wrapper}>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Popular Merchant</h2>
        <p className={Styles.subTitle}>Explore our latest popular rewards!</p>

        <div className={Styles.categoryTab}>
          {rewardCategories.map((category) => (
            <button
              key={category.id}
              className={`${Styles.btnCategory} ${
                category.id === 1 ? Styles.active : null
              }`}
            >
              {category.icon && (
                <img
                  className={Styles.categoryIcon}
                  src={category.icon}
                  alt={category.name}
                />
              )}
              {category.name}
            </button>
          ))}
        </div>

        <div className={Styles.rewardList}>
          {rewardList.map((reward) => (
            <RewardCard
              key={reward.id}
              image={reward.image}
              name={reward.name}
              brandLogo={reward.brandLogo}
              brandName={reward.brandName}
              point={reward.point}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
