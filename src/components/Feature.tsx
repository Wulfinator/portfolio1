import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { useTranslation } from "react-i18next";


const Feature = () => {
  const { t } = useTranslation();
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title={t("feature.title")} des={t("feature.subtitle")} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
          <Card
            title={t("feature.app_title")}
            des={t("feature.app_desc")}
            icon={<AiFillAppstore />}
          />
          <Card
            title={t("feature.seo_title")}
            des={t("feature.seo_desc")}
            icon={<SiProgress />}
          />
          <Card
            title={t("feature.mobile_title")}
            des={t("feature.mobile_desc")}
            icon={<FaMobile />}
          />
          <Card
            title={t("feature.ux_title")}
            des={t("feature.ux_desc")}
            icon={<SiAntdesign />}
          />
          <Card
            title={t("feature.hosting_title")}
            des={t("feature.hosting_desc")}
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
