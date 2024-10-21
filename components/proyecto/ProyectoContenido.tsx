import { ComponentProyectoContenido } from "@/gql/graphql";
import React from "react";
import styles from "./ProyectoContenido.module.scss";
import Link from "next/link";

interface Props {
  component: ComponentProyectoContenido;
}
const ProyectoContenido = ({ component }: Props) => {
  const { texto } = component;

  return component?.__typename === "ComponentProyectoContenido" ? (
    <div className={styles.container}>
      {texto.map((element: any, key: number) => {
        return element.type === "paragraph" ? (
          <Paragraph element={element.children} key={key} />
        ) : element.type === "heading" ? (
          <Heading element={element.children} level={element.level} key={key} />
        ) : element.type === "list" ? (
          <List element={element.children} format={element.format} key={key} />
        ) : null;
      })}
    </div>
  ) : null;
};

export default ProyectoContenido;

const style = (element: any) => {
  return {
    textDecoration: `${element?.underline ? "underline" : ""}${
      element?.strikethrough ? " line-through" : ""
    }`,
    fontWeight: element?.bold ? "bold" : "",
    fontStyle: element?.italic ? "italic" : "",
  };
};

const Jerarquia = ({ element }: { element: any }) => {
  return element.type === "text" ? (
    <span style={style(element)}>{element.text}</span>
  ) : element.type === "link" ? (
    <Link href={element.url} style={style(element)}>
      {element.children.map((element: any, key: number) => {
        return <Jerarquia element={element} key={key} />;
      })}
    </Link>
  ) : element.type === "list-item" ? (
    <li>
      {element.children.map((element: any, key: number) => {
        return <Jerarquia element={element} key={key} />;
      })}
    </li>
  ) : null;
};

const Paragraph = ({ element }: { element: any }) => {
  return (
    <p>
      {element.map((item: any, key: number) => {
        return <Jerarquia element={item} key={key} />;
      })}
    </p>
  );
};

const Heading = ({ element, level }: { element: any; level: number }) => {
  return level === 1 ? (
    <h2>
      {element.map((item: any, key: number) => {
        return <Jerarquia element={item} key={key} />;
      })}
    </h2>
  ) : level === 2 ? (
    <h3>
      {element.map((item: any, key: number) => {
        return <Jerarquia element={item} key={key} />;
      })}
    </h3>
  ) : (
    <h4>
      {element.map((item: any, key: number) => {
        return <Jerarquia element={item} key={key} />;
      })}
    </h4>
  );
};

const List = ({ element, format }: { element: any; format: string }) => {
  return format === "ordered" ? (
    <ol>
      {element.map((item: any, key: number) => {
        return <Jerarquia element={item} key={key} />;
      })}
    </ol>
  ) : format === "unordered" ? (
    <ul>
      {element.map((item: any, key: number) => {
        return <Jerarquia element={item} key={key} />;
      })}
    </ul>
  ) : null;
};
