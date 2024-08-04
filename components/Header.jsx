
import { motion, useScroll, useTransform } from "framer-motion";
import "../style/Header.css"
import { useEffect, useRef } from "react";

function Header () {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 300],[1,10]);
    const y = useTransform(scrollY, [0,300], [0, -150]);

    const mainContentRef = useRef(null);

    useEffect(() => {
       const unsubscribeY = scrollY.on("change", (latest) => {

           if (mainContentRef.current) {
               mainContentRef.current.style.transform = `translateY(${scrollY.get() * 0.5}px)`;
           }
       });
       return () => unsubscribeY();
    },[scrollY]);

    return (
       <header className="relative h-screen flex  bg-gray-100 overflow-hidden">
            <motion.div 
                className="logo bg-blue-500 text-white flex items-center justify-center rouded-full overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{scale, y}}
                >
                <div className="content text-4xl font-bold">
                    <h1 className="">Logo</h1>
                </div>
            </motion.div>
            <div ref={mainContentRef} className="absolute top-full w-full h-screen bg-white flex items-center justify-center">
                    <p className="text-2xl ">Contenido del sitio Web</p>

            </div>
       </header>
    )
}

export default Header;