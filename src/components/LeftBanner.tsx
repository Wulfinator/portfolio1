import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaCss3 } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import SocialLinks from "./SocialLinks";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Junior WebDeveloper.", "Full Stack Developer.", "Lord of the Funktions."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="flex flex-col w-full gap-20 lgl:w-1/2">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal ">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="capitalize text-[#006400]">Adrian</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="green" />
        </h2>
        <p className="text-base leading-6 tracking-wider font-bodyFont">
          As a web developer with knowledge of HTML, CSS and JavaScript as well
          as frameworks such as React, Vite & Node, I work closely with
          customers to create efficient, scalable and user-friendly solutions. I
          am a quick learner and look forward to improve my skills in your
          company.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-6 xl:flex-row lgl:gap-0">
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            Find me on
          </h2>
          <div className="flex gap-4">
            <SocialLinks />
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            BEST SKILLS
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <FaCss3 />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
