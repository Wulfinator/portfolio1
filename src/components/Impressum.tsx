

import { useTranslation } from "react-i18next";

const Impressum = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="bg-[#181a20] rounded-lg shadow-lg p-8 w-full max-w-2xl border border-gray-700">
        <h1 className="mb-8 text-4xl font-bold text-center text-designColor">{t("impressum.title")}</h1>
        <div className="space-y-4 text-base leading-relaxed text-gray-300">
          <div>
            <span className="text-lg font-semibold">{t("impressum.title")}</span><br />
            {t("impressum.info")}<br />
            {t("impressum.name")}
          </div>
          <div>
            <span className="italic">{t("impressum.address").split("\n")[0]}</span><br />
            {t("impressum.address").split("\n")[1]}<br />
            {t("impressum.address").split("\n")[2]}
          </div>
          <div>
            <span className="font-semibold">{t("impressum.alt_address")}</span>
          </div>
          <div>
            <span className="font-semibold">{t("impressum.contact")}</span><br />
            {t("impressum.email")}<br />
            {t("impressum.phone")}
          </div>
          <div>
            <span className="text-sm italic">
              {(() => {
                const src = t("impressum.source");
                const match = src.match(/(https?:\/\/[^\s]+)/);
                if (match) {
                  return <>
                    {src.slice(0, match.index)}
                    <a href={match[1]} target="_blank" rel="noopener noreferrer" className="underline text-designColor" aria-label="Quelle: Impressum-Privatschutz">{match[1]}</a>
                    {src.slice(match.index! + match[1].length)}
                  </>;
                }
                return src;
              })()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
