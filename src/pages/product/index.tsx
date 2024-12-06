import { useParams} from "react-router"
import { api } from "../../services/api"
import { useEffect, useState, useContext } from "react"
import { ProductProps } from "../home"
import { CartContext } from "../../contexts/CartContext"

export function Product() {
    
    const { id } = useParams()
    const [product, setProduct] = useState<ProductProps>()
    const { addItemCart } = useContext(CartContext)
    
    useEffect(() => {

        async function getData() {
            const response = await api.get(`/products/${id}`)
            setProduct(response.data)
        }
        
        getData()
    },[id])

    if(!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600 text-xl font-medium">Carregando produto...</p>
            </div>
        )
    }

    function handleAddItem(item: ProductProps) {
        addItemCart(item)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-10 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
            <img
                src={product.cover}
                alt={product.title}
                className="object-cover w-full h-96 md:h-full"
            />
            <span className="absolute top-4 left-4 bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow">
                Novo
            </span>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
                {product.title}
                </h1>
                <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                {product.description}
                </p>
            </div>

            <div className="mt-6">
                <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-green-600">
                    {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    })}
                </span>
                <button
                onClick={() => handleAddItem(product)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 shadow-lg transition-all transform hover:scale-105">
                    Adicionar ao Carrinho 
                </button>
                </div>
                <div className="mt-4 flex space-x-4">
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}