import styles from './home.module.css'
import { Link } from "react-router-dom";

export const Home = () => {

    return (
    <div className={styles.mainLayout}>
        <div className={styles.heroImage}>
            <div className={styles.imageInner}>
                <div className={styles.heroContent}>
                    <h2>Bold in Red</h2>
                    <p>Creating a quality experience and little compromise. Mockad, now with 100% Lencet. Lighter, still durable.</p>
                    <Link to="shop">Shop Now</Link>
                </div>
            </div>
        </div>
        <div className={styles.homeCategories} >
            <button>Men</button>
            <button>Women</button>
            <button>Children</button>
        </div>
    </div>
    )
}