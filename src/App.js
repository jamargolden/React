import Lottie from "lottie-web";
import animationData from "./lottie/intro.json";
import classes from "./components/App.module.css";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import { createContext } from'react';
import grain from './imgs/grain.gif';
import globe from './imgs/globe.png';
import ProjectMenu from "./components/ProjectMenu";
import ProjectMenu2 from "./components/ProjectMenu2";
import { useAnimation } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const openContext = createContext(false);

function App() {
  const container = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [gpMenuOpen, setgpOpen] = useState(false);
  const [wtMenuOpen, setwtOpen] = useState(false);


  const ref = useRef();
  const animation = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation.start({
            opacity: 1,
            
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  const ref2 = useRef();
  const animation2 = useAnimation();

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation2.start({
            opacity: 1,
            
          });
          observer2.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25,
      }
    );
    if (ref2.current) {
      observer2.observe(ref2.current);
    }
  }, [ref2]);
  
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoplay: true,
      renderer: "canvas",
      animationData: require("./lottie/abstract.json"),
    });
  }, []);

  const arrow = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: arrow.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      animationData: require("./lottie/arrow.json"),
    });
  }, []);

  const burger = useRef(null);
  useEffect(() =>{
    burger.current = Lottie.loadAnimation({
      container: burger.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: require("./lottie/burger.json"),
    });

    return () => burger.current?.destroy();
  }, []);

  const logo = useRef(null);
  useEffect(() => {
    logo.current = Lottie.loadAnimation({
      container: logo.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./lottie/logo.json"),
    });
  }, []);

  setTimeout(function(){ logo.current.play(); }, 10000);

  const weatherLogo = useRef(null);
  useEffect(() => {
    logo.current = Lottie.loadAnimation({
      container: weatherLogo.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./lottie/weatherlogo.json"),
    });
  }, []);


  return (
    <openContext.Provider value={{value: [isOpen, setOpen], value2: [gpMenuOpen, setgpOpen], value3: [wtMenuOpen, setwtOpen], value4: burger }}>
    <Router>
      <Routes>
      <Route path="/" element={
        <div className={classes.app}>
          <Nav open={isOpen} />
          <motion.div  className={classes.burgerContainer} >
            <div ref={logo} className={classes.logo} ></div>
            <button className={classes.burger} onClick={() => {setOpen(!isOpen); burger.current?.setDirection(isOpen ? -1 : 1); burger.current?.play();}} ref={burger} />
          </motion.div>
          <motion.div ref={arrow} className={classes.arrow} animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 3}} >
          </motion.div>
          <div className={classes.main} id="hero" >
          <div className={classes.title}>
                <h1 className={classes.name}>JAMAR</h1>
                <h1 className={classes.nameReg}>GOLDEN</h1>
              </div>
            <p className={classes.dev} >FRONT-END DEVELOPER</p>
          </div>
          <div className={classes.back}>
            <div className={classes.conatiner} ref={container}></div>
          </div>
          <div className={classes.contents}>
            <div className={classes.projects} id="project" >
              <motion.div onClick={() => {setgpOpen(!gpMenuOpen)}} ref={ref} animate={animation} whileTap={{scale: .8}} initial={{scale: 1}} className={classes.projectContainer} >
                <ProjectMenu project={1} />
                <img src={grain} className={classes.grain} />
                <motion.p className={classes.title1} >GOLDEN</motion.p>
                <motion.p className={classes.title2} >PHOTOGRAPHY</motion.p>
              </motion.div>
              <motion.div onClick={() => {setwtOpen(!wtMenuOpen)}} ref={ref2} animate={animation2} whileTap={{scale: .8}} initial={{scale: 1}} className={classes.projectContainer1} >
                <ProjectMenu2 />
                <div ref={weatherLogo} className={classes.weatherLogo}></div>
                <p className={classes.weather}>Weather Tracker</p>
              </motion.div>
            </div>
            <div className={classes.bottom} id="about" >
              <p className={classes.aboutTitle} >ABOUT ME</p>
              <p className={classes.para} >My name is Jamar Golden  and I’m a Front-End Developer with a love for design and graphics.<br></br> <br></br> I am a self taught graphic and motion graphic designer with years of freelance experience. I enjoy creating beautiful and dynamic web pages because it allows me to combine my passion for Art along with my interest in Computer Science.</p>
            </div>
            <div className={classes.email}>
              <img src={globe} className={classes.globe} />
              <p className={classes.address} >Jamaragolden@gmail.com</p>
            </div>
          </div>
        </div>}>
      </Route>
      </Routes>
    </Router>
    </openContext.Provider>
  );
}

export default App;

