import { getTranslations } from "next-intl/server";

export async function Button() {
  const t = await getTranslations();

  return (
    <button type="button" className="group flex gap-1 items-stretch justify-start w-fit">
      <span className="py-[0.938rem] px-[1.125rem] bg-white rounded-full font-text text-sm leading-none text-gray-950 font-bold duration-500 group-hover:bg-gray-950 group-hover:text-white">
        {t("home.hero.button")}
      </span>
      <div className="h-full bg-white stroke-gray-950 p-2 flex items-center justify-center w-[2.934rem] rounded-full duration-500 group-hover:bg-gray-950 group-hover:stroke-white">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M17.3945 7.49447L7.49453 17.3945"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3945 14.4944L17.3945 7.49445"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.3945 7.49445L17.3945 7.49445"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
