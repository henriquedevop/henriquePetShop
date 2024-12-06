import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
export function Cart() {

  const {cart, addItemCart, removeItemCart, total} = useContext(CartContext)

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Carrinho 🛒</h1>
  
          <div className="grid gap-6">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div className="flex items-center bg-white shadow-md rounded-lg p-4">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 px-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 mt-1">{item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                  onClick={() => removeItemCart(item)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md">
                    -
                  </button>
                  <span className="text-lg font-medium">{item.amount}</span>
                  <button
                  onClick={() => addItemCart(item)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md">
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold text-gray-800 ml-4">
                  {item.total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </p>
              </div>
              ))
            ) : (
              <span>tem nada</span>
            )}
          </div>
          
  
          <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
              <span>Total do Carrinho:</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
