import styles from './checkout.module.css'
import { useOutletContext } from 'react-router-dom'

export const CheckOut = () => {
    const [inCart] = useOutletContext()    
    return (
        <div className={styles.mainLayout}>
            <div className={styles.prodsSmmryLayout}>
                <div className={styles.prodsSmmryHeader}>
                    <h2>Your Bag ({inCart.length})</h2>
                    <div>Share Bag</div>
                </div>
            </div>
            <div className={styles.productsSummary}>
                {inCart.map(product => (
                    <div className={styles.prodElement} key={product.id}>
                        <div className={styles.prodImageWrapper}>
                            <img src={product.image} alt="" />
                        </div>
                        <div className={styles.productTitle}>{product.title}</div>
                        <div className={styles.productPrice}>{product.price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}