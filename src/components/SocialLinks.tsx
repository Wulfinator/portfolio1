import { FaGithubSquare, FaLinkedinIn } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/adrian-guenzel" target="_blank">
        <span className="bannerIcon">
                  <FaLinkedinIn />
        </span>
      </a>
      <a href="https://github.com/Wulfinator" target="_blank">
        <span className="bannerIcon">
          <FaGithubSquare />
        </span>
      </a>
    </>
  );
}

export default SocialLinks