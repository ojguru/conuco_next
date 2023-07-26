"use client";

import React, { useState } from "react";
import NavList from "./nav-list";
import { MenuItem } from "@/lib/auxiliar";
import styles from "./navigation-header.module.scss";
import Link from "next/link";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */

interface NavigationProps {
  items?: MenuItem[] | any[];
  split?: boolean;
  isMain?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

const NavigationHeader = ({
  items = [],
  split = false,
  isMain = true,
  color,
  bgColor,
  borderColor,
  ...props
}: NavigationProps) => {
  const [active, setActive] = useState("");
  const [activePosition, setActivePosition] = useState("");
  const [lastPosition, setLastPosition] = useState("");
  return items.length ? (
    <div className={styles.menu} {...props}>
      <div className={split ? styles.containerSplit : styles.container}>
        {!split ? (
          <div className={styles.block}>
            <>
              <NavList
                items={items}
                isMain={isMain}
                color={color}
                bgColor={bgColor}
                borderColor={borderColor}
              />
            </>
          </div>
        ) : (
          items.map((el, index) => {
            const item = el.item;
            const children = el.children;

            return children ? (
              <div className={styles.block} key={index}>
                <Link
                  className={styles.label}
                  href={item.attributes.url || ""}
                  onClick={(e) => {
                    if (el.children.length) {
                      e.preventDefault();
                    }
                    const position =
                      (e.pageX * 100) / (window.visualViewport?.width || 1);

                    setLastPosition(activePosition);
                    setActive(item.id === active ? "" : item.id);
                    setActivePosition(
                      position <= 33.33
                        ? "left"
                        : position > 66.66
                        ? "right"
                        : "center"
                    );
                  }}
                >
                  {item?.attributes?.title}
                </Link>

                <div
                  className={`${styles.navBox} ${
                    active === item.id && children.length
                      ? `active ${activePosition}`
                      : `${lastPosition}`
                  }`}
                >
                  <NavList
                    items={children}
                    isMain={isMain}
                    color={color}
                    bgColor={bgColor}
                    borderColor={borderColor}
                  />
                </div>
              </div>
            ) : null;
          })
        )}
      </div>
    </div>
  ) : null;
};

export default NavigationHeader;
