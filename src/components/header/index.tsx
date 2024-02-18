import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { excludedPath } from "../../constant";

import HeaderLogo from "./logo";
import MenusHeader from "./menus";
import ProfilesHeader from "./profiles";
import Styles from "./index.module.scss";

export default function Header() {
  const location = useLocation();

  const [isHome, setIsHome] = useState<boolean>(false);

  const shouldNotRender = excludedPath.includes(location.pathname);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location.pathname]);

  if (shouldNotRender) return null;
  return (
    <header className={`${Styles.wrapper} ${isHome ? Styles.home : null}`}>
      <div className={Styles.container}>
        <HeaderLogo isHome={isHome} />
        <MenusHeader />
        <ProfilesHeader />
      </div>
    </header>
  );
}
