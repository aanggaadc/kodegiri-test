import { Link } from "react-router-dom";
import {
  headerMenu,
  categoryMenu,
  socialMediaList,
  footerBottomMenu,
} from "../../constant";
import Styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.upper}>
          <div className={Styles.logo}>
            <Link to="/">
              <img src="/loyaoute.svg" alt="company logo" />
            </Link>
          </div>

          <span>
            <p className={Styles.itemHeader}>Quick Link</p>
            <ul className={Styles.itemList}>
              {headerMenu.map((menu) => (
                <Link key={menu.id} to={menu.path}>
                  <li className={Styles.item}>{menu.name}</li>
                </Link>
              ))}
            </ul>
          </span>

          <span>
            <p className={Styles.itemHeader}>Categorias</p>
            <ul className={Styles.itemList}>
              {categoryMenu.map((menu) => (
                <Link key={menu.id} to={menu.path}>
                  <li className={Styles.item}>{menu.name}</li>
                </Link>
              ))}
            </ul>
          </span>

          <span>
            <p className={Styles.itemHeader}>Download Apps</p>

            <div className={Styles.downloadContainer}>
              <button className={Styles.btnDownload}>
                <img src="/assets/images/google-play.png" alt="google play" />
              </button>

              <button className={Styles.btnDownload}>
                <img src="/assets/images/app-store.png" alt="app store" />
              </button>
            </div>
          </span>
        </div>

        <div className={Styles.divider} />

        <div className={Styles.bottom}>
          <ul className={Styles.socialMedia}>
            {socialMediaList.map((item) => (
              <Link key={item.id} to={item.path} target={"_blank"}>
                <li>
                  <img src={item.icon} alt={item.name} />
                </li>
              </Link>
            ))}
          </ul>

          <ul className={Styles.bottomMenu}>
            {footerBottomMenu.map((menu) => (
              <Link key={menu.id} to={menu.path}>
                <li className={Styles.item}>{menu.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
