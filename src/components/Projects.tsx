import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
// import { projectOne, projectThree, projectTwo } from "../assets";
import {commingsoon} from "../assets"
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex items-center justify-center text-center">
          <Title
            title="FEEL FREE TO VISIT MY PROJECTS"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
          <ProjectsCard
            title="Coming Soon"
            des="Currently there are no public projects aviable, but that will change soon."
            src={commingsoon}
          />
          
          
          
          
          {/* <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          /> */}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
