import { animate } from "framer-motion";
import { useRef, useEffect } from "react";
import styles from '../src/page.module.css'

function HeaderPresentacion () {
    const container = useRef(null);
    const stickyMask = useRef(null);

    const initialMaskSize = .8;
    const targetMaskSize = 30;
    const easing = 0.15;
    let easedScrollProgress = 0;

    useEffect( () => {
        requestAnimationFrame(animate)
    }, [])

    const animate = () => {
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
        requestAnimationFrame(animate)
    }

    const getScrollProgress = () => {
        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress
    }
    

    return (
        <main className={styles.main}>
            <div ref={container} className={styles.container}>
                <div ref={stickyMask} className={styles.stickyMask}>
                    <video autoPlay muted loop >
                        <source src="/medias/compumen.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
           {/*  <div className="bg-slate-500 ">
                <h1 className="text-5xl ">

                header para mostrar
                </h1>
            </div> */}
        </main>
    )
}

export default HeaderPresentacion;