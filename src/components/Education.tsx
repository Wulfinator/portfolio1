import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
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
          <h2 className="text-3xl font-bold md:text-4xl">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development Course"
            subTitle="DCI - Digital Career Institute GmbH (Jan 2023 - now)"
            result="Certification"
            des="I completed the Web Development course offered by Digital Career Institute (DCI). The curriculum covered basic coding languages such as HTML, JavaScript and CSS and progressed to advanced technologies that are essential for all programmers. The course was hands-on and I worked on real projects to gain practical experience. By the end of the course, I had built an impressive portfolio that showcased my skills and knowledge in web development."
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2023 - now</p>
          <h2 className="text-3xl font-bold md:text-4xl">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-gray-400 border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tutorship"
            subTitle="DCI - Digital Career Institute GmbH (Feb 2023 - Jan 2024)"
            result="Germany"
            des="Tutoring is an extracurricular service provided by DCI that gives participants the opportunity to review what they have learned in class and to review difficult or misunderstood concepts with a tutor. My tasks: -Answering questions, -Reviewing exercises, -Supporting students in their learning"
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
