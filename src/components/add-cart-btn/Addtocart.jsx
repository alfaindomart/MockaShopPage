/* eslint-disable react/prop-types */
import styles from './addtocart.module.css';
import { useOutletContext } from 'react-router-dom';

export const Addtocartbtn = ({currProduct}) => {
    const [inCart, setInCart] = useOutletContext()
    const addProduct = () => {
        console.log(currProduct)
        setInCart([...inCart, currProduct])
        console.log(inCart)
    }
    return (
        <div className={styles.mainLayout}>
            <div className={styles.inputNumElement}>
                <button>-</button>
                <input type="number" name="addAmount" id="addAmount" />
                <button>+</button>
            </div>
            <span className={styles.btnElement}>
                <button onClick={addProduct}>Add To Cart</button>
            </span>
        </div>
    )
}