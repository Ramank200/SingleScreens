"use client";
import React from "react";
import styles from "./Navbar.module.css";
import { ThemeChanger } from "@components/utils/ThemeChanger";

const Navbar = () => {
  return (
    <nav className={`${styles.NavbarWrapper}`}>
      <ul className={`${styles.DirectionsWrapper}`}>
        <li
          className={`${styles.NavigationButton}`}
          onClick={() => {
            ThemeChanger("light");
          }}
        >
          <a href="#" className={`${styles.NavigationOption}`}>
            Home
          </a>
        </li>
        <li
          className={`${styles.NavigationButton}`}
          onClick={() => {
            ThemeChanger("dark");
          }}
        >
          <a href="#" className={`${styles.NavigationOption}`}>
            Features
          </a>
        </li>
        <li
          className={`${styles.NavigationButton}`}
          onClick={() => {
            ThemeChanger("earthyWarm");
          }}
        >
          <a href="#" className={`${styles.NavigationOption}`}>
            How it Works
          </a>
        </li>
        <li
          className={`${styles.NavigationButton}`}
          onClick={() => {
            ThemeChanger("neonCyberpunk");
          }}
        >
          <a href="#" className={`${styles.NavigationOption}`}>
            Pricing
          </a>
        </li>
        <li
          className={`${styles.NavigationButton}`}
          onClick={() => {
            ThemeChanger("natureGreen");
          }}
        >
          <a href="#" className={`${styles.NavigationOption}`}>
            Pricing
          </a>
        </li>
      </ul>
      <div className={`${styles.LoginsButtons}`}>
        <button className={`${styles.LoginButton}`}>Login</button>
        <button className={`${styles.SignInButton}`}>SignIn</button>
        <div className={styles.LoginButtonAfter}>
          <div className={styles.LoginButtonAfterSub}></div>
        </div>
        <div className={styles.LoginButtonBefore}>
          <div className={styles.LoginButtonBeforeSub}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
