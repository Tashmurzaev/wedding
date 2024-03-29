import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { MobileNavbar } from "./mobileNavbar/MobileNavbar";
import logo from "../../assets/icons/arch.png";

const Navbar = ({ scroll }) => {
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarHandler = () => setNav((prevState) => !prevState);

  return (
    <>
      <div className={styles.div}>
        <header className={scrolled ? `${styles.scrolled}` : ""}>
          <img className={styles.logo} src={logo} alt="" />
          <MobileNavbar
            openHandler={nav}
            closeHandler={navBarHandler}
            scroll={scroll}
          />
          <nav className={styles.menu}>
            <ul
              className={
                nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
              }
            >
              <li
                onClick={() => scroll("component1")}
                className={styles.navMenu}
              >
                главнaя
              </li>
              <li
                onClick={() => scroll("component2")}
                className={styles.navMenu}
              >
                галерея
              </li>
              <li
                onClick={() => scroll("component3")}
                className={styles.navMenu}
              >
                Приглашение
              </li>
              <li
                className={styles.navMenu}
                onClick={() => scroll("component4")}
              >
                Расположение
              </li>
            </ul>
          </nav>
          <div onClick={navBarHandler} className={styles.burgerBtn}>
            <div className={`${styles.burger} ${nav && styles.active}`}>
              <span></span>
              <span className={styles.shortLine}></span>
              <span></span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
