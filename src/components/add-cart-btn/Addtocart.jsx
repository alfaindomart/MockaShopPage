import styles from './addtocart.module.css';
import { useOutletContext } from 'react-router-dom';

export const Addtocartbtn = () => {
    const [inCart, setInCart] = useOutletContext()
    const addProduct = () => setInCart(inCart + 1)
    return (
        <span className={styles.btnElement}>
            <button onClick={addProduct}>Add To Cart</button>
        </span>
    )
}