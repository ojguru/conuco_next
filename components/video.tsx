"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./video.module.scss";
import Image from "next/image";
import { ComponentProyectoLocalVideo } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";

interface Props {
  component: ComponentProyectoLocalVideo;
}
const Video = ({ component }: Props) => {
  const { medio, cover } = component;
  const [playing, setPlaying] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        onClick={() => {
          if (!playing) {
            setPlaying(true);
          }
        }}
      >
        <ReactPlayer
          url={getImageURL(medio.url)}
          id="ProyectoVideo"
          controls
          light={
            <Image
              src={getImageURL(cover.url)}
              width={1920}
              height={1080}
              alt={cover.alternativeText ?? ""}
            />
          }
          playing={playing}
        />
        ;
      </div>
    </div>
  );
};

export default Video;
