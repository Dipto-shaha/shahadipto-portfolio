import { useState } from "react";
import { Line } from "rc-progress";

const skill = [
  [
    ["React", 80, ""],
    ["NodeJS", 65],
    ["ExpressJS", 70],
    ["NextJS", 50],
    ["MonogoDB", 65],
    ["Firebase", 80],
  ],
  [
    ["C/C++", 90],
    ["JavaScript", 80],
    ["Python", 80],
    ["Java", 80],
  ],
  [
    ["Git", 80],
    ["Figma", 70],
    ["Latex", 60],
    ["Netlify", 70],
  ],
];

const Skill = () => {
  //console.log(skill);
  const [current, setCurrent] = useState(0);
  const handlesetCurrent =(value)=>{
    setCurrent(value);
  }
  return (
    <div >
      <p className="text-center text-5xl font-bold my-5">Skills </p>
      <div className="text-lg font-medium customcolor">
        <button className={`px-4 rounded py-2 border-2 border-[#00cf5d] ${current === 0 ? 'bg-[#00cf5d]' : ''}`} onClick={() =>  handlesetCurrent(0)}>Web</button>
        <button className={`mx-2 px-4 rounded py-2 border-2 border-[#00cf5d] ${current === 1 ? 'bg-[#00cf5d]' : ''}`} onClick={() => handlesetCurrent(1)}>
          Programming
        </button>
        <button className={`px-4 rounded py-2 border-2 border-[#00cf5d] ${current === 2 ? 'bg-[#00cf5d]' : ''}`} onClick={() => handlesetCurrent(2)}>Tool</button>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-10">
        {skill[current].map((item, index) => (
          <div key={index} className="h-20 relative bg-[#1d293a] rounded-xl">
            <div className="flex items-center justify-between mx-5  text-xl mt-5 ">
              <p>{item[0]}</p>
              <div className="px-2 py-1 bg-[#00cf5d] rounded-md text-xl">{item[1]}%</div>
            </div>
            <Line
              percent={item[1]}
              strokeWidth={2}
              strokeColor="#00cf5d"
              trailColor="#1d293a"
              className="bottom-0 absolute "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
