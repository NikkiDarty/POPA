import type { ReactNode } from "react";

export default function SignInLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-background">
        {children}
      </div>
    </section>
  );
} 