import React from "react";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { Proyecto } from "@/gql/graphql";
import { fetchAPI, getImageURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Image from "next/image";
import styles from "./page.module.scss";
import ProyectoImagenDosColumnas from "@/components/proyecto/ProyectoImagenDosColumnas";
import ContenidoDynamicZone from "@/components/proyecto/ContenidoDynamicZone";
import { notFound } from "next/navigation";

const QUERY = `
    query ProyectoQuery($slug:String!) {
        proyectos(filters:{slug:{eq:$slug}}){
            nombre
            caption
            medio{
                ${ImageFragment}
            }
            cliente{
                nombre
            }
            contenido{
                ...on ComponentProyectoContenido{
                    __typename
                    texto
                }
                ...on ComponentProyectoImagenAnchoCompleto{
                    __typename
                    medio {
                        ${ImageFragment}
                    }
                }
                ...on ComponentProyectoImagenDosColumnas{
                    __typename
                    medio1 {
                        ${ImageFragment}
                    }
                    medio2 {
                        ${ImageFragment}
                    }
                }
                ...on ComponentProyectoVideo{
                  __typename
                  url
                }
                
                ...on ComponentProyectoLocalVideo{
                  __typename
                  medio{
                    url
                  }
                  cover{
                    ${ImageFragment}
                  }
                }
            }
        }
    }
`;

const queryVars = {};

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const [proyecto]: [Proyecto] = data.proyectos;

  if (!proyecto) {
    notFound();
  }

  const { nombre, medio } = proyecto;

  return {
    title: `${nombre} - ${SITE_NAME}`,
    description: nombre,
    openGraph: {
      title: `${nombre} - ${SITE_NAME}`,
      description: nombre ?? "",
      url: `${SITE_URL}/area/${params.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: getImageURL(medio.url),
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const [proyecto]: [Proyecto] = data.proyectos;

  const { nombre, caption, medio, cliente, contenido } = proyecto;

  return (
    <>
      <section className={styles.portada}>
        <div className={styles.medio}>
          <Image
            src={getImageURL(medio.url)}
            alt={nombre}
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.cliente}>{cliente?.nombre}</h2>
          <h1 className={styles.title}>{nombre}</h1>
          <p className={styles.caption}>{caption}</p>
        </div>
      </section>
      <section className={styles.contenido}>
        {contenido?.map((component, key) => {
          if (!component) {
            return null;
          }
          return <ContenidoDynamicZone component={component} key={key} />;
        })}
      </section>
    </>
  );
};

export default Page;
