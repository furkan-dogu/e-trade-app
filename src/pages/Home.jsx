import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  const [products, setProducts] = useState([])
  const [baskets, setBaskets] = useState([])
  
  const getProducts = async () => {
    try {
      const url = "https://dummyjson.com/products/"
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data.products)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts() 
  }, [])
  
  return (
    <div>
      <Navbar baskets={baskets} setBaskets={setBaskets} />
      <Products products={products} baskets={baskets} setBaskets={setBaskets}  />
    </div>
  )
}

export default Home