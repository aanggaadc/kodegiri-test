import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import NotificationIcon from "../icons/notification";
import Styles from "./profiles.module.scss";

export default function ProfilesHeader({ isHome }: { isHome: boolean }) {
  const username = useSelector((state: RootState) => state.auth.username);

  return (
    <div className={Styles.profiles}>
      <NotificationIcon fill={isHome ? "#fff" : undefined} />

      <div className={`${Styles.profile} ${isHome ? Styles.home : null}`}>
        <span>
          <p className={Styles.greeting}>Good morning,</p>
          <p className={Styles.name}>{username ?? ""}</p>
        </span>

        <div className={Styles.avatar}>
          <img src="/assets/images/dummy-avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
