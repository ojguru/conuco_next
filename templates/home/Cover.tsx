import React from "react";
import Image from "next/image";
import styles from "./Cover.module.scss";

const Cover = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.medio}>
          <Image
            src="/home/escudo.svg"
            alt="Position Statement"
            width={1920}
            height={1920}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Valor desde la raíz</h1>
          <svg
            className={styles.deco}
            id="Capa_2"
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 69.4 112.53"
          >
            <defs>
              <style>
                {`
                .cls-1 {
                  fill: none;
                  stroke: #e6e6e6;
                  stroke-miterlimit: 10;
                  stroke-width: 3px;
                }
              `}
              </style>
            </defs>
            <g id="Capa_1-2" data-name="Capa 1">
              <g>
                <path
                  className="cls-1"
                  d="M16.7,0v58.54c0,10.84,8.78,19.62,19.62,19.62h0c6.35,0,11.49,5.15,11.49,11.49v22.88"
                />
                <path
                  className="cls-1"
                  d="M0,53.31h0c9.35,0,16.93-7.58,16.93-16.93v-2.61"
                />
                <path
                  className="cls-1"
                  d="M47.48,94.2h5.77c8.09,0,14.64,6.56,14.64,14.64v3.69"
                />
              </g>
            </g>
          </svg>
          <p>
            Somos una agencia que crea, identifica, difunde y conecta la
            identidad de tu marca con las personas, creando estrategias de
            comunicación que contribuyen a generar cambios para mejorar vidas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cover;
