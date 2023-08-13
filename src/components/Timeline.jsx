import { motion } from "framer-motion";
import Event from "./Event";

const Timeline = () => {
  return (
    <>
      <div className="min-h-screen md:py-14 py-16   min-w-full bg-[rgba(0,0,0,0.3)] relative flex flex-col md:gap-20 gap-20 items-center " name="Schedule">
        <div className="absolute w-full top-0 h-full -z-10">
          <img
            src="/src/assets/Timeline.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl mt-4 px-7 py-1 text-[#e53d57] font-semibold  bg-transparent backdrop-blur-sm w-fit h-fit rounded-full font-montserrat">
          Event Timeline
        </h2>
        <div className="lg:w-[82%] md:w-[75%] w-[175%] h-[1px] absolute lg:top-[47%] md:top-[48%] top-[56%] translate-y-1/2 rotate-90 lg:rotate-0 left-[50%] -translate-x-1/2 lg:translate-x-0  lg:left-16 bg-[#9fdbff]" />
        <motion.div className="w-full px-10 flex flex-col justify-between lg:gap-0 lg:flex-row items-center gap-20 lg:absolute top-[37%] lg:translate-y-1/2 font-montserrat">
          <Event title={"Registration Start"} date={"3 Jul - 5 Jul"} />
          <Event title={"Registration End"} date={"3 Jul - 5 Jul"} />
          <Event title={"Gaming Event Start"} date={"3 Jul - 5 Jul"} />
          <Event title={"Gaming Event End"} date={"3 Jul - 5 Jul"} />
          <Event title={"Prize Distribution"} date={"3 Jul - 5 Jul"} />
        </motion.div>
      </div>
    </>
  );
};

export default Timeline;
