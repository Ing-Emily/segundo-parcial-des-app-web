import products from '../data/products.json'

const KEY = 'productos'

export function getProducts(){

  const data = localStorage.getItem(KEY)

  if(data){

    return JSON.parse(data)

  }

  localStorage.setItem(KEY, JSON.stringify(products))

  return products

}

export function saveProducts(productos){

  localStorage.setItem(KEY, JSON.stringify(productos))

}