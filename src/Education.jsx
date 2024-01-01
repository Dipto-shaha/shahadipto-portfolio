import { IoSchoolSharp } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education = () => {
  return (
    <div>
      <p className="text-5xl text-center mb-10">Education</p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d293a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "8px solid  #00cf5d" }}
          date="2016 - 2017"
          iconStyle={{ background: "#00cf5d", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">SSC</h3>
          <p>Sundargonj Govt Boys High School</p>
          <p>Science,Result: GPA5</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d293a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "8px solid  #00cf5d" }}
          date="2017 - 2019"
          iconStyle={{ background: "#00cf5d", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">HSC</h3>
          <p>Rangpur Govt College</p>
          <p>Science,Result: GPA5</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d293a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "8px solid  #00cf5d" }}
          date="2019 - Present"
          iconStyle={{ background: "#00cf5d", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">Dhaka University</h3>
          <p>Computer Science and Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
