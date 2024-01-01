import "./Contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      event.target.submit();
      toast.success("Message Sent Successfully");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <div className="bg-[#1d293a] lg:px-10 lg:mx-20 py-5 flex lg:flex-row flex-col rounded-lg" id="contact">
      <div className="flex flex-col justify-center ml-10 lg:w-2/5 mx-5">
        <p className="text-[#00cf5d] text-6xl font-bold">Dipto Shaha</p>
        <p className="my-5">
          I am interested in working with any company that thinks my skill will
          be helpful for them. If you are looking for someone like me, please
          let me know.
        </p>
        <div className="space-y-2">
          <p className="text-2xl flex items-center">
            <IoMdMail className="mr-2 " />
            Email
          </p>
          <p className="text-lg "> diptoshaha2635@gmail.com</p>
          <p className="text-2xl flex items-center">
            <FaPhone className="mr-2" />
            Phone
          </p>
          <p className="text-lg"> 01770891974</p>
          <p className="text-2xl flex items-center">
            <FaGithub className="mr-2" />
            Gitub
          </p>
          <p className="text-lg flex items-center">
            @dipto-shaha
            <a
              href="https://github.com/Dipto-shaha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </p>
          <p className="text-2xl flex items-center">
            <FaLinkedin className="mr-2" />
            Linkedin
          </p>
          <p className="text-lg flex items-center">
            @dipto-shaha
            <a
              href="https://www.linkedin.com/in/dipto-shaha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </p>
        </div>
      </div>
      <div id="from-details" className="lg:w-3/5 lg:m-5 lg:p-10 m-auto">
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/diptoshaha2635@gmail.com"
          method="POST"
        >
          <span className="my-5 text-3xl text-[#FFF]">LEAVE A MESSAGE</span>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="E-mail" name="email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="hidden"
            name="_next"
            value="https://deluxe-baklava-7f1489.netlify.app"
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
