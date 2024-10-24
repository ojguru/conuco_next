import React from "react";
import styles from "./Servicios.module.scss";

const Servicios = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.subTitleLabel}>Caja de herramientas</h3>
        <h2 className={styles.subTitle}>Diversidad enfocada a tu necesidad</h2>
        <ul className={styles.lista}>
          <div className={styles.group}>
            <li>Consultoría de marca</li>
            <li>Naming</li>
            <li>Identidad de marca</li>
          </div>
          <div className={styles.group}>
            <li> Desarrollo web</li>
            <li> Desarrollo de apps</li>
          </div>
          <div className={styles.group}>
            <li>Producción Audiovisual</li>
            <li>Diseño gráfico</li>
            <li>Diseño entorno</li>
            <li>Identidad de eventos</li>
          </div>
          <div className={styles.group}>
            <li>Marketing Digital</li>
            <li>Campañas publicitarias</li>
            <li>Estrategia de contenido</li>
            <li>Plan de medios</li>
            <li>Plan de comunicación</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Servicios;
