import React, { useState } from "react";
import "./home.css";
import { RiHome2Fill } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import { FaFileAlt } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { NavLink, Link} from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import ecobazarTemplate from "../assets/Thumbnail.png";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { RiFootballFill } from "react-icons/ri";
import { RiNetflixFill } from "react-icons/ri";
import { GiPaintBrush } from "react-icons/gi";
import { CgCopyright } from "react-icons/cg";
import { GiMoon } from "react-icons/gi";
import { MdSunny } from "react-icons/md";
import pfp from "../assets/nigga.jpg"

const Home = () => {

  const [dark,setDark] = useState(true);

  function darkThemeHandler(){
    setDark((prev)=>!prev);
  }

  return (
    <div className={`${dark ? "dark" : "light"} Portfolio-Home`}>
      <div className="HeroSection">
        <div className="heroSection-left">
          <div className="image-of-devp"><img src={pfp} className="profile-photo"/></div>

          <h4 className="devp-name">Pronoy Roy</h4>

          <p className="occupation">Front-End Developer</p>

          <div className="my-social-media-links">
            <Link to="https://www.linkedin.com/in/pronoy-roy-3203361b6/" className="social-media-link">
              <FaLinkedinIn className="social-media-icons" />
            </Link>

            <Link to="https://www.instagram.com/npc.pnop/" className="social-media-link">
              <AiFillInstagram className="social-media-icons" />
            </Link>

            <Link to="https://www.instagram.com/npc.pnop/" className="social-media-link">
              <BsTwitterX className="social-media-icons" />
            </Link>

            <Link to="https://www.instagram.com/npc.pnop/" className="social-media-link">
              <FaFacebookF className="social-media-icons" />
            </Link>
          </div>

          <div className="desc-about-devp">
            <div className="age-top-div desc-about-devp-div">
              <p className="desc-all-div-same-text">Age:</p>

              <p className="desc-second-all-div-same-text">19</p>
            </div>

            <div className="Residence-top-div desc-about-devp-div">
              <p className="desc-all-div-same-text">Residence:</p>

              <p className="desc-second-all-div-same-text">India</p>
            </div>

            <div className="Freelance-availability desc-about-devp-div">
              <p className="desc-all-div-same-text">Freelance:</p>

              <p className="desc-second-all-div-same-text">Available</p>
            </div>

            <div className="address-top-div desc-about-devp-div">
              <p className="desc-all-div-same-text">Address:</p>
              <p className="desc-second-all-div-same-text">West Bengal, Kolkata</p>
            </div>
          </div>

          <div className="Languages">
            <h3 className="lang">Languages</h3>

            <div className="all-type-of-language-ik">
              <div className="English">
                <div className="english-language-percentage-ik">
                  <p className="englishLang">English</p>
                  <p className="english-percentage">100%</p>
                </div>

                <div className="english-percentage-ik-bar"></div>
              </div>

              <div className="Hindi">
                <div className="Hindi-language-percentage-ik">
                  <p className="HindiLang">Hindi</p>
                  <p className="Hindi-percentage">100%</p>
                </div>

                <div className="Hindi-percentage-ik-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill-issue-div">
            <h2 className="skills-text">Skills</h2>

            <div className="skills-issue">
              <div className="HTML">
                <div className="HTML-language-percentage-ik">
                  <p className="HTMLLang">HTML</p>
                  <p className="HTML-percentage">100%</p>
                </div> 

                <div className="HTML-percentage-ik-bar"></div>
              </div>

              <div className="CSS">
                <div className="CSS-language-percentage-ik">
                  <p className="CSSLang">CSS</p>
                  <p className="CSS-percentage">90%</p>
                </div>

                <div className="CSS-percentage-ik-bar"></div>
              </div>

              <div className="Js">
                <div className="Js-language-percentage-ik">
                  <p className="JsLang">Vanilla Js</p>
                  <p className="Js-percentage">90%</p>
                </div>

                <div className="Js-percentage-ik-bar"></div>
              </div>

              <div className="React-Js">
                <div className="React-Js-language-percentage-ik">
                  <p className="React-JsLang">React Js</p>
                  <p className="React-Js-percentage">90%</p>
                </div>

                <div className="React-Js-percentage-ik-bar"></div>
              </div>

              <div className="Tailwind-CSS">
                <div className="Tailwind-CSS-language-percentage-ik">
                  <p className="Tailwind-CSSLang">Tailwind CSS</p>
                  <p className="Tailwind-CSS-percentage">100%</p>
                </div>

                <div className="Tailwind-CSS-percentage-ik-bar"></div>
              </div>
            </div>

            <div className="extra-skills-issue">
              <h1 className="extra-skills-text">Extra Skills</h1>

              <div className="first-skills-issue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                  <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
                </svg>
                <p className="extra-skills-issue-text">
                  Bootstrap, Materialize
                </p>
              </div>

              <div className="second-skills-issue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                  <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
                </svg>
                <p className="extra-skills-issue-text">Stylus, Sass, Less</p>
              </div>

              <div className="third-skills-issue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                  <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
                </svg>
                <p className="extra-skills-issue-text">Gulp, Webpack, Grunt</p>
              </div>

              <div className="Fourth-skills-issue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                  <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
                </svg>
                <p className="extra-skills-issue-text">GIT Knowledge</p>
              </div>
            </div>
          </div>

          <button className="download-cv">
            DOWNLOAD CV <MdDownload className="dwnld-icon" />
          </button>
        </div>

        <div className="heroSection-middle">
          <div className="heroSection-middle-Top">
            <div className="heroSection-middle-Top-left-part">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="square1"></div>

              <h1 className="name-and-job">
                I'm Pronoy Roy, a Front-end Developer crafting digital
                experiences with code and creativity.
              </h1>

              <p className="description-about-me">
                Hello, I'm a front-end developer specializing in HTML, CSS,
                JavaScript, Tailwind CSS, and React.js. With a passion for
                crafting interactive and visually appealing websites and
                applications, I leverage my expertise in React.js to implement
                complex functionalities and create seamless user experiences.
                Proficient in Tailwind CSS, I ensure consistent and responsive
                designs across various devices. Continuously learning and
                exploring new technologies, I am committed to staying updated in
                the dynamic field of web development.
              </p>

              <button className="HireMe">
                Hire Me
                <GoArrowRight className="arrow-right" />
              </button>

              <div className="circle3"></div>
              <div className="square2"></div>
              <div className="circle4"></div>

              <div className="triangle1"></div>
            </div>

            <div className="heroSection-middle-Top-right-part">
              {/* //! <image src={}/> */}
            </div>
          </div>

          <div className="heroSection-middle-Bottom">
            <h2 className="myService-heading">My Services</h2>

            <p className="myService-description">
              I specialize in crafting responsive front-end websites. With
              expertise in HTML, CSS, JavaScript, Tailwind CSS, and React.js, I
              can bring your vision to life flawlessly. Let's create a stunning
              front-end design that captivates your audience and elevates your
              online presence.
            </p>

            <div className="desktop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
              >
                <path
                  d="M63.2188 7.4375H4.78125C3.79531 7.43859 2.85007 7.83074 2.1529 8.5279C1.45574 9.22507 1.06359 10.1703 1.0625 11.1562V48.3438C1.06359 49.3297 1.45574 50.2749 2.1529 50.9721C2.85007 51.6693 3.79531 52.0614 4.78125 52.0625H26.0552L24.7802 55.25H19.125C18.8432 55.25 18.573 55.3619 18.3737 55.5612C18.1744 55.7605 18.0625 56.0307 18.0625 56.3125V58.4375H11.6875C11.4057 58.4375 11.1355 58.5494 10.9362 58.7487C10.7369 58.948 10.625 59.2182 10.625 59.5C10.625 59.7818 10.7369 60.052 10.9362 60.2513C11.1355 60.4506 11.4057 60.5625 11.6875 60.5625H56.3125C56.5943 60.5625 56.8645 60.4506 57.0638 60.2513C57.2631 60.052 57.375 59.7818 57.375 59.5C57.375 59.2182 57.2631 58.948 57.0638 58.7487C56.8645 58.5494 56.5943 58.4375 56.3125 58.4375H49.9375V56.3125C49.9375 56.0307 49.8256 55.7605 49.6263 55.5612C49.427 55.3619 49.1568 55.25 48.875 55.25H43.2198L41.9448 52.0625H63.2188C64.2047 52.0614 65.1499 51.6693 65.8471 50.9721C66.5443 50.2749 66.9364 49.3297 66.9375 48.3438V11.1562C66.9364 10.1703 66.5443 9.22507 65.8471 8.5279C65.1499 7.83074 64.2047 7.43859 63.2188 7.4375ZM47.8125 57.375V58.4375H20.1875V57.375H47.8125ZM27.0698 55.25L28.3448 52.0625H39.6552L40.9302 55.25H27.0698ZM64.8125 48.3438C64.8121 48.7663 64.6441 49.1715 64.3453 49.4703C64.0465 49.7691 63.6413 49.9371 63.2188 49.9375H4.78125C4.35867 49.9371 3.9535 49.7691 3.65469 49.4703C3.35588 49.1715 3.18785 48.7663 3.1875 48.3438V45.6875H64.8125V48.3438ZM64.8125 43.5625H3.1875V11.1562C3.18785 10.7337 3.35588 10.3285 3.65469 10.0297C3.9535 9.73088 4.35867 9.56285 4.78125 9.5625H63.2188C63.6413 9.56285 64.0465 9.73088 64.3453 10.0297C64.6441 10.3285 64.8121 10.7337 64.8125 11.1562V43.5625Z"
                  fill="#FFB400"
                />
                <path
                  d="M29.1671 34.888C29.2838 34.9646 29.4144 35.0174 29.5514 35.0435C29.6885 35.0696 29.8294 35.0684 29.966 35.04C30.1026 35.0117 30.2323 34.9567 30.3477 34.8782C30.4631 34.7997 30.5618 34.6992 30.6384 34.5826L39.0056 21.8326C39.1602 21.597 39.2149 21.3096 39.1577 21.0337C39.1005 20.7578 38.936 20.5159 38.7004 20.3613C38.4648 20.2066 38.1774 20.1519 37.9015 20.2092C37.6256 20.2664 37.3837 20.4309 37.2291 20.6665L28.8619 33.4165C28.7853 33.5331 28.7324 33.6637 28.7063 33.8008C28.6802 33.9379 28.6813 34.0788 28.7096 34.2155C28.738 34.3521 28.793 34.4819 28.8715 34.5973C28.9499 34.7127 29.0504 34.8115 29.1671 34.888Z"
                  fill="#FFB400"
                />
                <path
                  d="M40.7573 34.8165C40.9738 34.9969 41.2531 35.0839 41.5337 35.0583C41.8143 35.0328 42.0733 34.8968 42.2537 34.6804L47.5662 28.3054C47.7253 28.1144 47.8124 27.8738 47.8124 27.6252C47.8124 27.3767 47.7253 27.136 47.5662 26.9451L42.2537 20.5701C42.1647 20.462 42.0551 20.3726 41.9314 20.307C41.8077 20.2413 41.6723 20.2008 41.5328 20.1878C41.3934 20.1747 41.2528 20.1893 41.119 20.2307C40.9853 20.2722 40.861 20.3397 40.7534 20.4293C40.6459 20.519 40.5571 20.629 40.4921 20.7531C40.4272 20.8772 40.3875 21.0128 40.3752 21.1523C40.3629 21.2918 40.3783 21.4324 40.4205 21.5659C40.4627 21.6994 40.5309 21.8233 40.6212 21.9304L45.3668 27.6252L40.6212 33.3201C40.4408 33.5366 40.3538 33.8159 40.3793 34.0965C40.4049 34.3771 40.5408 34.6361 40.7573 34.8165Z"
                  fill="#FFB400"
                />
                <path
                  d="M25.7462 34.6804C25.8352 34.7884 25.9448 34.8779 26.0685 34.9435C26.1922 35.0091 26.3276 35.0496 26.4671 35.0627C26.6065 35.0758 26.7471 35.0612 26.8809 35.0197C27.0146 34.9782 27.1389 34.9107 27.2465 34.8211C27.354 34.7315 27.4428 34.6214 27.5078 34.4974C27.5727 34.3733 27.6124 34.2376 27.6247 34.0981C27.637 33.9586 27.6216 33.8181 27.5794 33.6845C27.5372 33.551 27.469 33.4272 27.3787 33.3201L22.6331 27.6252L27.3787 21.9304C27.469 21.8233 27.5372 21.6994 27.5794 21.5659C27.6216 21.4324 27.637 21.2918 27.6247 21.1523C27.6124 21.0128 27.5727 20.8772 27.5078 20.7531C27.4428 20.629 27.354 20.519 27.2465 20.4293C27.1389 20.3397 27.0146 20.2722 26.8809 20.2307C26.7471 20.1893 26.6065 20.1747 26.4671 20.1878C26.3276 20.2008 26.1922 20.2413 26.0685 20.307C25.9448 20.3726 25.8352 20.462 25.7462 20.5701L20.4337 26.9451C20.2746 27.136 20.1875 27.3767 20.1875 27.6252C20.1875 27.8737 20.2746 28.1144 20.4337 28.3054L25.7462 34.6804Z"
                  fill="#FFB400"
                />
              </svg>
              <p className="webdev-title">Web Development</p>
              <p className="service-webdev-title-desc">
                Blog,E-commerce & Portfolio
              </p>
            </div>
          </div>
        </div>

        <div className="heroSection-right">
          <button className="dark-theme" onClick={darkThemeHandler}>
            {
              dark ? (<GiMoon className="dark-theme-icon"/>) : (<MdSunny className="dark-theme-icon"/>)
            }
          </button>

          <nav className="navbar">
            <div className="home">
              <RiHome2Fill className="home-icon" />
              <p className="home-text">Home</p>
            </div>

            <div className="CV">
              <FaFileAlt className="resume-icon" />
              <p className="cv-text">CV</p>
            </div>

            <div className="projects">
              <HiMiniWrenchScrewdriver className="project-icon" />
              <p className="project-text">Projects</p>
            </div>

            <div className="Education">
              <RiGraduationCapFill className="Education-icon" />
              <p className="Education-text">Education</p>
            </div>

            <div className="ContactUs">
              <IoIosCall className="ContactUs-icon" />
              <p className="ContactUs-text">Contact Me</p>
            </div>
          </nav>
        </div>
      </div>

      <div className="Education">
        <h2 className="education-heading">Education</h2>

        <div className="college">
          <h2 className="clg-name">
            Birla Institute of Technology And Science, Pilani (BITS Pilani)
          </h2>

          <p className="details-abt-degree">
            I am presently enrolled in the first year of my Bachelor of Science
            program in Computer Science.
          </p>
        </div>

        <div className="Certificates">
          <div className="hackerrank-certificate">
            <Link className="frontend-engineer">FrontEnd Engineer</Link>
            <p className="institution-hackerrank">Institution HackerRank</p>
          </div>

          <div className="codehelp">
            <Link className="codehelp-fullStack-engineer">
              Full Stack Engineer
            </Link>
            <p className="institution-codehelp">Institution CodeHelp</p>
          </div>
        </div>
      </div>

      <div className="hobbies">
        <h2 className="hobbies-heading">Hobbies & Interest</h2>
        <div className="all-hobbies-list">
          <GiConsoleController className="Controller" />
          <RiFootballFill className="Football" />
          <RiNetflixFill className="Netflix" />
          <GiPaintBrush className="Brush" />
        </div>
      </div>

      <div className="Projects">
        <h2 className="projects-heading">Projects</h2>

        <div className="project-section">
          <div className="EcoBazar-project">
            <img
              src={ecobazarTemplate}
              className="ecobazar-template"
              alt="ecobazar logo"
            />
            <p className="EcoBazar-text">EcoBazar</p>
            <p className="Ecobazar-desc">
              Introducing Ecobazar, your ultimate online destination for fresh
              produce and groceries. With Ecobazar, you can conveniently shop
              for a wide variety of products ranging from fresh vegetables,
              fruits, meats, and more, all from the comfort of your
              home.Ecobazar offers a seamless shopping experience, with a
              user-friendly interface and secure payment options. Say goodbye to
              long queues and crowded aisles – Ecobazar brings the market to
              your fingertips, ensuring that you have access to quality products
              delivered right to your doorstep. Experience the convenience of
              online shopping with Ecobazar today!
            </p>

            <div className="links-and-github">
              <Link to="https://github.com/PRONOY0/Grocery-Website">
                <FaGithub />
              </Link>

              <Link to="https://grocery-website-seven.vercel.app/">
                <FaExternalLinkSquareAlt className="link-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="contactUs">
        <div className="leave-info">
          <h2 className="leave-info-text">Leave us your info</h2>

          <label>
            Your Full Name(Required)
            <input
              type="text"
              placeholder="Your Full Name"
              className="full-name"
            />
          </label>

          <label>
            Your Email(Required)
            <input
              type="email"
              placeholder="Your Email"
              className="your-email"
            />
          </label>

          <label>
            Your Message
            <textarea
              className="message"
              draggable="false"
              rows="20"
              cols="100"
              placeholder="Comment here..."
            />
          </label>

          <button className="send-message">SEND MESSAGE</button>
        </div>

        <div className="contact-information">
          <h2 className="contact-information-text">Contact information</h2>

          <div className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_2_2690)">
                <path
                  d="M1.5 3.75L6.75 1.5L11.25 3.75L15.9772 1.72425C16.0343 1.69979 16.0966 1.68988 16.1584 1.69541C16.2202 1.70094 16.2797 1.72173 16.3316 1.75593C16.3834 1.79013 16.4259 1.83666 16.4553 1.89135C16.4847 1.94603 16.5001 2.00716 16.5 2.06925V14.25L11.25 16.5L6.75 14.25L2.02275 16.2758C1.96569 16.3002 1.90344 16.3101 1.8416 16.3046C1.77976 16.2991 1.72026 16.2783 1.66844 16.2441C1.61662 16.2099 1.5741 16.1633 1.54471 16.1087C1.51531 16.054 1.49994 15.9928 1.5 15.9307V3.75ZM11.25 14.823V5.382L11.2013 5.403L6.75 3.177V12.618L6.79875 12.597L11.25 14.823Z"
                  fill="#2B2B2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_2690">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="country-location">
              <p className="country-text">Country:</p>
              <p className="country-name">India</p>
            </div>

            <div className="city-location">
              <p className="city-location-text">City:</p>
              <p className="city-location-name">Kolkata</p>
            </div>

            <div className="sreet-location">
              <p className="sreet-location-text">Street:</p>
              <p className="sreet-location-name">TPS road</p>
            </div>
          </div>

          <div className="mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_2_2710)">
                <path
                  d="M2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25ZM9.045 8.76225L4.236 4.6785L3.26475 5.8215L9.05475 10.7378L14.7405 5.81775L13.7595 4.683L9.04575 8.76225H9.045Z"
                  fill="#2B2B2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_2710">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="email-div">
              <p className="email-text">Email:</p>
              <p className="emailId">pronoyroy880@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="line"></div>
        <p className="copyright"><CgCopyright/> Copyright 2024. Made by Tomás Fernandes</p>
      </footer>
    </div>
  );
};

export default Home;
