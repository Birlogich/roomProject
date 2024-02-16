import { NavLink } from "react-router-dom";
import roomImg from "../../assets/room.svg";
import styles from "./header.module.scss";
import hamImg from "../../assets/icon-hamburger.svg";
import iconClose from "../../assets/icon-close.svg";
import { useRef } from "react";

export const Header = () => {
  const menuRef = useRef<HTMLElement | null>(null);

  const showMenuHandler = () => {
    if (menuRef.current) {
      menuRef.current.style.display = "block";
      menuRef.current.style.left = "0";
    }
  };

  const hideMenuHandler = () => {
    if (menuRef.current) {
      menuRef.current.style.display = "none";
      menuRef.current.style.left = "-100%";
    }
  };

  return (
    <>
      <button className={styles.burger} onClick={showMenuHandler}>
        <img src={hamImg} />
      </button>
      <nav className={styles.navigation} ref={menuRef}>
        <NavLink to="/">
          <img src={roomImg} />
        </NavLink>
        <div>
          <button onClick={hideMenuHandler}>
            <img src={iconClose} alt="closeMenu" />
          </button>
          <NavLink to="/" title="home">
            home
          </NavLink>
          <NavLink to="shop" title="shop">
            shop
          </NavLink>
          <NavLink to="about" title="about">
            about
          </NavLink>
          <NavLink to="contact" title="contact">
            contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};
