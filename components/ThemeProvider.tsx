"use client";

import { createContext, useState } from "react";

const f: any = () => {};

export const ThemeContext = createContext({});

interface providerProps {
  children: React.ReactNode;
}
export default function ThemeProvider({ children }: providerProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ isMenuOpen, setMenuOpen, prueba: "PRUEBA" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
