import type { ReactNode } from "react";

export default function StartNewSessionLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div
        style={{
          display: 'flex',
          padding: '20px 160px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flex: '1 0 0px',
          alignSelf: 'stretch',
          width: '100%',
          boxSizing: 'border-box',
          borderRadius: 16,
          boxShadow: 'rgba(0, 0, 0, 0.04) 0px 2px 8px',
        }}
      >
        {children}
      </div>
    </section>
  );
} 