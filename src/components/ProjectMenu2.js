import { motion } from "framer-motion";
import { openContext } from "../App";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import "./ProjectMenu.css";

function ProjectMenu2(props) {
  const { value, value2, value3 } = useContext(openContext);
  const [isOpen, setOpen] = value3;
  return (
    <AnimatePresence>
      {isOpen &&( <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className="menuContainer">
        <p className="desc">Weather Tracking Application using the Open Weather API allowing users to search and compare basic weather conditions of a specified area.</p>
        <div>
          <motion.button
            whileTap={{ scale: .75 }}
            initial={{ scale: 1 }}
            className="btn"
            onClick={event => {
              event.stopPropagation();
              console.log("Live View");
            }}
          >
            Live View
          </motion.button>
          <motion.button
            whileTap={{ scale: .75 }}
            initial={{ scale: 1 }}
            className="btn"
            onClick={event => {
              event.stopPropagation();
              console.log("Read Me");
            }}
          >
            .ReadMe
          </motion.button>
        </div>
      </motion.div>)}
    </AnimatePresence>
  );
}
export default ProjectMenu2;
