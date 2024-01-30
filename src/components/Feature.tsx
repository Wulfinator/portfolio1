import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
          <Card
            title="App Development"
            des="I create WITH YOU a responsive, scaleable and highly customizeable WebApplication or Website."
            icon={<AiFillAppstore />}
          />
          <Card
            title="SEO Optimisation"
            des="With keywords, meta tags, URLs, mobile-friendly and fast loading, important factors for SEO, i build Website on a high rank."
            icon={<SiProgress />}
          />
          <Card
            title="Mobile Development"
            des="As a developer, I understand the importance of creating mobile-friendly websites that provide a seamless user experience. "
            icon={<FaMobile />}
          />
          <Card
            title="UX Design"
            des="My goal is to create user-friendly and intuitive interfaces that enhance the user experience. It's not only about aesthetics, it's also about functionality and usability."
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="You and me will work together on the specifications that you need to secure your website and find the best hosting solution."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
