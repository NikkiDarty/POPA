import type { ReactNode } from "react";

export default function ChooseCategoryLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-background w-full">
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          margin: '0 auto',
          padding: '20px 16px',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    </section>
  );
} 