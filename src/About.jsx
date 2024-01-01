import self from "../src/assets/img/selfImage.jpg";
const About = () => {
  return (
    <div className="flex lg:flex-row flex-col ">
      <div className="text-xl mt-10 ml-5">
        <p className="text-2xl font-bold mt-5 text-[#00cf5d]">Hello! I am </p>
        <p className="lg:text-7xl text-5xl font-bold mt-1">Dipto Shaha</p>
        <p className="text-3xl font-bold my-5 text-[#00cf5d]">
          Full Stack Developer
        </p>
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
