import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string
}

export function Home() {

    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        async function getData() {
            const response = await api.get("/products")
            setProducts(response.data)
        }

        getData()
    },[])

    return (
        <div>
            
        </div>
    )
}