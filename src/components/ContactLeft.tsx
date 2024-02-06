import { contactImg } from "../assets";
import SocialLinks from "./SocialLinks";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-bodyColor to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center my-5">
      <img
        className="object-cover w-full h-64 mb-2 rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Adrian Günzel</h3>
        <p className="text-lg font-normal text-gray-400">
          Junior Full Stack Developer
        </p>
        <p className="text-base tracking-wide text-gray-400">
          Thank you for visiting my portfolio! Feel free to contact me via mail below or via contact form.
        </p>
        {/* <p className="flex items-center gap-2 text-base text-gray-400">
          Phone: <span className="text-lightText">+968 97859628</span>
        </p> */}
        <p className="flex items-center gap-2 text-base text-gray-400">
          Email: <span className="text-lightText">adrian.guenzel@mail.de</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="mb-4 text-base uppercase font-titleFont">Find me in</h2>
        <div className="flex gap-4">
          <SocialLinks/>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
