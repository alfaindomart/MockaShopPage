
export async function getProducts() {
    return fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .catch((error) => console.error(error))
}