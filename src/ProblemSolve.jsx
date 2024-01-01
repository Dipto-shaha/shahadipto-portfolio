import { FaExternalLinkAlt } from "react-icons/fa";
import oj from "../src/assets/img/OJ.png";
import cf from "../src/assets/img/cf.png";
import leetcode from "../src/assets/img/leetcode.png";

import Counter from "./Counter";
const ProblemSolve = () => {
  return (
    <div className=" bg-[#1d293a] lg:mx-20 mx-10 px-10 py-10 rounded-lg border-2 border-[#00cf5d]">
      <p className="text-center font-bold lg:text-5xl text-2xl text-[#00cf5d] mb-5">
        Problem Solved
      </p>
      <div className="flex flex-col lg:flex-row justify-between ">
        <div>
          <div className="flex items-center lg:flex-row flex-col text-5xl">
            <img src={leetcode} className="w-40 rounded-xl"></img>
            <p>LeetCode</p>
          </div>
          <p className="my-auto flex items-center justify-center mb-5">
            @Uodas_Dipto
            <a
              href="https://leetcode.com/Uodas_Dipto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt  className="ml-2"/>
            </a>
          </p>
          <p className="text-7xl text-center">
            <Counter endValue={400}></Counter>
          </p>
        </div>
        <div className=" lg:w-[1px] bg-[#00cf5d]"></div>
        <div>
          <div className="flex items-center lg:flex-row flex-col text-5xl">
            <img src={cf} className="w-40 rounded-xl mr-4"></img>
            <p>Codeforces</p>
          </div>
          <p className="my-auto flex items-center justify-center mb-5">
            @Uodas_Dipto
            <a
              href="https://codeforces.com/profile/Uodas_Dipto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt  className="ml-2"/>
            </a>
          </p>
          <p className="text-7xl  text-center">
            <Counter endValue={700}></Counter>
          </p>
        </div>
        <div className=" lg:w-[1px] bg-[#00cf5d]"></div>

        <div className="grid center">
          <div className="flex items-center lg:flex-row flex-col text-5xl">
            <img src={oj} className="w-60 mb-10 mt-4 rounded-xl mr-4"></img>
          </div>
          <p className="text-7xl   text-center">
            <Counter endValue={200}></Counter>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolve;
