import { motion } from "framer-motion";


function NavBarNuevo ({setIsOpen}) {
   

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
                        <motion.div key={i} className="w-full h-full bg-[#00771c] " 
                            variants={children} initial="hidden" 
                            animate="show" exit="exit" custom={i} ></motion.div>
                    ))
                }
            </div>
            <section className="w-full h-full absolute inset-0 flex justify-center items-center z-30">
                <ul className="w-[900px] leading-none " > 
                    <li className="overflow-hidden">
                        <motion.div variants={navLink} 
                                initial="hidden" animate="show" exit="exit">
                            <a href="#section-header" className="text-[80px] hover:text-[#eaeaea] "  onClick={handleLinkClick}  >ART</a>
                        </motion.div>
                    </li>
                    <li className="overflow-hidden">
                        <motion.div variants={navLink} 
                                initial="hidden" animate="show" exit="exit">
                            <a href="#section-carousel" className="text-[80px] hover:text-[#eaeaea] " onClick={handleLinkClick}   >CAROUSEL</a>
                        </motion.div>
                    </li>
                    <li className="overflow-hidden">
                        <motion.div variants={navLink} 
                                initial="hideen" animate="show" exit="exit">
                            <a href="#section-card" className="text-[80px] hover:text-[#eaeaea] "  onClick={handleLinkClick} >CARDS</a>
                        </motion.div>
                    </li>
                    <li className="overflow-hidden">
                        <motion.div variants={navLink} 
                                initial="hideen" animate="show" exit="exit">
                            <a href="#section-beneficios" className="text-[80px] hover:text-[#eaeaea] " onClick={handleLinkClick}  >SECTIONS</a>
                        </motion.div>
                    </li>
                    
                </ul>
            </section>
        </div>
    )
}

export default NavBarNuevo;