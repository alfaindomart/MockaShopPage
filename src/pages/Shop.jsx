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
      <div>
        <h1>Welcome to the shop</h1>
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