export function Cart() {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Carrinho 🛒</h1>
  
          <div className="grid gap-6">
            <div className="flex items-center bg-white shadow-md rounded-lg p-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Nome do Produto"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1 px-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Nome do Produto
                </h2>
                <p className="text-gray-500 mt-1">R$ 50,00</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md">
                  -
                </button>
                <span className="text-lg font-medium">1</span>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md">
                  +
                </button>
              </div>
              <p className="text-lg font-semibold text-gray-800 ml-4">
                R$ 50,00
              </p>
            </div>
            
          </div>
          
  
          <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
              <span>Total do Carrinho:</span>
              <span>R$ 150,00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  