import classes from "./App.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { openContext } from '../App';
import{ useContext } from'react';
import {Link} from 'react-scroll'

function Nav(props){
    const {value, value4} = useContext(openContext);
    const [isOpen, setOpen] = value;
    const burger = value4;
    
    return(
        <AnimatePresence>
            {isOpen && (<motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className={classes.nav} >
            <ul className={classes.links} >
                <li className={classes.link}  >
                    <Link onClick={() => {setOpen(!isOpen); burger.current?.setDirection(isOpen ? -1 : 1); burger.current?.play();}} to="hero" spy={true} smooth={true} offset={0} duration={500}>HOME</Link>
                </li>
                <li className={classes.link}>
                    <Link onClick={() => {setOpen(!isOpen); burger.current?.setDirection(isOpen ? -1 : 1); burger.current?.play();}} to="project" spy={true} smooth={true} offset={-630} duration={500}>PROJECTS</Link>
                </li>
                <li className={classes.link}>
                    <Link onClick={() => {setOpen(!isOpen); burger.current?.setDirection(isOpen ? -1 : 1); burger.current?.play();}} to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link>
                </li>
            </ul>
            <button className={classes.btn} >RESUME</button>
        </motion.div>)}
        </AnimatePresence>
    )
}
export default Nav;