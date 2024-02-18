import React, { useState, useEffect } from "react";
import "./home.css";
import { GoArrowRight } from "react-icons/go";
import { FaArrowUpLong } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { CiLink } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import ecobazarTemplate from "../assets/Thumbnail.png";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { GiPaintBrush } from "react-icons/gi";
import { CgCopyright } from "react-icons/cg";
import { GiMoon } from "react-icons/gi";
import { MdSunny } from "react-icons/md";
import pfp from "../assets/Your Image 1.png";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaArrowDownLong } from "react-icons/fa6";
import mycvpdf from "../assets/mycv.pdf";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import hackerRankCertificate from "../assets/frontend_developer_react certificate.png";
import codehelpCertificate from "../assets/codehelp-certificate.png";
import restaurantProject from "../assets/resaurant website.png";
import shopsyTemplate from "../assets/shopsy.png";
import Coder from "../assets/Animation - 1708244339151.gif";

const Home = () => {
  const [dark, setDark] = useState(true);

  const { ref: myRef, inView: myElementIsVisible } = useInView();

  function darkThemeHandler() {
    setDark((prev) => !prev);
  }

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the top of the page
      setIsAtTop(window.scrollY === 0);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openPDF = () => {
    // URL to the PDF file
    const pdfURL = mycvpdf;

    // Open the PDF in a new tab
    window.open(pdfURL, "_blank");
  };

  const hackerrankCertificateOpen = () => {
    // URL to the PDF file
    const hackerRankCertificateURL = hackerRankCertificate;

    // Open the PDF in a new tab
    window.open(hackerRankCertificate, "_blank");
  };

  const codehelpCertificateeOpen = () => {
    const codehelpCertificateURL = codehelpCertificate;

    window.open(codehelpCertificateURL, "_blank");
  };

  function maileMeHandler() {
    const recipientEmail = "pronoyroy880@gmail.com";
    const subject = "Opportunity to Collaborate on Frontend Projects";
    const body = `Hello,\n\nI'm impressed by your portfolio and would love to discuss collaborating on frontend projects. Your work showcases a strong understanding of design and development, and I believe we could create something great together.\n\nLooking forward to connecting!\n\nBest regards, [Your Name]`;

    const emailUrl = `https://mail.google.com/mail/?view=cm&to=${recipientEmail}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = emailUrl;
  }

  return (
    <div className={`${dark ? "dark" : "light"} Portfolio-Home`}>
      {isAtTop ? (
        <Link
          spy={true}
          smooth={true}
          duration={100}
          to="footerDiv"
          className="scroll-btn scroll-down"
        >
          <FaArrowDownLong className="scroll-up-icon" />
        </Link>
      ) : (
        <Link
          spy={true}
          smooth={true}
          duration={100}
          to="HeroSection"
          className="scroll-btn scroll-up"
        >
          <FaArrowUpLong className="scroll-up-icon" />
        </Link>
      )}

      <div className="HeroSection" id="HeroSection">
        <div className="for-mobile-hero-section">
          <div className="heroSection-left">
            <div className="image-of-devp">
              <img
                src={pfp}
                className="profile-photo"
                alt="sidepictureofdeveloperphoto"
              />
            </div>

            <h4 className="devp-name">Pronoy Roy</h4>

            <p className="occupation">Front-End Developer</p>

            <div className="my-social-media-links">
              <NavLink
                to="https://www.linkedin.com/in/pronoy-roy-3203361b6/"
                className="social-media-link"
              >
                <FaLinkedinIn className="social-media-icons" />
              </NavLink>

              <NavLink
                to="https://www.instagram.com/npc.geezer/"
                className="social-media-link"
              >
                <AiFillInstagram className="social-media-icons" />
              </NavLink>

              <NavLink
                to="https://www.instagram.com/npc.geezer/"
                className="social-media-link"
              >
                <BsTwitterX className="social-media-icons" />
              </NavLink>

              <NavLink
                to="https://www.instagram.com/npc.geezer/"
                className="social-media-link"
              >
                <FaFacebookF className="social-media-icons" />
              </NavLink>
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
                <p className="desc-second-all-div-same-text">Kolkata</p>
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
                    <rect
                      x="0.5"
                      y="0.5"
                      width="9"
                      height="9"
                      stroke="#FFB400"
                    />
                    <rect
                      x="5.5"
                      y="5.5"
                      width="9"
                      height="9"
                      stroke="#FFB400"
                    />
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
                    <rect
                      x="0.5"
                      y="0.5"
                      width="9"
                      height="9"
                      stroke="#FFB400"
                    />
                    <rect
                      x="5.5"
                      y="5.5"
                      width="9"
                      height="9"
                      stroke="#FFB400"
                    />
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
                    <rect
                      x="0.5"
                      y="0.5"
                      width="9"
                      height="9"
                      stroke="#FFB400"
                    />
                    <rect
                      x="5.5"
                      y="5.5"
                      width="9"
                      height="9"
                      stroke="#FFB400"
                    />
                  </svg>
                  <p className="extra-skills-issue-text">
                    Gulp, Webpack, Grunt
                  </p>
                </div>

                <div className="Fourth-skills-issue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="9"
                      height="9"
                      stroke="#FFB400"
                    />
                    <rect
                      x="5.5"
                      y="5.5"
                      width="9"
                      height="9"
                      stroke="#FFB400"
                    />
                  </svg>
                  <p className="extra-skills-issue-text">GIT Knowledge</p>
                </div>
              </div>
            </div>

            <button className="download-cv" onClick={openPDF}>
              DOWNLOAD CV <MdDownload className="dwnld-icon" />
            </button>
          </div>

          <div className="heroSection-middle">
            <div className="heroSection-middle-Top">
              <div className="heroSection-middle-Top-left-part">
                <svg
                  className="circle1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#FFB400"
                    stroke-opacity="0.8"
                    stroke-width="2"
                  />
                </svg>

                <h1 className="name-and-job">
                  I'm Pronoy Roy, a{" "}
                  <span className="FrontEndDev">Front-end Developer</span>{" "}
                  crafting digital experiences with code and creativity.
                </h1>

                <p className="description-about-me">
                  Hello, I'm a front-end developer skilled in HTML, CSS,
                  JavaScript, Tailwind CSS, and React.js. Passionate about
                  building captivating websites and apps, I excel in crafting
                  interactive experiences using React.js. With expertise in
                  Tailwind CSS, I ensure consistent designs on all devices.
                  Always learning and exploring new tech, I'm dedicated to
                  staying ahead in web development.
                </p>

                <button className="HireMe" onClick={maileMeHandler}>
                  Hire Me
                  <GoArrowRight className="arrow-right" />
                </button>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="circle3"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#05FF00"
                    stroke-opacity="0.8"
                    stroke-width="2"
                  />
                </svg>
              </div>

              <div className="heroSection-middle-Top-right-part">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="circle2"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#05FF00"
                    stroke-opacity="0.8"
                    stroke-width="2"
                  />
                </svg>

                {/* <img src={pfp} className="profilephotoForPortfolio" alt="profilephotoorphotoofdeveloper"/> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  className="triangle"
                >
                  <path
                    d="M1.80385 11L7 2L12.1962 11H1.80385Z"
                    stroke="#FF2E00"
                    stroke-opacity="0.8"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="heroSection-right">
          <button className="dark-theme" onClick={darkThemeHandler}>
            {dark ? (
              <GiMoon className="dark-theme-icon" />
            ) : (
              <MdSunny className="dark-theme-icon" />
            )}
          </button>

          <nav className="navbar">
            <Link
              spy={true}
              smooth={true}
              duration={100}
              to="projects"
              className="projects navbar-projects-section"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="33"
                viewBox="0 0 65 33"
                fill="none"
                className="comment-hover-text"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H26.8039L32 33L37.1962 24H63C64.1046 24 65 23.1046 65 22V2C65 0.895431 64.1046 0 63 0H2Z"
                  fill="#2B2B2B"
                />
                <text
                  x="50%"
                  y="45%"
                  className="navigation-hover-text"
                  fill="white"
                  text-anchor="middle"
                >
                  Projects
                </text>
              </svg>
              <HiMiniWrenchScrewdriver className="project-icon navbars-icon" />
            </Link>

            <Link
              spy={true}
              smooth={true}
              duration={100}
              to="educationDiv"
              className="navbar-projects-section"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="33"
                viewBox="0 0 65 33"
                fill="none"
                className="comment-hover-text"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H26.8039L32 33L37.1962 24H63C64.1046 24 65 23.1046 65 22V2C65 0.895431 64.1046 0 63 0H2Z"
                  fill="#2B2B2B"
                />
                <text
                  x="50%"
                  y="45%"
                  className="navigation-hover-text"
                  fill="white"
                  text-anchor="middle"
                >
                  Education
                </text>
              </svg>
              <RiGraduationCapFill className="Education-icon navbars-icon" />
            </Link>

            <Link
              spy={true}
              smooth={true}
              duration={100}
              to="contactDiv"
              className="ContactUs navbar-projects-section"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="33"
                viewBox="0 0 65 33"
                fill="none"
                className="comment-hover-text"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H26.8039L32 33L37.1962 24H63C64.1046 24 65 23.1046 65 22V2C65 0.895431 64.1046 0 63 0H2Z"
                  fill="#2B2B2B"
                />
                <text
                  x="50%"
                  y="45%"
                  className="navigation-hover-text"
                  fill="white"
                  text-anchor="middle"
                >
                  Contact
                </text>
              </svg>
              <IoIosCall className="ContactUs-icon navbars-icon" />
            </Link>
          </nav>
        </div>
      </div>

      <div className="Education" id="educationDiv">
        <div className="heading-cap-icon">
          <h2 className="education-heading">Education</h2>
          <HiOutlineAcademicCap className="cap-icon" />
        </div>

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
            <NavLink
              onClick={hackerrankCertificateOpen}
              className="frontend-engineer"
            >
              Front End Engineer{" "}
              <FaExternalLinkSquareAlt className="certificate-link" />
            </NavLink>
            <p className="institution-hackerrank">Institution HackerRank</p>
          </div>

          <div className="codehelp">
            <NavLink
              onClick={codehelpCertificateeOpen}
              className="codehelp-fullStack-engineer"
            >
              Full Stack Engineer{" "}
              <FaExternalLinkSquareAlt className="certificate-link" />
            </NavLink>
            <p className="institution-codehelp">Institution CodeHelp</p>
          </div>
        </div>
      </div>

      <div className="hobbies">
        <h2 className="hobbies-heading">Hobbies & Interest</h2>
        <div className="all-hobbies-list">
          <div className="hobbies-div">
            <GiConsoleController className="hobbies-icon" />
            <p className="caption-text">Game</p>
          </div>

          <div className="hobbies-div">
            <RiNetflixFill className="hobbies-icon" />
            <p className="caption-text">Movies</p>
          </div>

          <div className="hobbies-div">
            <GiPaintBrush className="hobbies-icon" />
            <p className="caption-text">Drawing</p>
          </div>

          <div className="hobbies-div">
            <FaMusic className="hobbies-icon" />
            <p className="caption-text">Music</p>
          </div>
        </div>
      </div>

      <div className="Projects" id="projects">
        <h2 className="projects-heading">Projects</h2>

        <div
          ref={myRef}
          className={`${
            myElementIsVisible ? "show-project" : ""
          } project-section`}
        >
          <div className="EcoBazar-project">
            <img
              src={ecobazarTemplate}
              className="ecobazar-template"
              alt="ecobazar logo"
            />

            <div className="ecobazar-project-about-section">
              <p className="EcoBazar-text">EcoBazar(Mega Project)</p>

              <p className="Ecobazar-desc">
                Introducing Ecobazar, your ultimate online destination for fresh
                produce and groceries. With Ecobazar, you can conveniently shop
                for a wide variety of products ranging from fresh vegetables,
                fruits, meats, and more, all from the comfort of your
                home.Ecobazar offers a seamless shopping experience, with a
                user-friendly interface and secure payment options. Say goodbye
                to long queues and crowded aisles – Ecobazar brings the market
                to your fingertips, ensuring that you have access to quality
                products delivered right to your doorstep. Experience the
                convenience of online shopping with Ecobazar today!
              </p>

              <div className="links-and-github">
                <NavLink
                  to="https://github.com/PRONOY0/Grocery-Website"
                  className="links-also-github"
                >
                  <FaGithub className="link-icon" />
                </NavLink>

                <NavLink
                  to="https://grocery-website-seven.vercel.app/"
                  className="links-also-github"
                >
                  <CiLink className="link-icon" />
                </NavLink>
              </div>
            </div>
          </div>

          <div
            className={`${
              myElementIsVisible ? "show-project" : ""
            } Gericht-project`}
          >
            <div className="Gericht-project-about-section">
              <p className="Gericht-text">GERICHT</p>

              <p className="Gericht-desc">
                Introducing GERICHT, your premier online hub for culinary
                delights and dining convenience. With GERICHT, you can
                effortlessly explore a diverse array of delectable dishes,
                conveniently book your table, or order your favorite meals from
                our carefully curated menu – all from the comfort of your home.
                Experience the ease of GERICHT's user-friendly interface and
                secure payment options, eliminating the hassle of waiting in
                queues or navigating crowded restaurants. Whether you're craving
                a gourmet experience or a cozy meal at home, GERICHT ensures
                top-notch quality delivered straight to your doorstep. Join us
                in embracing the future of dining with GERICHT – where every
                culinary desire is just a click away. Start your gastronomic
                journey today!
              </p>

              <div className="links-and-github">
                <NavLink
                  to="https://github.com/PRONOY0/restaurant-website"
                  className="links-also-github"
                >
                  <FaGithub />
                </NavLink>

                <NavLink
                  to="https://restaurant-website-alpha-seven.vercel.app/"
                  className="links-also-github"
                >
                  <CiLink className="link-icon" />
                </NavLink>
              </div>
            </div>
            <img
              src={restaurantProject}
              className="ecobazar-template"
              alt="ecobazar logo"
            />
          </div>

          <div className="EcoBazar-project">
            <img
              src={shopsyTemplate}
              className="shopsy-template"
              alt="ecobazar logo"
            />

            <div className="ecobazar-project-about-section">
              <p className="EcoBazar-text">Shopsy</p>

              <p className="Ecobazar-desc">
                Introducing ShopSy, your premier online destination for the
                latest fashion trends and wardrobe essentials! With ShopSy, you
                can effortlessly browse and order a wide array of clothing items
                tailored to your unique style preferences, all from the comfort
                of your own home. ShopSy offers a seamless shopping experience,
                boasting a user-friendly interface and secure payment options,
                ensuring your transactions are smooth and worry-free. Bid
                farewell to crowded malls and long checkout lines – ShopSy
                brings the boutique experience directly to you, with quality
                garments delivered right to your doorstep. Whether you're
                seeking chic dresses, cozy sweaters, trendy accessories, or
                stylish footwear, ShopSy has you covered. Embrace the
                convenience of online shopping and elevate your wardrobe with
                ShopSy today!
              </p>

              <div className="links-and-github">
                <NavLink
                  to="https://github.com/PRONOY0/Shopsy"
                  className="links-also-github"
                >
                  <FaGithub />
                </NavLink>

                <NavLink
                  to="https://shopsy-ecru.vercel.app/"
                  className="links-also-github"
                >
                  <CiLink className="link-icon" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactUs" id="contactDiv">
        <div className="leave-info">
          <h2 className="leave-info-text">Leave us your info</h2>

          <label className="contact-us-label">
            <p className="contact-us-text">Your Full Name(Required)</p>
            <input
              type="text"
              placeholder="Your Full Name"
              className="input-field-contact-us"
            />
          </label>

          <label className="contact-us-label">
            <p className="contact-us-text">Your Email(Required)</p>
            <input type="email" placeholder="Your Email" className="input-field-contact-us"/>
          </label>

          <label className="contact-us-label">
            <p className="contact-us-text">Your Message</p>
            <textarea className="message" draggable="false" rows="20" cols="100" placeholder="Comment here..."/>
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
              className="location-icon"
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
              className="mail-icon"
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

      <footer className="foot-section" id="footerDiv">
        <div className="foot-section-upper-part">
          <div className="foot-section-upper-part-leftmost">
            <h2 className="name-of-devp">Pronoy Roy</h2>
            <p className="devp-desc">
              A dedicated Frontend Web Developer specializing in crafting
              compelling and user-centric Frontend experiences for websites and
              web applications.
            </p>
          </div>

          <div className="foot-section-upper-part-rightmost">
            <h2 className="social-text">Social</h2>
            <div className="my-social-media-foot-links">
              <NavLink
                to="https://www.linkedin.com/in/pronoy-roy-3203361b6/"
                className="social-media-link-footer"
              >
                <FaLinkedinIn className="social-media-icons" />
              </NavLink>

              <NavLink
                to="https://www.instagram.com/npc.geezer/"
                className="social-media-link-footer"
              >
                <AiFillInstagram className="social-media-icons" />
              </NavLink>

              <NavLink
                to="https://www.instagram.com/npc.geezer/"
                className="social-media-link-footer"
              >
                <BsTwitterX className="social-media-icons" />
              </NavLink>

              <NavLink
                to="https://www.instagram.com/npc.geezer/"
                className="social-media-link-footer"
              >
                <FaFacebookF className="social-media-icons" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="in-between-line"></div>

        <div className="foot-section-lower-part">
          <CgCopyright /> Copyright 2024
        </div>
      </footer>
    </div>
  );
};

export default Home;
