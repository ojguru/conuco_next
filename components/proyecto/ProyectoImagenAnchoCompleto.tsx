import { ComponentProyectoImagenAnchoCompleto } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import Image from "next/image";
import React from "react";
import styles from "./ProyectoImagenAnchoCompleto.module.scss";

interface Props {
  component: ComponentProyectoImagenAnchoCompleto;
}
const ProyectoImagenAnchoCompleto = ({ component }: Props) => {
  const { medio } = component;
  return component?.__typename === "ComponentProyectoImagenAnchoCompleto" ? (
    <div className={styles.container}>
      <Image
        className={styles.imagen}
        src={getImageURL(medio.url)}
        alt={medio.alternativeText ?? ""}
        width={1920}
        height={1080}
      />
    </div>
  ) : null;
};

export default ProyectoImagenAnchoCompleto;
