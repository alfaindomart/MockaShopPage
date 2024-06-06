import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './shop.module.css'
import { Sidebar } from '../../components/sidebar/Sidebar';
import { getProducts } from '../../products';

import { Rating } from 'react-simple-star-rating';


export const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
    console.log(getProducts())
    getProducts().then(data => {
            console.log(data)
            setProducts(data)
        })
    }, [])
    
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products?limit=10')
//             .then(res => res.json())
//             .then(data => 
//                 {
//                 console.log('test')
//                 console.log(data)
//                 setProducts(data)
//             })
//             .catch((error) => console.error(error))
//   }, [])

  return (
    <div id={styles.shop}>
        <div className={styles.shopHeader}>
            <h2>Our best offer yet</h2>
            <p>dont forget to check discounts, this might be your lucky day!</p>
        </div>
        <div className={styles.shopContent}>
            <Sidebar />
            <div className={styles.productsWrapper}>
                {products && products.map(
                    product => (
                    <div key={product.id} className={styles.productLayout}>
                        <div className={styles.productElement}>
                            <div className={styles.prodImageWrapper}>
                                <img src={product.image} alt={'a product picture of a ' + product.title} />
                            </div>
                            <div className={styles.prodContents}>
                                <Link to={`shop/product/${product.id}`} className={styles.productTitle}>{product.title}</Link>
                                <div className={styles.productDesc}>{'$' + product.price}</div>
                                <div className={styles.productRating}>
                                    <div className={styles.ratingStar}>
                                        <Rating initialValue={product.rating.rate}
                                        onClick={function noRefCheck(){}}
                                        readonly
                                        size={16}
                                        />    
                                    </div>
                                    <div>({product.rating.count})</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                )}
            </div>
        </div>
    </div>
  )
}