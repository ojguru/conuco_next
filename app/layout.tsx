import "@/styles/global.scss";
import "@/styles/variables.module.scss";
import "@/styles/tipography.module.scss";
import ThemeProvider from "@/components/ThemeProvider";
import styles from "@/app/layout.module.scss";

import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--montserat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head></head>
      <body className={styles.body}>
        <ThemeProvider>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
