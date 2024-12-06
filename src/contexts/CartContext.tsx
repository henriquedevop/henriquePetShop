import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";

interface CartContextData {
    cart: CartProps[]
    cartAmount: number;
    addItemCart: (newitem: ProductProps) => void
    removeItemCart: (product: CartProps) => void
    total: string;
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
    const [total, setTotal] = useState("")

    function addItemCart(newitem: ProductProps) {
        const indexItem = cart.findIndex(item => item.id === newitem.id);
    
        if (indexItem !== -1) {
            const updatedCart = [...cart];
    
            updatedCart[indexItem].amount += 1;
            updatedCart[indexItem].total = updatedCart[indexItem].amount * updatedCart[indexItem].price;
    
            setCart(updatedCart);
            totalItemsCart(updatedCart)
            return;
        }
    
        const data = {
            ...newitem,
            amount: 1,
            total: newitem.price,
        };
    
        setCart([...cart, data]);
        totalItemsCart([...cart, data]) 
    }

    function removeItemCart(product: CartProps) {
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem].amount > 1) {
            let updateCart = [...cart]

            updateCart[indexItem].amount -= 1
            updateCart[indexItem].total = updateCart[indexItem].total - updateCart[indexItem].price
            setCart(updateCart)
            totalItemsCart(updateCart)
            return
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
        totalItemsCart(removeItem)
    }

    function totalItemsCart(items: CartProps[]) {
        let myCart = items
        let result = myCart.reduce((acc, item) => { return acc +  item.total},0)
        const formatedResult = result.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        })
        setTotal(formatedResult)
    }

    return (
        <CartContext.Provider 
        value={{
        cart, 
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider