import self from "../src/assets/img/selfImage.jpg";
import { FaCircle } from "react-icons/fa";
const About = () => {
  return (
    <div className="flex lg:flex-row flex-col ">
      <div className="text-xl mt-10 ml-5">
        <p className="text-2xl font-bold mt-5 text-[#00cf5d]">Hello! I am </p>
        <p className="lg:text-7xl text-5xl font-bold mt-1">Dipto Shaha</p>
        <div className="flex lg:flex-row flex-col  text-2xl font-bold my-5 text-[#00cf5d]">
          <p className="flex  justify-start items-center">
            <FaCircle className="mr-1" /> Aspiring Software Engineer
          </p>
          <p className="lg:ml-3 flex justify-start items-center">
            <FaCircle className="mr-1" /> Full Stack Developer
          </p>
        </div>
        <p></p>A computer science student and enthusiastic programmer with
        strong knowledge of data structures and algorithms. Extensive problem
        solving experience, having solved thousands of problems across multiple
        competitive programming platforms. Passionate about MERN stack
        development, applying skills to solve real life problems through code.
      </div>
      <div className="p-4 mt-4">
        <img src={self} alt="" className=" rounded-3xl w-[1000px]" />
      </div>
    </div>
  );
};

export default About;
