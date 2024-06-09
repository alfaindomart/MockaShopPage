/* eslint-disable react/prop-types */
import styles from "./header.module.css"
// import { Cart } from "../cart/Cart"

export const Header = ({children}) => {
    return (
        <nav id={styles.headerElement}>
            <div className={styles.headerLayout}>
                <div className="header-menu home">Home</div>
                <div className="header-menu shop">Shop</div>
                <div className="header-menu cart">{children}</div>
            </div>
        </nav>
    )
} 