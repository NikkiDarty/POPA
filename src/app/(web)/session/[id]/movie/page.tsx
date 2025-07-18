"use client";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface Movie {
  name: string;
  year: number;
  description: string;
  genres: { name: string }[];
  rating: { kp?: number };
  poster: { url: string };
  videos?: { trailers?: { url: string }[] };
  id: number;
}

const mockMovies: Movie[] = [
  {
    name: "Интерстеллар",
    year: 2014,
    description: "Группа исследователей отправляется сквозь червоточину в космосе в попытке обеспечить выживание человечества.",
    genres: [{ name: "Фантастика" }, { name: "Драма" }, { name: "Приключения" }],
    rating: { kp: 8.6 },
    poster: { url: "https://st.kp.yandex.net/images/film_big/258687.jpg" },
    videos: { trailers: [{ url: "https://www.youtube.com/watch?v=zSWdZVtXT7E" }] },
    id: 258687,
  },
  {
    name: "Начало",
    year: 2010,
    description: "Вор, способный проникать в сны людей, получает задание внедрить идею в подсознание жертвы.",
    genres: [{ name: "Триллер" }, { name: "Фантастика" }, { name: "Драма" }],
    rating: { kp: 8.7 },
    poster: { url: "https://st.kp.yandex.net/images/film_big/447301.jpg" },
    videos: { trailers: [{ url: "https://www.youtube.com/watch?v=YoHD9XEInc0" }] },
    id: 447301,
  },
  {
    name: "Матрица",
    year: 1999,
    description: "Компьютерный хакер узнаёт, что реальность — это иллюзия, созданная машинами для порабощения человечества.",
    genres: [{ name: "Фантастика" }, { name: "Боевик" }],
    rating: { kp: 8.5 },
    poster: { url: "https://st.kp.yandex.net/images/film_big/301.jpg" },
    videos: { trailers: [{ url: "https://www.youtube.com/watch?v=vKQi3bBA1y8" }] },
    id: 301,
  },
];

