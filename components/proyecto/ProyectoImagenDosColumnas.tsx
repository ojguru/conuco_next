import { ComponentProyectoImagenDosColumnas } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import Image from "next/image";
import React from "react";
import styles from "./ProyectoImagenDosColumnas.module.scss";

interface Props {
  component: ComponentProyectoImagenDosColumnas;
}
const ProyectoImagenDosColumnas = ({ component }: Props) => {
  const { medio1, medio2 } = component;
  return component?.__typename === "ComponentProyectoImagenDosColumnas" ? (
    <div className={styles.container}>
      <Image
        className={styles.imagen1}
        src={getImageURL(medio1.url)}
        alt={medio1.alternativeText ?? ""}
        width={1920}
        height={1080}
      />
      <Image
        className={styles.imagen2}
        src={getImageURL(medio2.url)}
        alt={medio2.alternativeText ?? ""}
        width={1920}
        height={1080}
      />
    </div>
  ) : null;
};

export default ProyectoImagenDosColumnas;
