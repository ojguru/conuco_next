import styles from "@/app/page.module.scss";
import { Palmera } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

const QUERY = `
`;

const queryVars = {};

export default async function Home() {
  return (
    <>
      <div className={styles.portada}>
        <h1 className={styles.title}>CONUCO</h1>
        {/* VIDEO */}
        <section className={styles.cover}>
          <video autoPlay muted className={styles.coverVideo}>
            <source src="/home/demoreel.webm" type="video/webm" />
          </video>
        </section>
        {/* POSITION STATEMENT */}
        <section className={styles.statement}>
          <div className={`${styles.container} ${styles.statementContainer}`}>
            <div className={styles.statementMedio}>
              <Image src="/home/statement.png" alt="Position Statement" fill />
            </div>
            <div className={styles.statementInfo}>
              <h2 className={styles.subTitle}>
                El centro de la innovación es el diseño y de este, la gente.
              </h2>
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
            <div className={styles.proyecto}>
              <div className={styles.proyectoMedio}>
                <Image src="/home/proyecto.jpg" alt="proyecto" fill />
              </div>
              <div className={styles.proyectoInfo}>
                <h4 className={styles.proyectoCliente}>Coopbueno</h4>
                <h3 className={styles.proyectoNombre}>Misión del ahorro</h3>
                <p className={styles.proyectoCopy}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  aliquam porro, est soluta magni quas harum recusandae maiores,
                  sint quam impedit blanditiis fugiat, cum in natus! Doloribus
                  dolorum voluptatem velit!
                </p>
              </div>
            </div>
            <div className={styles.proyecto}>
              <div className={styles.proyectoMedio}>
                <Image src="/home/proyecto.jpg" alt="proyecto" fill />
              </div>
              <div className={styles.proyectoInfo}>
                <h4 className={styles.proyectoCliente}>Coopbueno</h4>
                <h3 className={styles.proyectoNombre}>Misión del ahorro</h3>
                <p className={styles.proyectoCopy}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  aliquam porro, est soluta magni quas harum recusandae maiores,
                  sint quam impedit blanditiis fugiat, cum in natus! Doloribus
                  dolorum voluptatem velit!
                </p>
              </div>
            </div>
            <div className={styles.proyecto}>
              <div className={styles.proyectoMedio}>
                <Image src="/home/proyecto.jpg" alt="proyecto" fill />
              </div>
              <div className={styles.proyectoInfo}>
                <h4 className={styles.proyectoCliente}>Coopbueno</h4>
                <h3 className={styles.proyectoNombre}>Misión del ahorro</h3>
                <p className={styles.proyectoCopy}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  aliquam porro, est soluta magni quas harum recusandae maiores,
                  sint quam impedit blanditiis fugiat, cum in natus! Doloribus
                  dolorum voluptatem velit!
                </p>
              </div>
            </div>
            <div className={styles.proyecto}>
              <div className={styles.proyectoMedio}>
                <Image src="/home/proyecto.jpg" alt="proyecto" fill />
              </div>
              <div className={styles.proyectoInfo}>
                <h4 className={styles.proyectoCliente}>Coopbueno</h4>
                <h3 className={styles.proyectoNombre}>Misión del ahorro</h3>
                <p className={styles.proyectoCopy}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  aliquam porro, est soluta magni quas harum recusandae maiores,
                  sint quam impedit blanditiis fugiat, cum in natus! Doloribus
                  dolorum voluptatem velit!
                </p>
              </div>
            </div>
            <div className={styles.proyecto}>
              <div className={styles.proyectoMedio}>
                <Image src="/home/proyecto.jpg" alt="proyecto" fill />
              </div>
              <div className={styles.proyectoInfo}>
                <h4 className={styles.proyectoCliente}>Coopbueno</h4>
                <h3 className={styles.proyectoNombre}>Misión del ahorro</h3>
                <p className={styles.proyectoCopy}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  aliquam porro, est soluta magni quas harum recusandae maiores,
                  sint quam impedit blanditiis fugiat, cum in natus! Doloribus
                  dolorum voluptatem velit!
                </p>
              </div>
            </div>
            <div className={styles.proyecto}>
              <div className={styles.proyectoMedio}>
                <Image src="/home/proyecto.jpg" alt="proyecto" fill />
              </div>
              <div className={styles.proyectoInfo}>
                <h4 className={styles.proyectoCliente}>Coopbueno</h4>
                <h3 className={styles.proyectoNombre}>Misión del ahorro</h3>
                <p className={styles.proyectoCopy}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  aliquam porro, est soluta magni quas harum recusandae maiores,
                  sint quam impedit blanditiis fugiat, cum in natus! Doloribus
                  dolorum voluptatem velit!
                </p>
              </div>
            </div>
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
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
              <div className={styles.cliente}>
                <div className={styles.clienteMedio}>
                  <Image src={"/home/cliente.svg"} alt="Nombre cliente" fill />
                </div>
              </div>
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
