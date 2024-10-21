"use client";

import React, { useEffect, useState } from "react";
import { HUBSPOT_ID } from "@/lib/constants";
import Script from "next/script";
import styles from "./Formulario.module.scss";
import Loading from "./loading";

interface FormularioProps {
  formulario?: string;
  redirectionUrl?: string;
  inlineMessage?: string;
  pageName?: string;
  formUID?: string;
  titulo?: string;
}

const Formulario = ({
  formulario,
  pageName,
  redirectionUrl,
  inlineMessage,
  formUID = crypto.randomUUID(),
  titulo,
}: FormularioProps) => {
  const [hsFormLoaded, setHsFormLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const hsOptions = {
    region: "na1",
    portalId: `${HUBSPOT_ID}`,
    formId: formulario,
    target: `.form-${formUID}`,
    formInstanceId: formUID,
    pageName: pageName || null,
    redirectUrl: redirectionUrl || null,
    inlineMessage: inlineMessage || null,
  };

  const loadForm = () => {
    if (hsFormLoaded && loading) {
      setTimeout(() => {
        window.hbspt?.forms?.create(hsOptions);
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    loadForm();
  }, [loading, hsFormLoaded]);

  return (
    <section className={styles.form}>
      {/* Ejecuta el script cada vez que se renderiza el componente */}
      <Script
        id="hsFormLoader"
        src="//js.hsforms.net/forms/v2.js?pre=1"
        strategy="lazyOnload"
        defer
        onReady={() => {
          const getJQuery = async () => {
            setTimeout(() => {
              fetch("https://code.jquery.com/jquery-3.6.0.min.js")
                .then((res) => res.text())
                .then((res) => {
                  window.eval(res);
                  setHsFormLoaded(true);
                });
            }, 4000);
          };

          if (!window?.jQuery) {
            getJQuery();
            return;
          }
          setHsFormLoaded(true);
        }}
      />
      <>
        {titulo && true ? <h2 className={styles.formTitle}>{titulo}</h2> : null}

        <div className={styles.formBody}>
          <div className={`form-${formUID}`} />
          {loading && <Loading />}
        </div>
      </>
    </section>
  );
};

export default Formulario;
