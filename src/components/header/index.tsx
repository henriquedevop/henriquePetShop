import { BiCart } from "react-icons/bi"
import { Link } from "react-router"

export function Header() {
    return (
        <header className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            Henrique Pet Shop 🐾
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-white hover:text-yellow-100 transition"
          >
            <BiCart size={28} />
            <span className="hidden sm:inline text-lg font-medium">Carrinho</span>
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">1</span>
          </Link>
        </div>
      </header>
    )
}