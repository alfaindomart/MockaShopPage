/* eslint-disable react/prop-types */
import styles from './addtocart.module.css';
import { useOutletContext } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

export const Addtocartbtn = () => {

    const currProduct = useLoaderData()
    const [inCart, setInCart] = useOutletContext()
    const [amount, setAmount] = useState(1)
    const checkDuplicate = inCart.some(prod => prod.id === currProduct.id)
    
    // console.log(amount)
    // const updatedProduct = {...currProduct, amount: amount}
    // console.log(updatedProduct)

    function addProduct() {
        if (checkDuplicate) {return setInCart(inCart.map(product => {if (product.id === currProduct.id) return {...product, amount: amount}}))}
        else return setInCart([...inCart, {...currProduct, amount: amount}])
    }
    console.log(inCart)


    return (
        <div className={styles.mainLayout}>
            <div className={styles.inputNumElement}>
                <button onClick={() => setAmount(currState => currState - 1)}>-</button>
                <input type="number" name="addAmount" id="addAmount" value={amount} onChange={e => setAmount(e.target.value)}/>
                <button onClick={() => setAmount(currState => currState + 1)}>+</button>
            </div>
            <span className={styles.btnElement}>
                <button onClick={addProduct}>Add To Cart</button>
            </span>
        </div>
    )
}