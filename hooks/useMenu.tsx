"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  TwitterIcon,
} from "@/components/icons";
import Link from "next/link";
import {
  CITA,
  FACEBOOK,
  INSTAGRAM,
  RESULTADOS,
  TWITTER,
} from "@/lib/constants";
import { animated, config, useSpring } from "@react-spring/web";
import styles from "@/styles/use-menu.module.scss";
import { ThemeContext } from "@/components/ThemeProvider";

const useMenu = () => {
  const {
    isMenuOpen,
    setMenuOpen,
  }: { isMenuOpen?: boolean; setMenuOpen?: any } = useContext(ThemeContext);

  const props = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    right: isMenuOpen ? "0rem" : "-1rem",
    config: config.stiff,
  });

  interface MenuModalUIProps {
    children: any;
  }
  const MenuModalUI = ({ children }: MenuModalUIProps) => {
    useEffect(() => {
      if (isMenuOpen) {
        // @ts-ignore
        document.getElementsByTagName("html")[0].style = "overflow: hidden;";
      } else {
        // @ts-ignore
        document.getElementsByTagName("html")[0].style = "";
      }
    }, [isMenuOpen]);
    return (
      <animated.div
        style={props}
        data-open={isMenuOpen}
        className={`${styles.wrapper} ${isMenuOpen ? "active" : ""}`}
        onClick={(e) => {
          setMenuOpen(false);
        }}
      >
        <div
          className={styles.modalWrapper}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={`${styles.modal} ${isMenuOpen ? "active" : ""}`}>
            <div className={`${styles.modalHeader}`}>
              <div className={styles.portalWriter}>
                <Link
                  href={CITA}
                  onClick={(e) => {
                    setMenuOpen(false);
                  }}
                >
                  <div className={styles.portalItem}>
                    {/* <UserIcon /> */}
                    <span>Agendar cita</span>
                  </div>
                </Link>
                <Link
                  href={RESULTADOS}
                  onClick={(e) => {
                    setMenuOpen(false);
                  }}
                >
                  <div className={styles.portalItem}>
                    {/* <UserIcon /> */}
                    <span>Resultados</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.body}>{children}</div>
            <div className={styles.footer}>
              <span className={styles.socialBox}>
                <Link
                  href={FACEBOOK}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook Preventis"
                >
                  <div className={styles.socialIcon}>
                    <div style={{ display: "none" }}>Redes Sociales</div>
                    <FacebookIcon />
                  </div>
                </Link>
                <Link
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook Preventis"
                >
                  <div className={styles.socialIcon}>
                    <div style={{ display: "none" }}>Redes Sociales</div>
                    <InstagramIcon />
                  </div>
                </Link>
                <Link
                  href={TWITTER}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook Preventis"
                >
                  <div className={styles.socialIcon}>
                    <div style={{ display: "none" }}>Redes Sociales</div>
                    <TwitterIcon />
                  </div>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </animated.div>
    );
  };

  const MenuButtonUI = () => {
    return (
      <button
        className={styles.button}
        onClick={(e) => {
          setMenuOpen(!isMenuOpen);
        }}
        aria-label="Botón menú"
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    );
  };

  return {
    MenuModalUI,
    MenuButtonUI,
  };
};

export default useMenu;
