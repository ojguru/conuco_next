import styles from "@/app/page.module.scss";
import { Palmera } from "@/components/icons";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { Cliente, Proyecto } from "@/gql/graphql";
import { fetchAPI, getImageURL } from "@/lib/api";
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
              <Image src="/home/statement.png" alt="Position Statement" fill />
            </div>
            <div className={styles.statementInfo}>
              <h1 className={styles.title}>
                El centro de la innovación es el diseño y de este, la gente.
              </h1>
              <p>
                Nos dedicamos a conectar la identidad de las marcas con las
                personas, generarando cambios por medio de sus productos que
                contribuyen mejorar la vida de sus usuarios.
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
                  href={`/proyecto/${slug}`}
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
          <div className={styles.proyectosMore}>
            <button className={styles.proyectosMoreBtn}>Cargar más</button>
          </div>
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
              Crecer es parte de vivir nosotros, cuidamos el proceso.
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
            <div className={styles.contactoForm}>AQUI VA EL FORMULARIO</div>
          </div>
          <Palmera />
        </section>
      </div>
    </>
  );
}
