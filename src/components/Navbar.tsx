import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { logo } from "../assets";
import { navLinksdata } from "../constants";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  // Hilfsfunktion für Navigation von anderen Seiten zurück zum Anker auf der Startseite
  const handleNavClick = (anchor: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${anchor}`);
      setTimeout(() => {
        if (anchor === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    }
  };
  return (
    <div className="w-full h-24 sticky top-0 z-50 backdrop-blur-2xl transition-colors bg-bodyColor/70 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="items-center hidden gap-6 mdl:inline-flex lg:gap-10">
          {navLinksdata.map(({ _id, link }) => (
            <li
              className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
              key={_id}
            >
              {link === "impressum" ? (
                <Link to="/impressum">{t(`navbar.impressum`)}</Link>
              ) : location.pathname === "/" ? (
                <ScrollLink
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {t(`navbar.${link === "home" ? "main" : link}`)}
                </ScrollLink>
              ) : (
                <Link to={`/#${link}`} onClick={() => handleNavClick(link)}>
                  {t(`navbar.${link === "home" ? "main" : link}`)}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* Language Switcher als Dropdown hinter Weltkugel */}
        <div className="ml-4 relative inline-flex items-center">
          <button
            className="flex items-center justify-center w-10 h-10 text-xl bg-black rounded-full cursor-pointer text-designColor hover:bg-gray-800 focus:outline-none"
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label="Change language"
          >
            <FaGlobe />
          </button>
          {showMenu && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-28 bg-bodyColor border border-gray-700 rounded shadow-lg z-50">
              <button
                onClick={() => { i18n.changeLanguage('de'); setShowMenu(false); }}
                className={`block w-full px-4 py-2 text-left hover:bg-gray-700 ${i18n.language === 'de' ? 'font-bold underline' : ''}`}
              >
                Deutsch
              </button>
              <button
                onClick={() => { i18n.changeLanguage('en'); setShowMenu(false); }}
                className={`block w-full px-4 py-2 text-left hover:bg-gray-700 ${i18n.language === 'en' ? 'font-bold underline' : ''}`}
              >
                English
              </button>
            </div>
          )}
        </div>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="inline-flex items-center justify-center w-10 h-10 text-xl bg-black rounded-full cursor-pointer mdl:hidden text-designColor"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen mdl:hidden overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="relative flex flex-col gap-8 py-2">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="mt-2 text-sm text-gray-400">
                  Here you find all the info's you need about me. Feel free to
                  visit every page, because that's why you are here, right?
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
                  >
                    {item.link === "impressum" ? (
                      <Link to="/impressum" onClick={() => setShowMenu(false)}>
                        {item.title}
                      </Link>
                    ) : location.pathname === "/" ? (
                      <ScrollLink
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </ScrollLink>
                    ) : (
                      <Link
                        to={`/#${item.link}`}
                        onClick={() => {
                          setShowMenu(false);
                          handleNavClick(item.link);
                        }}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="mb-4 text-base uppercase font-titleFont">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <SocialLinks />
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute text-2xl text-gray-400 duration-300 cursor-pointer top-4 right-4 hover:text-designColor"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
