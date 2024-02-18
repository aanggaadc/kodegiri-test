import { Link } from "react-router-dom";
import { headerMenu } from "../../constant";

import HomeIcon from "../icons/home";
import CalendarIcon from "../icons/calendar";
import MessageIcon from "../icons/message";
import ProfileIcon from "../icons/profile";
import Styles from "./menus.module.scss";

type IconMapType = {
  [key: string]: JSX.Element;
};

export default function MenusHeader({ isHome }: { isHome: boolean }) {
  const iconMap: IconMapType = {
    home: <HomeIcon fill={isHome ? "#fff" : undefined} />,
    history: <CalendarIcon fill={isHome ? "#fff" : undefined} />,
    inbox: <MessageIcon fill={isHome ? "#fff" : undefined} />,
    profile: <ProfileIcon fill={isHome ? "#fff" : undefined} />,
  };

  return (
    <ul className={Styles.menus}>
      {headerMenu.map((menu) => (
        <Link key={menu.id} to={menu.path}>
          <li className={Styles.menu}>
            {iconMap[menu.name]}
            <p className={`${isHome ? Styles.home : null}`}>{menu.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
