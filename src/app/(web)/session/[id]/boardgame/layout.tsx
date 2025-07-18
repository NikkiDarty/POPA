import type { ReactNode } from "react";

export default function BoardgameLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-background">
        {children}
      </div>
    </section>
  );
} 