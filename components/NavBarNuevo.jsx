import { motion } from "framer-motion";
import "../style/Header.css"
import styles from '../style/Home.module.css'
import Text3d from '../components/3d/Text3d';
import { useRef } from "react";

function NavBarNuevo ({setIsOpen}) {
   
    const plane = useRef(null);
    const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2; 
    const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }












    const children = {
        hidden: {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%",
        },
        show:(i) =>({
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
            transition: {
                ease: [0.110, 0.325, 0.160, 0.95],
                delay: Math.random( ) * (i/50),
                duration:0.6,
            }
        }),
        exit:(i) => ({
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            transition: {
                ease: [0.645, 0.045, 0.355, 0.8],
                delay: Math.random() * (i/50),
                duration:0.6,
            }
        })
    }

    const navLink = {
        hidden: {
            y: "100%",
        },
        show: {
            y:0,
            transition: {
                ease: 'easeOut',
                delay:0.2,
                duration:0.4
            }
        },
        exit: {
            y:"100%",
            transition: {
                ease: 'easeOut',
                duration:0.4
            }
        }
    }

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <div className="w-screen h-screen overflow-hidden fixed inset-0">
            <div className="w-full h-full grid grid-cols-20 grid-rows-1">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].
                    map((_,i) => (
                        <motion.div key={i} className=" navbar w-full h-full  " 
                            variants={children} initial="hidden" 
                            animate="show" exit="exit" custom={i} ></motion.div>
                    ))
                }
            </div>
            <section  className="w-full h-full absolute inset-0 flex justify-start items-center z-30">
                <ul  onMouseMove={(e) => {manageMouseMove(e)}}  className=" ml-40  leading-none " > 
                    <li ref={plane} className={styles.body}>
                        <motion.div variants={navLink} 
                                initial="hidden" animate="show" exit="exit">
                            <a href="#section-header"   onClick={handleLinkClick}  ><Text3d primary={"Home"} secondary={"Home"}  /></a>
                        </motion.div>
                    </li>
                    <li ref={plane} className={styles.body}>
                        <motion.div variants={navLink} 
                                initial="hidden" animate="show" exit="exit">
                            <a href="#section-carousel"  onClick={handleLinkClick}   ><Text3d primary={"Carousel"} secondary={"Carousel"}  /></a>
                        </motion.div>
                    </li>
                    <li ref={plane} className={styles.body}>
                        <motion.div variants={navLink} 
                                initial="hideen" animate="show" exit="exit">
                            <a href="#section-card"   onClick={handleLinkClick} ><Text3d primary={"Cards"} secondary={"bianca"}  /></a>
                        </motion.div>
                    </li>
                    <li ref={plane} className={styles.body}>
                        <motion.div variants={navLink} 
                                initial="hideen" animate="show" exit="exit">
                            <a href="#section-beneficios"  onClick={handleLinkClick}  ><Text3d primary={"Section"} secondary={"Section"}  /></a>
                        </motion.div>
                    </li>
                    
                </ul>
            </section>
        </div>
    )
}

export default NavBarNuevo;