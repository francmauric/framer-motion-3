import { useRef } from "react";
import styles from "../../style/Home.module.css"

function Text3d ({primary, secondary}) {

    const text1 = useRef(null);
    const text2 = useRef(null);
    
    return (
        <div className={styles.textContainer}>
            <p className={styles.primary} ref={text1}>{primary}</p>
            <p className={styles.secondary} ref={text2} >{secondary}</p>
        </div>
    )
}

export default Text3d;