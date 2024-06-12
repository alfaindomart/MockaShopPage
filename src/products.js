
export async function getProducts() {
    return fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(data => data)
    .catch((error) => console.error(error))
}

export async function getSingleProd(id) {
    const products = await getProducts()
    const product = products.find(product => product.id === id)
    return product   
}