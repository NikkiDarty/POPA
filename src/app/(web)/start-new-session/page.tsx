"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

function generateSessionId() {
  return Math.random().toString(36).substring(2, 10);
}

export default function StartNewSessionPage() {
  const [sessionId] = useState(generateSessionId());
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const sessionUrl = `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/session/${sessionId}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sessionUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1
        style={{
          color: '#0F1417',
          textAlign: 'center',
          fontFeatureSettings: '"dlig" on',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: 28,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '35px',
          marginBottom: 24,
        }}
        className="dark:text-white"
      >
        Поделитесь ссылкой с Александром
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            height: 56,
            padding: '15px 8px 15px 15px',
            alignItems: 'center',
            flex: 1,
            borderRadius: '12px 0 0 12px',
            borderTop: '1px solid #D4DBE3',
            borderBottom: '1px solid #D4DBE3',
            borderLeft: '1px solid #D4DBE3',
            background: '#FAFAFA',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 16,
            color: '#0F1417',
            fontWeight: 400,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {sessionUrl}
        </div>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            paddingRight: 15,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderRadius: '0 12px 12px 0',
            borderTop: '1px solid #D4DBE3',
            borderRight: '1px solid #D4DBE3',
            borderBottom: '1px solid #D4DBE3',
            background: '#FAFAFA',
            width: 56,
            height: 56,
            borderLeft: 'none',
            cursor: 'pointer',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.25 0H5.25C4.83579 0 4.5 0.335786 4.5 0.75V4.5H0.75C0.335786 4.5 0 4.83579 0 5.25V17.25C0 17.6642 0.335786 18 0.75 18H12.75C13.1642 18 13.5 17.6642 13.5 17.25V13.5H17.25C17.6642 13.5 18 13.1642 18 12.75V0.75C18 0.335786 17.6642 0 17.25 0ZM12 16.5H1.5V6H12V16.5ZM16.5 12H13.5V5.25C13.5 4.83579 13.1642 4.5 12.75 4.5H6V1.5H16.5V12Z" fill="#5C738A"/>
          </svg>
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          maxWidth: 480,
          padding: '12px 16px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          gap: 12,
          flex: '1 0 0',
          flexWrap: 'wrap',
          margin: '0 auto',
        }}
      >
        <button
          style={{
            display: 'flex',
            width: 213,
            height: 40,
            minWidth: 84,
            maxWidth: 480,
            padding: '0 16px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            background: '#EBEDF2',
            border: 'none',
            cursor: 'pointer',
            overflow: 'hidden',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              color: '#0F1417',
              textAlign: 'center',
              fontFeatureSettings: '"dlig" on',
              textOverflow: 'ellipsis',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '21px',
              width: '100%',
              height: '100%',
            }}
          >
            Telegram
          </span>
        </button>
        <button
          style={{
            display: 'flex',
            width: 223,
            height: 40,
            minWidth: 84,
            maxWidth: 480,
            padding: '0 16px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            background: '#EBEDF2',
            border: 'none',
            cursor: 'pointer',
            overflow: 'hidden',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              color: '#0F1417',
              textAlign: 'center',
              fontFeatureSettings: '"dlig" on',
              textOverflow: 'ellipsis',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '21px',
              width: '100%',
              height: '100%',
            }}
          >
            WhatsApp
          </span>
        </button>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          textAlign: 'center',
          fontFeatureSettings: '"dlig"',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '24px',
          marginTop: 12,
        }}
        className="dark:text-white"
      >
        Отправьте ссылку Александру, чтобы она присоединилась к планированию вечера. Как только Александра присоединится, вы оба начнете выбирать варианты вечера.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 8 }}>
        <Button
          style={{
            borderRadius: 8,
            background: '#0D80F2',
            display: 'flex',
            height: 48,
            minWidth: 84,
            maxWidth: 480,
            padding: '0 20px',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700,
            fontSize: 16,
            width: '100%',
          }}
          onClick={() => router.push(`/choose-category?session=${sessionId}`)}
        >
          Перейти к выбору досуга
        </Button>
      </div>
    </div>
  );
} 