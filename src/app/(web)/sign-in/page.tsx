"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
      const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="flex flex-col justify-between items-center" style={{ paddingTop: 50 }}>
      <h1
        className="text-center"
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 700,
          fontStyle: 'bold',
          fontSize: 28,
          lineHeight: '35px',
          letterSpacing: 0,
          marginBottom: 18,
        }}
      >
        Планы на вечер
      </h1>
      <div className="flex flex-col gap-4 w-full items-center">
        <Button
          variant="outline"
          size="lg"
          className="w-[448px] h-[48px] min-w-[84px] max-w-[480px] px-[20px] rounded-[12px] border-none"
          style={{ background: isDark ? '#C9DBED' : '#EBEDF2', fontSize: 16, color: isDark ? '#141A1F' : '#141A1F', fontWeight: 700 }}
        >
          Вход через Google
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-[448px] h-[48px] min-w-[84px] max-w-[480px] px-[20px] rounded-[12px] border-none"
          style={{ background: isDark ? '#C9DBED' : '#EBEDF2', fontSize: 16, color: isDark ? '#141A1F' : '#141A1F', fontWeight: 700 }}
        >
          Вход через Яндекс
        </Button>
      </div>
      <button
        className="mt-8 text-center w-full"
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: 14,
          lineHeight: '21px',
          letterSpacing: 0,
          background: 'none',
          border: 'none',
          color: '#5C738A',
          cursor: 'pointer',
        }}
        onClick={() => router.push("/start-new-session")}
        type="button"
      >
        Использовать без входа
      </button>
    </div>
  );
} 