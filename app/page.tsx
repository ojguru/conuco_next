import styles from "@/app/page.module.scss";

const QUERY = `
`;

const queryVars = {};

export default async function Home() {
  return (
    <>
      <div className={styles.portada}>
        <h1>CONUCO</h1>
      </div>
    </>
  );
}
