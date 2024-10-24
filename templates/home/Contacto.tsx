import React from "react";
import styles from "./Contacto.module.scss";
import Link from "next/link";
import Formulario from "@/components/Formulario";
import { HUBSPOT_CONTACT_FORM } from "@/lib/constants";
import { Palmera } from "@/components/icons";

const Contacto = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.subTitleLabel}>Contáctanos</h3>
          <h2 className={styles.subTitle}>
            Tierra fertil para todos tus proyectos.
          </h2>

          <p>Av. Estrella Zadalá / Plaza Cerro Alto</p>
          <Link href={`tel:8099710771`}>Tel: 809-971-0771</Link>
          <Link href={`mailto: info@conuco.do`}>Email: info@conuco.do</Link>
        </div>
        <div className={styles.contactForm}>
          <Formulario
            formulario={HUBSPOT_CONTACT_FORM}
            formUID="b45ec825-dd54-4818-88ea-02d0a9e2072b"
          />
        </div>
      </div>
      <Palmera />
    </section>
  );
};

export default Contacto;
