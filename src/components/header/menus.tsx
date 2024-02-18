import { Link } from "react-router-dom";
import { headerMenu } from "../../constant";
import Styles from "./menus.module.scss";

export default function MenusHeader() {
  return (
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
  );
}
