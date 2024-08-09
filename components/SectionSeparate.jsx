
import { useEffect,useRef, useState } from "react";
import styles from "../src/page.module.scss";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
    "./galeria/1.jpg",
    "./galeria/2.jpg",
    "./galeria/3.jpg",
    "./galeria/4.jpg",
    "./galeria/5.jpg",
    "./galeria/6.jpg",
    "./galeria/7.jpg",
    "./galeria/8.jpg",
    "./galeria/9.jpg",
    "./galeria/10.jpg",
    "./galeria/11.jpg",
    "./galeria/12.jpg",
]

function SectionSeparate () {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"]
    })
  
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0,1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0,1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0,1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0,1], [0, height * 3])

    useEffect( () => {
        const lenis = new Lenis()

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        const resize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight})
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize)
        }
    
    }, [])


    return (
        <main /* className={styles.main} */ className="z-50">
            <div className={styles.spacer}></div>
            <div ref={gallery} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>
            <div className={styles.spacer} ></div>
        </main>
    )
}

const Column = ({images, y}) => {
    return (
        <motion.div
            className={styles.column}
            style={{y}}
        >
            {
                images.map( (src, index) => {
                    return <div key={index} className={styles.imageContainer}>
                        <img 
                            src={`/images/${src}`}
                            alt='image'
                            fill="true"
                        />
                    </div>
                })
            }
        </motion.div>
    )
}




export default SectionSeparate;