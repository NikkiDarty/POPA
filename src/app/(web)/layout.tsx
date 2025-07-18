'use client';

import React from "react";
import { useSessionStore } from "../useSessionStore";
import { Button } from "@/components/ui/button";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  // Используем Zustand для темы
  const { theme, setTheme } = useSessionStore();

  // Переключение темы и установка класса на <html>
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          display: 'flex',
          padding: '12px 40px',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          borderBottom: '1px solid #E5E8EB',
          background: (theme as string) === 'dark' ? '#141A1F' : 'var(--background)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M7 0.333333C7.59393 3.7391 10.2609 6.40607 13.6667 7C10.2609 7.59393 7.59393 10.2609 7 13.6667C6.40607 10.2609 3.7391 7.59393 0.333333 7C3.7391 6.40607 6.40607 3.7391 7 0.333333Z" fill={(theme as string) === 'dark' ? '#fff' : '#0F1417'}/>
            </svg>
          </span>
          <span
            style={{
              color: (theme as string) === 'dark' ? '#fff' : '#0F1417',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 18,
              fontWeight: 700,
              lineHeight: '23px',
              fontFeatureSettings: '"dlig" on',
            }}
          >
            Evening Plans
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.9375 13.0625C9.9375 13.5803 9.51777 14 9 14C8.48223 14 8.0625 13.5803 8.0625 13.0625C8.0625 12.5447 8.48223 12.125 9 12.125C9.51777 12.125 9.9375 12.5447 9.9375 13.0625ZM9 4.625C7.27656 4.625 5.875 5.88672 5.875 7.4375V7.75C5.875 8.09518 6.15482 8.375 6.5 8.375C6.84518 8.375 7.125 8.09518 7.125 7.75V7.4375C7.125 6.57812 7.96641 5.875 9 5.875C10.0336 5.875 10.875 6.57812 10.875 7.4375C10.875 8.29688 10.0336 9 9 9C8.65482 9 8.375 9.27982 8.375 9.625V10.25C8.375 10.5952 8.65482 10.875 9 10.875C9.34518 10.875 9.625 10.5952 9.625 10.25V10.1938C11.05 9.93203 12.125 8.79531 12.125 7.4375C12.125 5.88672 10.7234 4.625 9 4.625ZM17.125 9C17.125 13.4873 13.4873 17.125 9 17.125C4.51269 17.125 0.875 13.4873 0.875 9C0.875 4.51269 4.51269 0.875 9 0.875C13.4853 0.879737 17.1203 4.51465 17.125 9ZM15.875 9C15.875 5.20304 12.797 2.125 9 2.125C5.20304 2.125 2.125 5.20304 2.125 9C2.125 12.797 5.20304 15.875 9 15.875C12.7952 15.8707 15.8707 12.7952 15.875 9Z" fill={(theme as string) === 'dark' ? '#fff' : '#0F1417'}/>
            </svg>
          </button>
          <Button variant="ghost" size="icon" aria-label="Сменить тему" onClick={toggleTheme} style={{ marginLeft: 8 }}>
            {theme === 'dark' ? (
              // Классический полумесяц (луна)
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3c-.09.32-.21.65-.21 1A9 9 0 0 0 21 12.79Z" fill="#fff"/></svg>
            ) : (
              // Солнце для светлой темы (белая в тёмной теме)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill={(theme as string) === 'dark' ? '#fff' : '#0F1417'}/><path stroke={(theme as string) === 'dark' ? '#fff' : '#0F1417'} strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            )}
          </Button>
        </div>
      </nav>
      <div style={{ paddingTop: 64, background: 'var(--background)', minHeight: '100vh' }}>{children}</div>
    </>
  );
} 