export default function MoviePage() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAlt, setShowAlt] = useState(false);

  const validateMovie = (data: Movie) => {
    return (
      data &&
      typeof data.name === "string" && data.name.trim() !== "" &&
      data.poster && typeof data.poster.url === "string" && data.poster.url.trim() !== "" &&
      Array.isArray(data.genres) && data.genres.length > 0 &&
      data.rating && typeof data.rating.kp === "number" && data.rating.kp > 0 &&
      typeof data.description === "string" && data.description.trim() !== ""
    );
  };

  const fetchMovie = useCallback(async (attempt = 1) => {
    setLoading(true);
    setError(null);
    setMovie(null);
    setShowAlt(false);
    try {
      const res = await fetch("/api/random-movie");
      const data = await res.json();
      if (!res.ok || !validateMovie(data)) {
        if (attempt < 10) {
          fetchMovie(attempt + 1);
          return;
        } else {
          throw new Error("Не удалось найти подходящий фильм после 10 попыток");
        }
      }
      setMovie(data);
      setLoading(false);
    } catch {
      setError("Не удалось получить фильм из API.");
      setLoading(false);
      setShowAlt(true);
    }
  }, []);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const handleShowAlt = () => {
    setMovie(mockMovies[Math.floor(Math.random() * mockMovies.length)]);
    setShowAlt(false);
    setError(null);
    setLoading(false);
  };

  if (loading && !showAlt) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-lg gap-4 dark:text-white">
        Загрузка фильма...
        <Button onClick={handleShowAlt}>Показать альтернативный фильм</Button>
        <div className="text-zinc-400 text-sm">Если не хотите ждать — нажмите кнопку.</div>
      </div>
    );
  }

  if (showAlt) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-6">
        <div className="text-zinc-500 text-center mb-2">Фильм не был загружен автоматически.</div>
        <Button onClick={handleShowAlt}>Показать альтернативный фильм</Button>
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
      </div>
    );
  }

  if (!movie) {
    return <div className="flex items-center justify-center min-h-[60vh] w-full text-lg text-red-500">Ошибка загрузки фильма</div>;
  }

  // Mock data for rating distribution and reviews
  const ratingDistribution = [5, 12, 18, 32, 33]; // Example: [1 star, 2 stars, 3 stars, 4 stars, 5 stars]
  const totalVotes = ratingDistribution.reduce((a, b) => a + b, 0);
  const reviewsCount = 124; // Example

  const trailerUrl = movie.videos?.trailers?.[0]?.url || `https://www.kinopoisk.ru/film/${movie.id}/video/`;
  const infoUrl = `https://www.kinopoisk.ru/film/${movie.id}/`;

  return (
    <div className="flex flex-col w-[960px] max-w-[960px] p-5 items-start">
      {/* Poster Block */}
      <div className="flex flex-col p-3.5 gap-0 items-start flex-1 self-stretch">
        <img
          src={movie.poster?.url}
          alt={movie.name}
          className="h-[218px] min-h-[218px] w-full object-cover rounded-xl mb-0"
          style={{ alignSelf: 'stretch' }}
        />
      </div>
      {/* Title, Description, Year/Genre */}
      <div className="flex flex-col p-[20px_16px_12px_16px] items-start self-stretch">
        <div
          className="font-[700] text-[22px] leading-[28px] font-plusjakartasans mb-4 dark:text-white"
          style={{ fontFeatureSettings: '"dlig" on' }}
        >
          {movie.name}
        </div>
        <div
          className="font-[400] text-[16px] leading-[24px] font-plusjakartasans mb-4 dark:text-white"
          style={{ fontFeatureSettings: '"dlig" on' }}
        >
          {movie.description}
        </div>
        <div
          className="flex flex-row items-center gap-2 text-[#9EB0BD] font-[400] text-[14px] leading-[21px] font-plusjakartasans mb-4"
          style={{ fontFeatureSettings: '"dlig" on' }}
        >
          <span>{movie.year}</span>
          <span className="mx-1">•</span>
          <span>{movie.genres.map(g => g.name).join(", ")}</span>
        </div>
      </div>
      {/* Rating and Graph Block */}
      <div className="flex flex-wrap p-4 gap-x-8 gap-y-6 self-stretch">
        {/* Rating Block */}
        <div className="flex flex-col h-[153px] items-start gap-2">
          <div
            className="font-[800] text-[36px] leading-[45px] font-plusjakartasans dark:text-white"
            style={{ fontFeatureSettings: '"dlig" on', letterSpacing: '-1px' }}
          >
            {movie.rating.kp ? movie.rating.kp.toFixed(1) : "-"}
          </div>
          {/* Stars */}
          <div className="flex flex-row gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#C9DBED" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          <div
            className="font-[400] text-[16px] leading-[24px] font-plusjakartasans text-[#9EB0BD]"
            style={{ fontFeatureSettings: '"dlig" on' }}
          >
            {reviewsCount} отзывов
          </div>
        </div>
        {/* Graph Block */}
        <div className="flex flex-col min-w-[200px] max-w-[400px] gap-3 flex-1">
          <div className="flex flex-col gap-2 w-full">
            {ratingDistribution.map((count, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-4 text-[14px] text-[#9EB0BD]">{5-idx}</span>
                <div className="flex-1 rounded-[4px] h-2 overflow-hidden bg-[#EBF5FF] dark:bg-[#3D4F5C]" style={{ height: '8px', borderRadius: '4px' }}>
                  <div
                    className="bg-[#C9DBED] rounded-[4px] h-2"
                    style={{ width: `${(count/totalVotes)*100}%`, borderRadius: '4px', height: '8px', background: '#C9DBED' }}
                  />
                </div>
                <span className="w-8 text-[14px] text-[#9EB0BD] text-right">{Math.round((count/totalVotes)*100)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-wrap p-[12px_16px] gap-3 flex-1 self-stretch">
        <Button
          className="flex h-10 min-w-[84px] max-w-[480px] px-4 rounded-[20px] bg-[#2B3840] text-white font-[700] text-[14px] leading-[21px] font-plusjakartasans overflow-hidden text-ellipsis"
          style={{ fontFeatureSettings: '"dlig" on' }}
          onClick={() => window.open(trailerUrl, '_blank')}
        >
          Смотреть трейлер
        </Button>
        <Button
          className="flex h-10 min-w-[84px] max-w-[480px] px-4 rounded-[20px] bg-[#C9DBED] text-[#141A1F] font-[700] text-[14px] leading-[21px] font-plusjakartasans overflow-hidden text-ellipsis"
          style={{ fontFeatureSettings: '"dlig" on' }}
          onClick={() => window.open(infoUrl, '_blank')}
        >
          Больше информации
        </Button>
      </div>
      {/* Like/Dislike Buttons */}
      <div className="flex flex-row gap-4 mt-4">
        {/* Like Button */}
        <div className="flex flex-col items-center w-20 p-[10px_0] gap-2 self-stretch">
          <button className="flex flex-col items-center p-2.5 rounded-[20px] w-full" aria-label="Лайк" onClick={() => fetchMovie()}>
            <div className="flex flex-col items-center p-[10px] rounded-full bg-[#2B3840] w-[40px] h-[40px] justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.9062 0.5C11.293 0.5 9.88047 1.19375 9 2.36641C8.11953 1.19375 6.70703 0.5 5.09375 0.5C2.41987 0.503014 0.253014 2.66987 0.25 5.34375C0.25 10.8125 8.35859 15.2391 8.70391 15.4219C8.88878 15.5213 9.11122 15.5213 9.29609 15.4219C9.64141 15.2391 17.75 10.8125 17.75 5.34375C17.747 2.66987 15.5801 0.503014 12.9062 0.5ZM9 14.1562C7.57344 13.325 1.5 9.53828 1.5 5.34375C1.50258 3.36005 3.11005 1.75258 5.09375 1.75C6.61328 1.75 7.88906 2.55937 8.42188 3.85938C8.51818 4.09382 8.74654 4.2469 9 4.2469C9.25346 4.2469 9.48182 4.09382 9.57812 3.85938C10.1109 2.55703 11.3867 1.75 12.9062 1.75C14.89 1.75258 16.4974 3.36005 16.5 5.34375C16.5 9.53203 10.425 13.3242 9 14.1562Z" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col items-center w-full mt-2">
              <span className="text-center font-plusjakartasans text-[14px] font-[500] leading-[21px] dark:text-white" style={{ fontFeatureSettings: '"dlig" on' }}>
                Лайк
              </span>
            </div>
          </button>
        </div>
        {/* Dislike Button */}
        <div className="flex flex-col items-center w-20 p-[10px_0] gap-2 self-stretch">
          <button className="flex flex-col items-center p-2.5 rounded-[20px] w-full" aria-label="Дизлайк" onClick={() => fetchMovie()}>
            <div className="flex flex-col items-center p-[10px] rounded-full bg-[#2B3840] w-[40px] h-[40px] justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.0672 12.1828C13.3114 12.427 13.3114 12.823 13.0672 13.0672C12.823 13.3114 12.427 13.3114 12.1828 13.0672L7 7.88359L1.81719 13.0672C1.57297 13.3114 1.17703 13.3114 0.932812 13.0672C0.688599 12.823 0.688599 12.427 0.932812 12.1828L6.11641 7L0.932812 1.81719C0.688599 1.57297 0.688599 1.17703 0.932812 0.932812C1.17703 0.688599 1.57297 0.688599 1.81719 0.932812L7 6.11641L12.1828 0.932812C12.427 0.688599 12.823 0.688599 13.0672 0.932812C13.3114 1.17703 13.3114 1.57297 13.0672 1.81719L7.88359 7L13.0672 12.1828Z" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col items-center w-full mt-2">
              <span className="text-center font-plusjakartasans text-[14px] font-[500] leading-[21px] dark:text-white" style={{ fontFeatureSettings: '"dlig" on' }}>
                Дизлайк
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
} 