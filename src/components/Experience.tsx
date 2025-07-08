import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2023 - now</p>
          <h1 className="text-3xl font-bold md:text-4xl">
            {t('resume.experience')}
          </h1>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t('education.tutor_title')}
            subTitle={t('education.tutor_subtitle')}
            result={t('education.tutor_result')}
            des={t('education.tutor_desc')}
          />
          {/* <ResumeCard
            title={t('experience.webtrainer_title')}
            subTitle={t('experience.webtrainer_subtitle')}
            result={t('experience.webtrainer_result')}
            des={t('experience.webtrainer_desc')}
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl font-bold md:text-4xl">{t('experience.trainer_title')}</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t('experience.gym_title')}
            subTitle={t('experience.gym_subtitle')}
            result={t('experience.gym_result')}
            des={t('experience.gym_desc')}
          />
          <ResumeCard
            title={t('experience.webinstructor_title')}
            subTitle={t('experience.webinstructor_subtitle')}
            result={t('experience.webinstructor_result')}
            des={t('experience.webinstructor_desc')}
          />
          <ResumeCard
            title={t('experience.school_title')}
            subTitle={t('experience.school_subtitle')}
            result={t('experience.school_result')}
            des={t('experience.school_desc')}
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
