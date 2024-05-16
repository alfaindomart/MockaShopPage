import { useEffect, useState } from "react";

export const ProductList = () => {

    const [products, setProducts] = useState(null)
    
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }, [])

  return (
    <div>
        {products.map(
            product => {
            <div key={product.id} >
                <img src={product.image} alt={product.description} />
                <div>{product.title}</div>
                <div>{product.price}</div>
            </div>}
        )}
    </div>
  )
}