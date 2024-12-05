import { RouterProvider } from "react-router"
import { router } from "./routes/router"
import CartProvider from "./contexts/CartContext"

function App() {
  return (
    <>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
    </>
  )
}

export default App
