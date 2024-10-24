import React from "react";
import styles from "./Clientes.module.scss";
import { Cliente } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import Image from "next/image";

interface Props {
  clientes: Cliente[];
}
const Clientes = ({ clientes }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.subTitleLabel}>Clientes</h3>
        <h2 className={styles.subTitle}>
          Crecer es parte de vivir, nosotros cuidamos el proceso
        </h2>
      </div>
      <div className={styles.lista}>
        <div className={styles.wrapper}>
          {clientes
            .filter((cliente) => {
              return cliente.logo;
            })
            .map((cliente, key) => {
              const { logo, nombre } = cliente;
              return (
                <div className={styles.cliente} key={key}>
                  <div className={styles.medio}>
                    <Image
                      src={getImageURL(logo.url)}
                      alt={nombre}
                      width={1920}
                      height={1080}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Clientes;
