import { Proyecto } from "@/gql/graphql";
import React from "react";
import styles from "./Proyectos.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getImageURL } from "@/lib/api";

interface Props {
  proyectos: Proyecto[];
}
const Proyectos = ({ proyectos }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.subTitleLabel}>Proyectos</h3>
        <h2 className={styles.subTitle}>Lo que hemos cosechado</h2>
      </div>
      <div className={styles.lista}>
        {proyectos.map((proyecto, key) => {
          const { nombre, medio, cliente, slug, pilar } = proyecto;
          return (
            <Link
              href={pilar ? `/proyecto/${slug}` : "/"}
              className={styles.proyecto}
              key={key}
            >
              <div className={styles.proyectoMedio}>
                <Image
                  src={getImageURL(medio.url)}
                  alt={nombre}
                  width={1920}
                  height={1080}
                />
              </div>
              <div className={styles.proyectoInfo}>
                <h4 className={styles.proyectoCliente}>{cliente?.nombre}</h4>
                <h3 className={styles.proyectoNombre}>{nombre}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <div className={styles.proyectosMore}>
            <button className={styles.proyectosMoreBtn}>Cargar más</button>
          </div> */}
    </section>
  );
};

export default Proyectos;
