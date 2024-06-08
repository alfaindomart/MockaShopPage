import styles from './cart.module.css'

export const Cart = () => {

    return (
        <div className={styles.cartLayout}>
            <div className={styles.cartElement}>
                <img src="../src/assets/shopping-bag-svgrepo-com.svg" alt="" />
            </div>
        </div>
    )
}