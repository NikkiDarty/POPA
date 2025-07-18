import { NextResponse } from "next/server";

interface MovieApi {
  id: number;
  name: string;
  poster: { url: string };
  genres: { name: string }[];
  rating: { kp: number };
  description: string;
}

export async function GET() {
  const apiKey = process.env.API_KEY_KINOPOISK;
  if (!apiKey) {
    return NextResponse.json({ error: "API_KEY_KINOPOISK is not set" }, { status: 500 });
  }
  const res = await fetch("https://api.kinopoisk.dev/v1.4/movie/random", {
    headers: { "X-API-KEY": apiKey },
    cache: "no-store",
  });
  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch from Kinopoisk API" }, { status: 502 });
  }
  const data = await res.json();
  const m = data as MovieApi;
  if (
    typeof m.id === "number" && m.id > 0 &&
    typeof m.name === "string" && m.name.trim() !== "" &&
    m.poster && typeof m.poster.url === "string" && m.poster.url.trim() !== "" &&
    Array.isArray(m.genres) && m.genres.length > 0 &&
    m.rating && typeof m.rating.kp === "number" && m.rating.kp > 0 &&
    typeof m.description === "string" && m.description.trim() !== ""
  ) {
    return NextResponse.json(m);
  }
  return NextResponse.json({ error: "No valid random movie found" }, { status: 404 });
} 