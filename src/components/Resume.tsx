import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
// import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const { t } = useTranslation();
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  // const [achievementData, setAchievementData] = useState(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex items-center justify-center text-center">
          <Title title={t('resume.title')} des={t('resume.desc')} />
        </div>
        <div>
          <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3">
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                // setAchievementData(false);
              }}
              className={`${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              {t('resume.education')}
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                // setAchievementData(false);
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              {t('resume.skills')}
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
                // setAchievementData(false);
              }}
              className={`${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              {t('resume.experience')}
            </li>
            {/* <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(true);
              }}
              className={`${
                achievementData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              {t('resume.achievements')}
            </li> */}
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {/* {achievementData && <Achievement />} */}
        {experienceData && <Experience />}
      </FadeIn>
    </section>
  );
};

export default Resume;
