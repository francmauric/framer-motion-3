import { motion, AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";
import NavBarNuevo from "./NavBarNuevo";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  /* console.log(isOpen) */
  const burger = {
    opened: (deg) => ({
      rotate: deg,
    }),
    closed: {
      rotate: 0,
    },
  };

  const image = {
    scaleNormal: {
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    scaleDown: {
      scale: 0.85,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  /* control de la visibilidad del nav */
  useEffect(() => {
    const handleScroll = () => {

        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
    } 

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  return (
    <div className="header-div min-h-screen w-screen bg-[#eaeaea] overflow-hidden">
      <motion.div
        src="./images/presence.jpeg"
        alt="padel"
        className="absolute bg-gray-950 flex flex-wrap justify-center  w-full h-full object-cover 
                    origin-bottom"
        variants={image}
        animate={isOpen ? "scaleDown" : "scaleNormal"}
      >
        <div className="w-full pt-20 justify-center flex ">
          <a href="/" className="cursor-pointer text-white">
          <img
            className="shadow-white shadow-lg w-64 h-64 border-white border-2 object-cover rounded-full  "
            src="./images/presence.jpeg"
            alt="logo"
          /></a>
        </div>
        <div >
          <h1 className="text-7xl  text-center text-white">
            We <strong className="text-gray-500">build</strong> digital <br /> experiences.
          </h1>
          <h2 className="text-4xl pt-10  text-center text-white">
            We collaborate with smart and creative people to build <br /> awesome Web
            Full Site.
          </h2>
            <a href="">
          <button className="text-white text-center text-3xl inset-0 bg-blue-900 bg-opacity-20 blur-sm hover:blur-none hover:bg-opacity-100 hover:shadow-md hover:shadow-white rounded-2xl px-4 py-2 ">
              Get Started
            </button>
            </a>
        </div>
      </motion.div>
      
      <section className={`w-full h-full  px-12 pt-4 overflow-hidden z-50 fixed inset-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div
          className="w-full p-2  border border-[#eaeaea] border-dashed 
                     flex justify-between items-center rounded-lg relative z-40 "
        >
          <h1 className="font-bold text-[#eaeaea] text-2xl">
          Boost your business
          </h1>
          <div
            className="space-y-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="w-[30px] h-[2px] bg-[#eaeaea]
                                              origin-left "
              variants={burger}
              animate={isOpen ? "opened" : "closed"}
              custom={"20deg"}
            ></motion.div>
            <motion.div
              className="w-[30px] h-[2px] bg-[#eaeaea] origin-left "
              variants={burger}
              animate={isOpen ? "opened" : "closed"}
              custom={"-20deg"}
            ></motion.div>
          </div>
        </div>
      </section>
      <AnimatePresence mode="wait">
        {isOpen ? <NavBarNuevo setIsOpen={setIsOpen} /> : null}
      </AnimatePresence>
    </div>
  );
}

export default Header;
