import { Link, useLocation } from "react-router-dom";
import { headerMenu, excludedPath } from "../../constant";
import Styles from "./index.module.scss";

export default function Header() {
  const location = useLocation();

  const shouldNotRender = excludedPath.includes(location.pathname);

  if (shouldNotRender) return null;
  return (
    <header className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.logo}>
          <Link to="/">
            <img src="/loyaoute-2.svg" alt="company logo" />
          </Link>
        </div>

        <ul className={Styles.menus}>
          {headerMenu.map((menu) => (
            <Link key={menu.id} to={menu.path}>
              <li className={Styles.menu}>
                <img src={menu.icon} alt={menu.name} />

                <p>{menu.name}</p>
              </li>
            </Link>
          ))}
        </ul>

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
      </div>
    </header>
  );
}
