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
            console.log(products)
  }, [])

  return (
      <div>
        <h1>Welcome to the shop</h1>
        <div className="products-wrapper">
            {products && products.map(
                product => {
                <div className="fake-product" key={product.id} >
                    <img src={product.image} alt={product.description} />
                    <div>{product.title}</div>
                    <div>{product.price}</div>
                </div>}
            )}
        </div>
    </div>
  )
}