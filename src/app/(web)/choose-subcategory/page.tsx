"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ChooseSubcategoryContent() {
  const router = useRouter();
  const params = useSearchParams();
  const session = params.get("session");

  return (
    <div
      className="flex flex-col max-w-[960px] flex-1 items-start w-full gap-8"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 960, flex: '1 0 0' }}
    >
      {/* Заголовок */}
      <h1
        className="text-[32px] font-bold leading-[40px] text-[#0D141C] mb-2 text-left font-['Plus_Jakarta_Sans',_sans-serif]"
        style={{ fontFeatureSettings: '"dlig" on' }}
      >
        Чем вы хотите заниматься дома?
      </h1>
      {/* Кнопки */}
      <div className="flex flex-col gap-[4px] w-full">
        {/* Кнопка 1 */}
        <div
          className="flex flex-col lg:flex-row items-start bg-background rounded-[8px] p-4 w-full mx-auto cursor-pointer transition hover:shadow-lg"
          tabIndex={0}
          role="button"
          onClick={() => router.push(`/session/${session}/movie`)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/session/${session}/movie`); }}
        >
          <div className="h-[200px] w-full lg:h-[256px] lg:w-[464px] flex-shrink-0 rounded-[8px] overflow-hidden relative mx-auto">
            <Image
              src="/images/8dc2b2220766a3056206d5c8dad8f98483bbe2aa.png"
              alt="Ночь кино"
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
            {/* Мини-описание для 1 кнопки */}
            <div
              className="text-[14px] font-normal leading-[21px] text-[#4A739C] mb-1 font-['Plus_Jakarta_Sans',_sans-serif] dark:text-[#9EB0BD]"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Посмотреть фильм
            </div>
            <div
              className="text-[18px] font-bold leading-[23px] text-[#0D141C] mb-2 dark:text-white"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Ночь кино
            </div>
            <div
              className="text-[16px] font-normal leading-[24px] text-[#4A739C] dark:text-[#9EB0BD]"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Устройтесь поудобнее на диване с просмотром классического фильма или новинки.
            </div>
          </div>
        </div>
        {/* Кнопка 2 */}
        <div
          className="flex flex-col lg:flex-row items-start bg-background rounded-[8px] p-4 w-full mx-auto cursor-pointer transition hover:shadow-lg"
          tabIndex={0}
          role="button"
          onClick={() => router.push(`/session/${session}/boardgame`)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/session/${session}/boardgame`); }}
        >
          <div className="h-[200px] w-full lg:h-[256px] lg:w-[464px] flex-shrink-0 rounded-[8px] overflow-hidden relative mx-auto">
            <Image
              src="/images/9f020b638c2cf1addf25109f42956174216a68b5.png"
              alt="Настольная игра Бонанза"
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
            {/* Мини-описание для 2 кнопки */}
            <div
              className="text-[14px] font-normal leading-[21px] text-[#4A739C] mb-1 font-['Plus_Jakarta_Sans',_sans-serif] dark:text-[#9EB0BD]"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Играйте в настольные игры
            </div>
            <div
              className="text-[18px] font-bold leading-[23px] text-[#0D141C] mb-2 dark:text-white"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Настольная игра «Бонанза»
            </div>
            <div
              className="text-[16px] font-normal leading-[24px] text-[#4A739C] dark:text-[#9EB0BD]"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Дайте волю своему духу соперничества с помощью разнообразных настольных игр.
            </div>
          </div>
        </div>
        {/* Кнопка 3 */}
        <div
          className="flex flex-col lg:flex-row items-start bg-background rounded-[8px] p-4 w-full mx-auto cursor-pointer transition hover:shadow-lg"
          tabIndex={0}
          role="button"
          onClick={() => router.push(`/session/${session}/console`)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/session/${session}/console`); }}
        >
          <div className="h-[200px] w-full lg:h-[256px] lg:w-[464px] flex-shrink-0 rounded-[8px] overflow-hidden relative mx-auto">
            <Image
              src="/images/a7782790d066e8cf42afde954622481a190d29d1.png"
              alt="Разборка PlayStation"
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
            {/* Мини-описание для 3 кнопки */}
            <div
              className="text-[14px] font-normal leading-[21px] text-[#4A739C] mb-1 font-['Plus_Jakarta_Sans',_sans-serif] dark:text-[#9EB0BD]"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Играть в PlayStation
            </div>
            <div
              className="text-[18px] font-bold leading-[23px] text-[#0D141C] mb-2 dark:text-white"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Разборка PlayStation
            </div>
            <div
              className="text-[16px] font-normal leading-[24px] text-[#4A739C] dark:text-[#9EB0BD]"
              style={{ fontFeatureSettings: '"dlig" on' }}
            >
              Погрузитесь в виртуальные миры и соревнуйтесь друг с другом в любимых играх.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChooseSubcategoryPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ChooseSubcategoryContent />
    </Suspense>
  );
} 