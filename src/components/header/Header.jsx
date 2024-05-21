import styles from "./header.module.css"

export const Header = () => {
    return (
        <span id={styles.header}>
            <div className="header-menu home">Home</div>
            <div className="header-menu shop">Shop</div>
            <div className="header-menu cart">Cart</div>
        </span>
    )
} 