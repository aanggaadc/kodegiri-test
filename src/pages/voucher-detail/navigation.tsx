import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { voucherNavigation } from "../../constant";
import Styles from "./navigation.module.scss";

type NavigationProps = {
  threshold: number;
  activeSection: string;
};

export default function Navigation({
  threshold,
  activeSection,
}: NavigationProps) {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNavigation(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return showNavigation ? (
    <div className={Styles.navigationWrapper}>
      <div className={Styles.navigationContainer}>
        {voucherNavigation.map((nav, index) => (
          <Link
            key={index}
            to={nav.id}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <button
              className={`${Styles.navigationBtn} ${
                nav.id === activeSection ? Styles.active : null
              }`}
            >
              {nav.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  ) : null;
}
