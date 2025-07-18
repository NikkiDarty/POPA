"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ChooseCategoryContent() {
  const router = useRouter();
  const params = useSearchParams();
  const session = params.get("session");

  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-none py-7">
      {/* Main Heading */}
      <h1
        className="self-stretch text-[28px] font-bold leading-[35px] text-[#0D141C] text-center" style={{ fontFeatureSettings: '"dlig" on' }}
      >
        Спланируйте идеальное свидание
      </h1>
      {/* Description */}
      <div
        className="self-stretch text-[16px] font-normal leading-[24px] text-[#0D141C] text-center dark:text-white"
        style={{ fontFeatureSettings: '"dlig" on' }}
      >
        Выберите свои предпочтения на вечер
      </div>
      {/* Step Indicator */}
      <div
        className="text-[18px] font-bold leading-[23px] text-left self-start dark:text-white"
        style={{ fontFeatureSettings: '"dlig" on' }}
      >
        Шаг 1/5
      </div>
      {/* Section Heading */}
      <div
        className="text-[22px] font-bold leading-[28px] text-left self-start dark:text-white"
        style={{ fontFeatureSettings: '"dlig" on' }}
      >
        Где бы вы хотели встретиться?
      </div>
      {/* Option Blocks */}
      <div className="flex flex-col gap-7 w-full">
        {/* Home Option */}
        <div
          className="flex flex-col lg:flex-row items-start bg-white dark:bg-transparent rounded-[8px] p-4 w-full mx-auto cursor-pointer transition hover:shadow-lg"
          tabIndex={0}
          role="button"
          onClick={() => router.push(`/choose-subcategory?session=${session}&category=home`)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/choose-subcategory?session=${session}&category=home`); }}
        >
          <div className="h-[200px] w-full lg:h-[256px] lg:w-[464px] flex-shrink-0 rounded-[8px] overflow-hidden relative mx-auto">
            <Image
              src="/images/77fc94014d30b1015f2125ee803d4fb0e9793358.png"
              alt="Дома"
              fill
              style={{ objectFit: 'cover', borderRadius: 8 }}
            />
          </div>
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              display: 'flex',
              minWidth: 288,
              padding: 16,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 4,
              flex: '1 0 0',
            }}
          >
            <div
              className="text-[18px] font-bold leading-[23px] mb-2 dark:text-white"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Дома
            </div>
            <div
              className="text-[16px] font-normal leading-[24px] text-[#4A739C] dark:text-[#9EB0BD]"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Наслаждайтесь тихим вечером в комфортной обстановке своего собственного пространства.
            </div>
          </div>
        </div>
        {/* Outdoor Option */}
        <div
          className="flex flex-col lg:flex-row items-start bg-white dark:bg-transparent rounded-[8px] p-4 w-full mx-auto cursor-pointer transition hover:shadow-lg"
          tabIndex={0}
          role="button"
          onClick={() => router.push(`/choose-subcategory?session=${session}&category=outdoor`)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/choose-subcategory?session=${session}&category=outdoor`); }}
        >
          <div className="h-[200px] w-full lg:h-[256px] lg:w-[464px] flex-shrink-0 rounded-[8px] overflow-hidden relative mx-auto">
            <Image
              src="/images/087ec3c79ef253a88024deab66e79cb0a5207f91.png"
              alt="Вне дома"
              fill
              style={{ objectFit: 'cover', borderRadius: 8 }}
            />
          </div>
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              display: 'flex',
              minWidth: 288,
              padding: 16,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 4,
              flex: '1 0 0',
            }}
          >
            <div
              className="text-[18px] font-bold leading-[23px] mb-2 dark:text-white"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Вне дома
            </div>
            <div
              className="text-[16px] font-normal leading-[24px] text-[#4A739C] dark:text-[#9EB0BD]"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Исследуйте новые места и создавайте незабываемые впечатления вместе.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChooseCategoryPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ChooseCategoryContent />
    </Suspense>
  );
} 