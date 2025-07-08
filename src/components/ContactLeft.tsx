
import { contactImg } from "../assets";
import SocialLinks from "./SocialLinks";
import { useTranslation } from "react-i18next";

const ContactLeft = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-bodyColor to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center my-5">
      <img
        className="object-cover w-full h-64 mb-2 rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">{t("contactLeft.name")}</h3>
        <p className="text-lg font-normal text-gray-400">
          {t("contactLeft.role")}
        </p>
        <p className="text-base tracking-wide text-gray-400">
          {t("contactLeft.desc")}
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          {t("contactLeft.email")} <span className="text-lightText">a.guenzel83@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="mb-4 text-base uppercase font-titleFont">{t("contactLeft.findme")}</h2>
        <div className="flex gap-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
