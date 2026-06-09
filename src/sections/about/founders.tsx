import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Member = {
  name: string;
  role: string;
};

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const PHOTOS = [
  {
    src: "/images/founders/amanda.jpg",
    linkedin: "https://www.linkedin.com/company/agenciadellub",
    position: "object-[center_22%]",
  },
  {
    src: "/images/founders/rodrigo.jpg",
    linkedin: "https://www.linkedin.com/company/agenciadellub",
    position: "object-[center_15%]",
  },
];

export async function AboutFounders() {
  const t = await getTranslations();
  const members = t.raw("about.founders.members") as Member[];

  return (
    <section className="px-[18px] py-16 lg:px-0 lg:py-24">
      <div className="container flex flex-col gap-10 lg:gap-[59px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <h2 className="whitespace-pre-line font-title text-[40px] font-semibold uppercase leading-[1.05] text-gray-950 lg:text-[93px]">
            {t("about.founders.title")}
          </h2>
          <p className="font-text text-[16px] leading-[1.38] text-gray-600 lg:max-w-[271px] lg:pb-1.5">
            {t("about.founders.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          {members.map((member, index) => {
            const photo = PHOTOS[index];
            return (
              <div key={member.name} className="flex w-full flex-col gap-[19px] lg:flex-1">
                <div className="relative aspect-[591/596] w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`object-cover ${photo.position}`}
                  />
                  <a
                    href={photo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${member.name}`}
                    className="absolute bottom-6 right-6 text-white transition-opacity hover:opacity-80"
                  >
                    <LinkedinIcon className="size-[27px]" />
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-title text-[24px] font-bold leading-none text-gray-950">
                    {member.name}
                  </h3>
                  <p className="font-text text-[18px] leading-none text-gray-500">{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
