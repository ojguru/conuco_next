import React, { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";
import styles from "@styles/use-modal.module.scss";

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  interface ModalUIProps {
    title?: string;
    children?: any;
    size?: string;
    closeAction?: any;
  }
  const ModalUI = ({
    title,
    children,
    size = "80rem",
    closeAction,
  }: ModalUIProps) => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
    }, []);

    return (
      <div
        className={styles.modal}
        data-open={isModalOpen}
        onClick={closeModal}
      >
        {/* {isModalOpen && (
          <Global
            styles={css`
              html,
              body {
                overflow: hidden;
              }
            `}
          />
        )} */}
        <div
          className={styles.wrapper}
          // maxWidth={size}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.container}>
            <div className={styles.header}>
              {title ? <h3 className={styles.title}>{title}</h3> : <div></div>}
              <button
                className={styles.closeBtn}
                onClick={closeAction || closeModal}
              >
                <CloseIcon />
              </button>
            </div>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </div>
    );
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    ModalUI,
  };
};

export default useModal;
