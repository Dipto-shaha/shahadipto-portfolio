import { Link, Element } from "react-scroll";
import cv from "/DiptoShahaResume.pdf";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import ProblemSolve from "./ProblemSolve";
import Education from "./Education";
const Home = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <>
    <div className="lg:mx-20 mx-5">
      <div className="navbar pt-5">
        <div className="navbar-start">
          <img src={"https://i.ibb.co/vDphwng/Screenshot-2024-01-02-012804.png"} className="w-20 h-12 rounded-lg"></img>
        </div>
        <div className="navbar-end ">
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-[#1d293a] space-y-2 rounded-box w-52"
            >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                ABOUT
              </Link>
              <Link
                activeClass="active"
                to="skill"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                SKILL
              </Link>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                PROJECTT
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                CONTACT
              </Link>
              <a
                href={cv}
                download
                className="border-2 px-4 py-2 border-[#00cf5d] rounded-lg"
              >
                Resume
              </a>
            </ul>
          </div>
          <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              ABOUT
            </Link></li>
            <li><Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              SKILL
            </Link></li>
            <li><Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              PROJECTT
            </Link></li>
            <li><Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              CONTACT
            </Link></li>
            <a
              href={cv}
              download
              className="border-2 px-4 py-2 border-[#00cf5d] rounded-md"
            >
              RESUME
            </a>
          </ul></div>
        </div>
      </div>
      <div className="mt-5 space-y-10">
        <Element name="about" className="element">
          <About></About>
        </Element>
        <Education></Education>
        <Element name="skill" className="element">
          <Skill></Skill>
        </Element>
        <Element name="project" className="element">
          <Project></Project>
        </Element>
        <ProblemSolve></ProblemSolve>
        <Element name="contact" className="element">
          <Contact></Contact>
        </Element>
      </div>
     
    </div>
    <Footer></Footer>
    </>
  );
};

export default Home;
