import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { MobileNavbar } from "./mobileNavbar/MobileNavbar";

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
          <h1>Logo</h1>
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
                Main
              </li>
              <li
                onClick={() => scroll("component2")}
                className={styles.navMenu}
              >
                About
              </li>
              <li
                onClick={() => scroll("component3")}
                className={styles.navMenu}
              >
                Contacts
              </li>
              <li
                className={styles.navMenu}
                onClick={() => scroll("component4")}
              >
                Videos
              </li>
              <li
                className={styles.navMenu}
                onClick={() => scroll("component5")}
              >
                Photos
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
