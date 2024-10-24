import styles from "@/app/page.module.scss";
import Cover from "@/templates/home/Cover";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { Cliente, Proyecto } from "@/gql/graphql";
import { fetchAPI } from "@/lib/api";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import Proyectos from "@/templates/home/Proyectos";
import Servicios from "@/templates/home/Servicios";
import Clientes from "@/templates/home/Clientes";
import Contacto from "@/templates/home/Contacto";
import Statement from "@/templates/home/Statement";

const QUERY = `
  query HomeQuery{
    proyectos(pagination:{limit:6}, sort:["updatedAt:desc","createdAt:desc"]){
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
    clientes(pagination:{limit:30}, sort:["nombre:asc"]){
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
    images: [
      {
        url: "/home/escudo.svg",
        width: 800,
        height: 600,
      },
    ],
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
        <Statement />
        <Servicios />
        <Clientes clientes={clientes} />
        <Contacto />
      </div>
    </>
  );
}
