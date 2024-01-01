import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

/* eslint-disable react/prop-types*/
const Counter = ({ endValue }) => { 
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView && <CountUp  key={endValue} end={endValue} duration={1.5} />}+
    </div>
  );
};

export default Counter;
