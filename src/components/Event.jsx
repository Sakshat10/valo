import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Event = ({ title, date }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1, cursor: "grab" }}
        whileDrag={{ cursor: "grabbing" }}
        dragElastic={0.7}
        drag={true}
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: { duration: 1 },
        }}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        className="px-5 py-3 shadow-[0px_0px_20px_2px_#9fdbff] shadow-[#9fdbff] bg-transparent backdrop-blur-sm w-fit h-fit rounded-full"
      >
        <h3 className="font-semibold whitespace-nowrap  text-[1.2rem] text-[#dadada] text-center ">
          {title}
        </h3>
        <p className="text-[#dadada] text-center">{date}</p>
      </motion.div>
    </>
  );
};

Event.propTypes = {
  title: PropTypes.string.isRequired, // Add the missing prop type validation
  date: PropTypes.string.isRequired, // Add the missing prop type validation
};

export default Event;
