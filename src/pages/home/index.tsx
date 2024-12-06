import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { BiCart } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router";

export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string
}

export function Home() {

    const [products, setProducts] = useState<ProductProps[]>([])
    const { addItemCart } = useContext(CartContext)

    useEffect(() => {
        async function getData() {
            const response = await api.get("/products")
            setProducts(response.data)
        }

        getData()
    },[])

    function handleAddItem(item:ProductProps) {
      addItemCart(item)
    }

    return (
        <div className="bg-gray-50 min-h-screen">
      <div className="relative bg-gradient-to-r from-orange-400 to-yellow-300 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-md">
            Cuidando dos seus Pets com 💛
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Produtos incríveis para seus melhores amigos. Descubra já!
          </p>
          <a
            href="#products"
            className="mt-6 inline-block bg-white text-orange-500 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Explore os Produtos
          </a>
        </div>
      </div>

      <div id="products" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Produtos Disponíveis 🛒
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 duration-200"
            >
              <Link to={`/product/${item.id}`}>
              <img
                alt={item.title}
                src={item.cover}
                className="w-full h-40 object-cover"
              />
              </Link>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-xl font-bold text-green-600 mt-2">
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </p>
                <button
                onClick={() => handleAddItem(item)}
                className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
                  <BiCart size={22} />
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}