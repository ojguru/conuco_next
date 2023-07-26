const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { REVALIDATE } from "./constants";

export async function fetchAPI(
  query: string,
  { variables }: any
): Promise<any> {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: REVALIDATE },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export function getImageURL(path = "") {
  const isExternal = path.includes("http");

  if (isExternal) {
    return path;
  }

  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${path}`;
}

export function getURL(path: string = "", host?: string) {
  const isExternal = path?.includes("http");

  if (isExternal) {
    return path;
  }

  if (host) {
    return `${host}${path}`;
  }

  return `${path}`;
}
