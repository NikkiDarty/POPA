import type { ReactNode } from "react";

export default function MovieLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex w-[960px] max-w-[960px] p-[20px_0] flex-col items-start min-h-screen mx-auto">
      {children}
    </section>
  );
} 