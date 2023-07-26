"use client";

import styles from "@/components/header.module.scss";
import useMenu from "@/hooks/useMenu";

const MenuButton = () => {
  const { MenuButtonUI } = useMenu();

  return (
    <div className={styles.menuButton}>
      <MenuButtonUI />
    </div>
  );
};

export default MenuButton;
