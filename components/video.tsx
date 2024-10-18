"use client";
import React, { Suspense } from "react";
import ReactPlayer from "react-player";
import styles from "./video.module.scss";
import { ComponentProyectoVideo } from "@/gql/graphql";

interface Props {
  component: ComponentProyectoVideo;
}
const Video = ({ component }: Props) => {
  const { url } = component;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ReactPlayer url={url} id="ProyectoVideo" />;
      </div>
    </div>
  );
};

export default Video;
