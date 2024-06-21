import React from "react";
import styles from "./Button.css"

function Button ({children}) {
    return <Button className={styles.Button}>{children}</Button>
}

export default Button;