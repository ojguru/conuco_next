import { ProyectoContenidoDynamicZone } from "@/gql/graphql";
import React from "react";
import ProyectoImagenDosColumnas from "./ProyectoImagenDosColumnas";
import ProyectoImagenAnchoCompleto from "./ProyectoImagenAnchoCompleto";
import ProyectoContenido from "./ProyectoContenido";
import Video from "../video";
import { getImageURL } from "@/lib/api";

interface Props {
  component: ProyectoContenidoDynamicZone;
}
const ContenidoDynamicZone = ({ component }: Props) => {
  return component.__typename === "ComponentProyectoImagenDosColumnas" ? (
    <div>
      <ProyectoImagenDosColumnas component={component} />
    </div>
  ) : component.__typename === "ComponentProyectoImagenAnchoCompleto" ? (
    <ProyectoImagenAnchoCompleto component={component} />
  ) : component.__typename === "ComponentProyectoContenido" ? (
    <ProyectoContenido component={component} />
  ) : component.__typename === "ComponentProyectoVideo" ? (
    <Video url={component.url ?? ""} />
  ) : component.__typename === "ComponentProyectoLocalVideo" ? (
    <Video component={component} />
  ) : null;
};

export default ContenidoDynamicZone;
