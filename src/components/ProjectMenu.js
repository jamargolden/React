import { motion } from "framer-motion";
import { openContext } from "../App";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

import "./ProjectMenu.css";

function ProjectMenu(props) {
  const { value, value2, value3 } = useContext(openContext);
  const [isOpen, setOpen] = value2;
  return (
    <AnimatePresence>
      {isOpen &&( <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className="menuContainer">
        <p className="desc">My personal photography portfolio website that highlights my best and most recent work.</p>
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
export default ProjectMenu;
