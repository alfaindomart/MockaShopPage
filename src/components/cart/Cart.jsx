/* eslint-disable react/prop-types */
import styles from './cart.module.css'

export const Cart = ({itemsInCart}) => {

    return (
        <div className={styles.cartLayout}>
            <div className={styles.cartElement}>
                <img src="../src/assets/shopping-bag-svgrepo-com.svg" alt="" />
            </div>
            <div className={styles.cartAmount}>{itemsInCart}</div>
        </div>
    )
}