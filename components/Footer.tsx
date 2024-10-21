import React from "react";
import { MenusMenuItemEntity } from "@/lib/types";
import Image from "next/image";
import Navigation from "./navigation/navigation";
import { getHierarchicalItems, MenuItem } from "@/lib/auxiliar";
import Link from "next/link";
import { FACEBOOK, INSTAGRAM, TWITTER } from "@/lib/constants";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons";
import styles from "./footer.module.scss";
import { MenuItemsFragment } from "@/fragments/GeneralSettings";
import { fetchAPI } from "@/lib/api";

const QUERY = `
  query dataFooter {
    menuItems : menusMenuItems(filters:{root_menu:{slug:{in:["footer"]}}}, pagination:{pageSize:100}, sort:["order:asc"]){
      ${MenuItemsFragment}      
    }
  }
`;

const queryVars = {};

const menu: MenusMenuItemEntity[] = [
  // {
  //   attributes: {
  //     title: "Inicio",
  //     url: "/",
  //     target: "",
  //     parent: null,
  //     root_menu: {
  //       data: {
  //         attributes: {
  //           slug: "header",
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   attributes: {
  //     title: "About",
  //     url: "/",
  //     target: "",
  //     parent: null,
  //     root_menu: {
  //       data: {
  //         attributes: {
  //           slug: "header",
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   attributes: {
  //     title: "Contacto",
  //     url: "/",
  //     target: "",
  //     parent: null,
  //     root_menu: {
  //       data: {
  //         attributes: {
  //           slug: "header",
  //         },
  //       },
  //     },
  //   },
  // },
];

export default async function Footer() {
  const menuItems: MenusMenuItemEntity[] = menu;

  const items = [...getHierarchicalItems(menuItems)] as MenuItem[];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <Link href={"mailto: info@conuco.do"}>info@conuco.do</Link>
            <Link href={"tel:8099710771"}>809-971-0771</Link>
            <p>
              Santiago de los Caballeros <br />
              República Dominicana
            </p>
          </div>
          <div className={styles.menusItems}>
            {items.map((el, key) => {
              const item = el.item;
              const children = el.children;
              return (
                <div className={styles.menuItem} key={key}>
                  <label className={styles.menuLabel}>
                    {item.attributes?.title}
                  </label>
                  <Navigation
                    items={children}
                    bgColor="rgba(0 0 0/ 0.05)"
                    color="White"
                    borderColor="white"
                    isMain
                    key={key}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.socialBox}>
          <Link
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook Agencia Creativa Conuco"
          >
            <div
              className={styles.socialIcon}
              // color={colors.primary.base}
            >
              <div style={{ display: "none" }}>Redes Sociales</div>
              <FacebookIcon />
            </div>
          </Link>
          <Link
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram Agencia Creativa Conuco"
          >
            <div
              className={styles.socialIcon}
              // color={colors.primary.base}
            >
              <div style={{ display: "none" }}>Redes Sociales</div>
              <InstagramIcon />
            </div>
          </Link>
          <Link
            href={TWITTER}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter Agencia Creativa Conuco"
          >
            <div
              className={styles.socialIcon}
              // color={colors.primary.base}
            >
              <div style={{ display: "none" }}>Redes Sociales</div>
              <TwitterIcon />
            </div>
          </Link>
        </div>
        <div className={styles.bottom}>
          <p>2023 Agencia Creativa Conuco</p>
          <div className={styles.logo}>
            <Image
              src="/site/logo_footer.svg"
              alt="Logo Agencia Creativa Conuco"
              fill
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
