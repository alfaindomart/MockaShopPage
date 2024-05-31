import styles from './shop.module.css'
import { Sidebar } from '../../components/sidebar/Sidebar';
import { useEffect, useState } from "react";

export const Shop = () => {

    const [products, setProducts] = useState([])
    
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(data => 
                {
                console.log('test')
                console.log(data)
                setProducts(data)
            })
            .catch((error) => console.error(error))
  }, [])

  return (
    <div id={styles.shop}>
        <div className="shop-header">
            <h2>Our best offer yet</h2>
            <p>dont forget to check discounts, this might be your lucky day!</p>
        </div>
        <Sidebar />
        <div className="products-wrapper">
            {products && products.map(
                product => (<div key={product.id}>
                    <img src={product.image} alt={'a product picture of a ' + product.title} />
                    <div>
                        <div className="product-title">{product.title}</div>
                        <div className="product-desc">{product.description}</div>
                    </div>
                </div>)
            )}
        </div>
    </div>
  )
}