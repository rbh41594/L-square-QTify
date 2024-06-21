import React from "react";
import styles from "./Button.css"

function Button ({children}) {
    return <button className={styles.Button}>{children}</button>
}

export default Button;