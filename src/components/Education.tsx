import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2023 - now</p>
          <h1 className="text-3xl font-bold md:text-4xl">{t('resume.education')}</h1>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t('education.webdev_title')}
            subTitle={t('education.webdev_subtitle')}
            result={t('education.webdev_result')}
            des={t('education.webdev_desc')}
          />
          {/* <ResumeCard
            title={t('education.secondary_title')}
            subTitle={t('education.secondary_subtitle')}
            result={t('education.secondary_result')}
            des={t('education.secondary_desc')}
          /> */}
        </div>
      </div>
      {/* part Two */}

      {/* Berufserfahrung entfernt, daher kein zweiter Block mehr */}
    </motion.div>
  );
};

export default Education;
