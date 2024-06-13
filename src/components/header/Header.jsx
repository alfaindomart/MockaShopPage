/* eslint-disable react/prop-types */
import styles from "./header.module.css"
import { Link } from "react-router-dom"
// import { Cart } from "../cart/Cart"

export const Header = ({children}) => {
    return (
        <nav id={styles.headerElement}>
            <div className={styles.headerLayout}>
                <Link to='' className="header-menu home">Home</Link>
                <Link className="header-menu shop" to='shop'>Shop</Link>
                <Link to='checkout' className="header-menu cart">{children}</Link>
            </div>
        </nav>
    )
} 