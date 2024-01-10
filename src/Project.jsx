import crowd from "../src/assets/img/crowd.png";
import trend from "../src/assets/img/trend.png";
import skill from "../src/assets/img/skill.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const project = [
  {
    id: 1,
    title: "CrowdChoice",
    description: "Polling and Survey Application,which provides a platform for creating and participating in surveys, polls, and more",
    client: "https://github.com/Dipto-shaha/CrowdChoice",
    server: "https://github.com/Dipto-shaha/crowdchoice-backend",
    livelink: "https://steady-cat-31c52a.netlify.app/",
    img: crowd,
  },
  {
    id: 2,
    title: "SkillHub",
    description: "SkillHub is designed to facilitate job browsing and bidding. Users can add job, manage posted jobs and bidding requests.",
    client: "https://github.com/Dipto-shaha/SkillHub",
    server: "https://github.com/Dipto-shaha/skillhub-server",
    livelink: "https://thriving-treacle-ac6a42.netlify.app/",
    img: skill,
  },
  {
    id: 3,
    title: "TrendLink",
    description: "TrendLink is an e-commerce platform that specializes in fashion. With an intuitive interface and user-friendly design.",
    client: "https://github.com/Dipto-shaha/TrendLink",
    server: "https://github.com/Dipto-shaha/TrendLink-Server",
    livelink: "https://trendlink-275ff.web.app/",
    img: trend,
  },
];
const Project = () => {
  return (
    <div >
      <p className="text-center text-5xl font-bold my-10">Projects </p>
      <div className="grid grid-cols-1 lg:gap-10  rounded-lg lg:grid-cols-3 lg:mx-16">
        {project.map((item) => (
          <div key={item.id} className=" bg-[#1d293a] ">
            <img className="h-60 w-full" src={item.img}></img>
            <div className="p-4">
              <p className="text-3xl font-medium">{item.title}</p>
              <p className="text-lg my-2 ">{item.description}</p>
            </div>
            <div className="px-4 pb-4 flex justify-around">
              <p className="text-lg flex items-center">
                Client
                <a href={item.client} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              </p>
              <p className="text-lg flex items-center">
                Server
                <a href={item.server} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              </p>
              <p className="text-lg flex items-center">
                LiveLink
                <a
                  href={item.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-10 ">
        <a
          href="https://github.com/Dipto-shaha?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 border-2 py-2 text-lg font-semibold rounded-lg border-[#00cf5d]"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Project;
