import styles from "@/app/page.module.scss";
import Formulario from "@/components/Formulario";
import { Palmera } from "@/components/icons";
import Cover from "@/templates/home/Cover";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { Cliente, Proyecto } from "@/gql/graphql";
import { fetchAPI, getImageURL } from "@/lib/api";
import {
  HUBSPOT_CONTACT_FORM,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Proyectos from "@/templates/home/Proyectos";
import Servicios from "@/templates/home/Servicios";
import Clientes from "@/templates/home/Clientes";
import Contacto from "@/templates/home/Contacto";

const QUERY = `
  query HomeQuery{
    proyectos(pagination:{limit:6}, sort:["createdAt:asc"]){
      nombre
      slug
      cliente{
        nombre
      }
      pilar{
        nombre
      }
      medio{
        ${ImageFragment}
      }
    }
    clientes{
      nombre
      logo{
        ${ImageFragment}
      }
    }
  }
`;

const queryVars = {};

// Dynamic metadata
export const metadata = {
  title: `${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    // images: [
    //   {
    //     url: getImageURL(medio.url),
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
};

export default async function Home({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const proyectos: Proyecto[] = data.proyectos;
  const clientes: Cliente[] = data.clientes;

  return (
    <>
      <div className={styles.portada}>
        {/* POSITION STATEMENT */}
        <Cover />
        <Proyectos proyectos={proyectos} />
        <Servicios />
        <Clientes clientes={clientes} />
        <Contacto />
      </div>
    </>
  );
}
