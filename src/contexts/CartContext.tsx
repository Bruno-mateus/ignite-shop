import { createContext, ReactNode, useContext, useState } from "react"


export interface IProduct{
    id: string
    name: string
    imgUrl: string
    price:string
    numberPrice:string
    description:string
    defaultPrice:string 
}

interface ContextData{
    cartItems:IProduct[]
    addCart:(product:IProduct) => void
    checkItemAlreadyExists:(productId:string) =>boolean
}

interface CartContextProviderProps{
    children:ReactNode
}

 
export const CartContext = createContext({}as ContextData)


export function CartContextProvider({children}:CartContextProviderProps){
    const [cartItems,setCartItems] = useState<IProduct[]>([])
    
    function addCart(product:IProduct){
        setCartItems(state=>[...state,product])
    }
    
    function checkItemAlreadyExists(productId:string){
        return cartItems.some(item=>item.id === productId)
    }
    return(
        <CartContext.Provider value={{cartItems,addCart,checkItemAlreadyExists}}>
            {children}
        </CartContext.Provider>
    )
}