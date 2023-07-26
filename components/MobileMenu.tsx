"use client";

import { MenusMenuEntity } from "@/gql/graphql";
import useMenu from "@/hooks/useMenu";
import Navigation from "@/components/navigation/navigation";
import styles from "@/components/header.module.scss";

const MobileMenu = ({ items }: { items: MenusMenuEntity[] }) => {
  const { MenuModalUI } = useMenu();

  return (
    <div className={styles.modal}>
      <MenuModalUI>
        <Navigation items={items} bgColor="transparent" isMain />
      </MenuModalUI>
    </div>
  );
};

export default MobileMenu;
