import Styles from "./profiles.module.scss";

export default function ProfilesHeader() {
  return (
    <div className={Styles.profiles}>
      <img src="/assets/icons/notification.svg" alt="notifications" />

      <div className={Styles.profile}>
        <span>
          <p className={Styles.greeting}>Good morning,</p>
          <p className={Styles.name}>Johan Doe</p>
        </span>

        <div className={Styles.avatar}>
          <img src="/assets/images/dummy-avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
