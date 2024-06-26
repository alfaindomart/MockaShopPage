import styles from './checkout.module.css'
import { useOutletContext } from 'react-router-dom'

export const CheckOut = () => {
    
    const [inCart, setInCart] = useOutletContext()    
    const cartAmount = inCart.reduce((acc, obj) => {return acc + (obj.price * obj.amount)}, 0)
    const shippingAmount = (cartAmount > 99 || inCart.length < 1) ? 0 : 30
    return (
        <div className={styles.mainLayout}>
            <div className={styles.prodsSmmryLayout}>
                <div className={styles.prodsSmmryHeader}>
                    <h2>Your Bag ({inCart.reduce((acc, obj) => {return acc + obj.amount}, 0)})</h2>
                    <div>Share Bag</div>
                </div>
                <div className={styles.productsSummary}>
                {inCart.map(product => (
                    <div className={styles.prodElement} key={product.id}>
                        <div className={styles.prodImageWrapper}>
                            <img src={product.image} alt="" />
                        </div>
                        <div className={styles.productInfo1}>
                            <div className={styles.productTitle}>{product.title}</div>
                            <div className={styles.productPrice}>{product.price}</div>
                            <input type="number" name="" id="" />
                        </div>
                        <div className={styles.subTotal}>{product.price * product.amount}</div>
                        <button onClick={() => {setInCart(inCart.filter(prod => prod.id !== product.id))}}>X</button>
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.orderSmmryLayout}>
                <div className={styles.orderSmmryElement}>
                    <h2>Order Summary</h2>
                    <div className={styles.addVoucher}>
                        <div>add a voucher</div>
                        <button>+</button>
                    </div>
                    <div className={styles.orderAmount}>
                        <div>
                            <div>Subtotal({inCart.length})</div>
                            <div>{cartAmount}</div>
                        </div>
                        <div className={styles.shipping}>
                            <div className={styles.shippingText}>Estimated Shipping (free over $99)</div>
                            <div className={styles.shippingAmount}>{shippingAmount}</div>
                        </div>
                        <div className={styles.total}>
                            <div className={styles.totalText}>Eestimated Total</div>
                            <div className={styles.totalPrice}>{(cartAmount + shippingAmount)}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}