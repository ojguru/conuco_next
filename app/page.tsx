import styles from "@/app/page.module.scss";
import Formulario from "@/components/Formulario";
import { Palmera } from "@/components/icons";
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

const QUERY = `
  query HomeQuery{
    proyectos(pagination:{limit:6}, sort:["publishedAt:desc"]){
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
        <section className={styles.statement}>
          <div className={`${styles.container} ${styles.statementContainer}`}>
            <div className={styles.statementMedio}>
              <Image src="/home/escudo.svg" alt="Position Statement" fill />
            </div>
            <div className={styles.statementInfo}>
              <h1 className={styles.title}>Valor desde la raíz</h1>
              <svg
                className={styles.decoCover}
                width="238px"
                height="547px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                viewBox="0 100 200 540"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeMiterlimit: 10,
                }}
              >
                <g transform="matrix(1,0,0,1,-14804.2,-299.296)">
                  <g transform="matrix(2,0,0,2,12960,0)">
                    <g transform="matrix(1,0,0,1,947.247,397.99)">
                      <path
                        d="M0,-223.217L0,-96.656C0,-84.812 4.705,-73.453 13.08,-65.078L23.587,-54.571C32.195,-45.963 37.031,-34.288 37.031,-22.115L37.031,0"
                        style={{
                          fill: "none",
                          fillRule: "nonzero",
                          stroke: "rgb(230,230,230)",
                          strokeWidth: "5px",
                        }}
                      />
                    </g>
                    <g transform="matrix(1,0,0,1,984.279,397.989)">
                      <path
                        d="M0,-31.742C17.437,-31.742 31.572,-17.607 31.572,-0.17L31.572,0"
                        style={{
                          fill: "none",
                          fillRule: "nonzero",
                          stroke: "rgb(230,230,230)",
                          strokeWidth: "5px",
                        }}
                      />
                    </g>
                    <g transform="matrix(1,0,0,1,947.247,301.334)">
                      <path
                        d="M0,-110.333L0,-21.805C0,-9.763 9.763,0 21.805,0"
                        style={{
                          fill: "none",
                          fillRule: "nonzero",
                          stroke: "rgb(230,230,230)",
                          strokeWidth: "5px",
                        }}
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <p>
                Somos una agencia que crea, identifica, difunde y conecta la
                identidad de tu marca con las personas, creando estrategias de
                comunicación que contribuyen a generar cambios para mejorar
                vidas.
              </p>
            </div>
          </div>
        </section>
        {/* PROYECTOS */}
        <section className={styles.proyectos}>
          <div className={styles.container}>
            <h3 className={styles.subTitleLabel}>Proyectos</h3>
            <h2 className={styles.subTitle}>Lo que hemos cosechado</h2>
          </div>
          <div className={styles.proyectosLista}>
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
                    <h4 className={styles.proyectoCliente}>
                      {cliente?.nombre}
                    </h4>
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
        {/* SERVICIOS */}
        <section className={styles.servicios}>
          <div className={styles.container}>
            <h3 className={styles.subTitleLabel}>Nuestros Servicios</h3>
            <h2 className={styles.subTitle}>
              Diversidad enfocada a tu necesidad.
            </h2>
            <div className={styles.listaServicios}>
              <div className={styles.servicio}>
                <div className={styles.servicioMedio}>
                  <Image
                    src="/home/produccion_audiovisual.svg"
                    alt="Producción audiovisual"
                    fill
                  />
                </div>
                <h3 className={styles.servicioTitle}>Producción Audiovisual</h3>
                <p className={styles.servicioCopy}>
                  Comerciales
                  <br />
                  Videos institucionales
                  <br />
                  Videos informativos
                  <br />
                  Contenido audiovisual
                </p>
              </div>
              <div className={styles.servicio}>
                <div className={styles.servicioMedio}>
                  <Image
                    src="/home/produccion_audiovisual.svg"
                    alt="Producción audiovisual"
                    fill
                  />
                </div>
                <h3 className={styles.servicioTitle}>Producción Audiovisual</h3>
                <p className={styles.servicioCopy}>
                  Comerciales
                  <br />
                  Videos institucionales
                  <br />
                  Videos informativos
                  <br />
                  Contenido audiovisual
                </p>
              </div>
              <div className={styles.servicio}>
                <div className={styles.servicioMedio}>
                  <Image
                    src="/home/produccion_audiovisual.svg"
                    alt="Producción audiovisual"
                    fill
                  />
                </div>
                <h3 className={styles.servicioTitle}>Producción Audiovisual</h3>
                <p className={styles.servicioCopy}>
                  Comerciales
                  <br />
                  Videos institucionales
                  <br />
                  Videos informativos
                  <br />
                  Contenido audiovisual
                </p>
              </div>
              <div className={styles.servicio}>
                <div className={styles.servicioMedio}>
                  <Image
                    src="/home/produccion_audiovisual.svg"
                    alt="Producción audiovisual"
                    fill
                  />
                </div>
                <h3 className={styles.servicioTitle}>Producción Audiovisual</h3>
                <p className={styles.servicioCopy}>
                  Comerciales
                  <br />
                  Videos institucionales
                  <br />
                  Videos informativos
                  <br />
                  Contenido audiovisual
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CLIENTES */}
        <section className={styles.clientes}>
          <div className={styles.container}>
            <h3 className={styles.subTitleLabel}>Clientes</h3>
            <h2 className={styles.subTitle}>
              Crecer es parte de vivir, nosotros cuidamos el proceso.
            </h2>
          </div>
          <div className={styles.listaClientes}>
            <div className={styles.listaClientesContainer}>
              {clientes.map((cliente, key) => {
                const { logo, nombre } = cliente;
                return (
                  <div className={styles.cliente} key={key}>
                    <div className={styles.clienteMedio}>
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
        {/* CONTACTO */}
        <section className={styles.contacto}>
          <div className={`${styles.container} ${styles.contactoContainer}`}>
            <div className={styles.contactoInfo}>
              <h3 className={styles.subTitleLabel}>Contáctanos</h3>
              <h2 className={styles.subTitle}>
                Tierra fertil para todos tus proyectos.
              </h2>

              <p>Av. Estrella Zadalá / Plaza Cerro Alto</p>
              <Link href={`tel:8099710771`}>Tel: 809-971-0771</Link>
              <Link href={`mailto: info@conuco.do`}>Email: info@conuco.do</Link>
            </div>
            <div className={styles.contactoForm}>
              <Formulario
                formulario={HUBSPOT_CONTACT_FORM}
                formUID="b45ec825-dd54-4818-88ea-02d0a9e2072b"
              />
            </div>
          </div>
          <Palmera />
        </section>
      </div>
    </>
  );
}
