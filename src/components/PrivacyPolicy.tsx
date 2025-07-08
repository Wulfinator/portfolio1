
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="w-full min-h-[60vh] flex items-center justify-center">
        <div className="bg-[#181a20] rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-full md:max-w-3xl xl:max-w-6xl border border-gray-700 mx-2">
          <h1 className="mb-8 text-4xl font-bold text-center text-designColor">{t("privacy.title")}</h1>
          <div className="space-y-4 text-base leading-relaxed text-gray-300">
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.responsible_title")}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{t("privacy.responsible_text")}</p>
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.hosting_title")}</h2>
            <p>{t("privacy.hosting_text")}</p>
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.logfiles_title")}</h2>
            <p>{t("privacy.logfiles_text")}</p>
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.ssl_title")}</h2>
            <p>{t("privacy.ssl_text")}</p>
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.contactform_title")}</h2>
            <p>{t("privacy.contactform_text")}</p>
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.social_title")}</h2>
            <p>{t("privacy.social_text")}</p>
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.cookies_title")}</h2>
            <p>{t("privacy.cookies_text")}</p>
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.rights_title")}</h2>
            <p>{t("privacy.rights_text")}</p>
            <h2 className="mt-6 mb-2 text-2xl font-semibold text-designColor">{t("privacy.contact_title")}</h2>
            <p>{t("privacy.contact_text")}</p>
          </div>
        </div>
      </section>
      <div className="w-full border-t border-gray-700 my-8" />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
