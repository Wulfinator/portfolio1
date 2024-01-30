import { BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

interface Props {
  title: string;
  des: string;
  src: string;
}

const ProjectsCard = ({ title, des, src }: Props) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="object-cover w-full duration-300 cursor-pointer h-60 group-hover:scale-110"
          src={src}
          alt="src"
        />
      </div>
      <div className="flex flex-col w-full gap-6 mt-5">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-normal uppercase text-designColor">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href="https://github.com/Wulfinator" target="_blank">
                <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                  <BsGithub />
                </span>
              </a>
              <a href="https://www.youtube.com/@reactjsBD" target="_blank">
                <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                  <FaYoutube />
                </span>
              </a>
            </div>
          </div>
          <p className="mt-3 text-sm tracking-wide duration-300 hover:text-gray-100">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
