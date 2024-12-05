import { useEffect, useState } from "react"
import { api } from "./services/api"

interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string
}

function App() {

  const [products, setProducts] = useState<ProductsProps[]>([])

  useEffect(() => {
    async function getData() {
      const response = await api.get("/products")
      setProducts(response.data)
    }
    getData()
  },[])

  return (
    <div className="w-full h-screen bg-black">
      <h1 className="text-white">teste</h1>
    </div>
  )
}

export default App
