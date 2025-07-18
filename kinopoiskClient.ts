require('dotenv').config();
const API_URL = 'https://api.kinopoisk.dev/v1.4/movie/random';

export async function getRandomMovie() {
  const apiKey = process.env.API_KEY_KINOPOISK;
  console.log("API_KEY_KINOPOISK:", apiKey);
  if (!apiKey) {
    console.error("API_KEY_KINOPOISK is not set");
    throw new Error('API_KEY_KINOPOISK is not set');
  }
  try {
    const res = await fetch(API_URL, {
      headers: {
        'X-API-KEY': apiKey,
      },
      cache: 'no-store',
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Failed to fetch movie:", res.status, text);
      throw new Error('Failed to fetch movie: ' + res.status + ' ' + text);
    }
    return res.json();
  } catch (err) {
    console.error("Error in getRandomMovie:", err);
    throw err;
  }
  console.log("API_KEY_KINOPOISK (process.env):", process.env.API_KEY_KINOPOISK);
} 