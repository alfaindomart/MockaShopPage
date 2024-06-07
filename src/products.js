
export async function getProducts() {
    return fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(data => data)
    .catch((error) => console.error(error))
}