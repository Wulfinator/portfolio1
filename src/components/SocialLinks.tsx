import { FaGithubSquare, FaLinkedinIn } from 'react-icons/fa';

import { useTranslation } from "react-i18next";

const SocialLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      <a href="https://www.linkedin.com/in/adrian-guenzel" target="_blank">
        <span className="bannerIcon" title={t('social.linkedin')}>
          <FaLinkedinIn />
        </span>
      </a>
      <a href="https://github.com/Wulfinator" target="_blank">
        <span className="bannerIcon" title={t('social.github')}>
          <FaGithubSquare />
        </span>
      </a>
    </>
  );
}

export default SocialLinks