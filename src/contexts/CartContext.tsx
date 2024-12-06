import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";

interface CartContextData {
    cart: CartProps[]
    cartAmount: number;
    addItemCart: (newitem: ProductProps) => void
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({children}: CartProviderProps) {

    const [cart, setCart] = useState<CartProps[]>([])

    function addItemCart(newitem: ProductProps) {
        const indexItem = cart.findIndex(item => item.id === newitem.id)

        if(indexItem !== -1) {
            let cartList = cart

            cartList[indexItem].amount = cartList[indexItem].amount + 1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
            setCart(cartList)
            return
        }

        let data = {
            ...newitem,
            amount: 1,
            total: newitem.price,
        }
        setCart(products => [...products, data])
    }

    return (
        <CartContext.Provider 
        value={{
        cart, 
        cartAmount: cart.length,
        addItemCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider