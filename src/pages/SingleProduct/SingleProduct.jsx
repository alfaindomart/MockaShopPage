import styles from './singleproduct.module.css'
import { useLoaderData } from "react-router-dom";

import { getSingleProd } from "../../products";
import { Rating } from 'react-simple-star-rating';
import { Addtocartbtn } from '../../components/add-cart-btn/Addtocart';

export async function productLoader({params}) {
    console.log(params)
    console.log(params.id)
    const product = await getSingleProd(parseInt(params.id))
    console.log(product)
    return product   
}

export const SingleProduct = () => {

    const product = useLoaderData()

    return (
        <div className={styles.mainLayout}>
            <div className={styles.imageContainer}>
                <img src={product.image} alt={'a product picture of a ' + product.title} />
            </div>
            <div className={styles.informationLayout}>
                <h2 className={styles.productTitle}>{product.title}</h2>
                <div className={styles.productRating}>
                    <Rating 
                    initialValue={product.rating.rate}
                    onClick={function noRefCheck(){}}
                    readonly
                    size={16}
                    />
                    <div>{product.rating.count}</div>
                </div>
                <div className={styles.productDesc}>{product.description}</div>
                <Addtocartbtn currProduct={product}/>
            </div>
        </div>
    )
}

