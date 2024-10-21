import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/site/logo.svg";
import { getHierarchicalItems } from "@/lib/auxiliar";
import NavigationHeader from "@/components/navigation/navigation-header";
import { CITA, RESULTADOS } from "@/lib/constants";
import styles from "./header.module.scss";
import { MenuItemsFragment } from "@/fragments/GeneralSettings";
import { fetchAPI } from "@/lib/api";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import { MenusMenuItemEntity } from "@/lib/types";

// const QUERY = `
//   query dataHeader {
//     menuItems : menusMenuItems(filters:{root_menu:{slug:{in:["header"]}}}, pagination:{pageSize:100}, sort:["order:asc"]){
//       ${MenuItemsFragment}
//     }
//   }
// `;

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

const queryVars = {};

export default async function Header() {
  // const [ref, inView, entry] = useInView({ initialInView: true });

  // const data = await fetchAPI(QUERY, { variables: queryVars });

  const menuItems: MenusMenuItemEntity[] = menu;

  const items = [...getHierarchicalItems(menuItems)];

  return (
    <header
      // ref={ref}
      className={styles.header}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="Coopbueno Logo" priority />
            </Link>
          </div>
          <div className={styles.nav}>
            <NavigationHeader items={items} split isMain />
          </div>
        </div>
        <MobileMenu items={items} />
      </div>
    </header>
  );
}
