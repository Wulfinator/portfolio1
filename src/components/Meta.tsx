import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Meta = () => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <meta name="description" content={t("meta.description")}/>
    </Helmet>
  );
};

export default Meta;
