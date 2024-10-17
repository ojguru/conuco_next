import React from "react";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { Proyecto } from "@/gql/graphql";
import { fetchAPI, getImageURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Image from "next/image";
import styles from "./page.module.scss";
import ProyectoImagenDosColumnas from "@/components/proyecto/ProyectoImagenDosColumnas";
import ContenidoDynamicZone from "@/components/proyecto/ContenidoDynamicZone";

const QUERY = `
    query ProyectoQuery($slug:String!) {
        proyectos(filters:{slug:{eq:$slug}}){
            nombre
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
  const { nombre, medio, cliente, contenido } = proyecto;

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
          <h3 className={styles.cliente}>{cliente?.nombre}</h3>
          <h1 className={styles.title}>{nombre}</h1>
          <p className={styles.copy}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            esse tempore, iusto sed non animi repudiandae sunt! Explicabo
            perferendis ullam iusto ut deleniti repellat non omnis. Sequi soluta
            libero nemo! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Corporis voluptates esse magni, maiores deleniti ipsa unde sed
            repellendus laborum obcaecati inventore dolores porro perspiciatis
            voluptatibus possimus alias tempore quidem! Enim.
          </p>
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
