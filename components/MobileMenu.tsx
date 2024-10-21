"use client";

import useMenu from "@/hooks/useMenu";
import Navigation from "@/components/navigation/navigation";
import styles from "@/components/header.module.scss";
import { MenusMenuItemEntity } from "@/lib/types";
import { MenuItem } from "@/lib/auxiliar";

const MobileMenu = ({
  items,
}: {
  items: MenusMenuItemEntity[] | MenuItem[];
}) => {
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
