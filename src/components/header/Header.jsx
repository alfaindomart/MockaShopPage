/* eslint-disable react/prop-types */
import styles from "./header.module.css"
import { Link } from "react-router-dom"
// import { Cart } from "../cart/Cart"

export const Header = ({children}) => {
    return (
        <nav id={styles.headerElement}>
            <div className={styles.headerLayout}>
                <Link to='home'><div className="header-menu home">Home</div></Link>
                <Link to='shop'>
                    <div className="header-menu shop">Shop</div>
                </Link>
                <Link to='checkout'>
                    <div className="header-menu cart">{children}</div>
                </Link>
            </div>
        </nav>
    )
} 