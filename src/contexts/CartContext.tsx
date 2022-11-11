import { createContext, ReactNode, useState } from "react"


export interface IProduct{
    id: string
    name: string
    imgUrl: string
    price:string
    numberPrice:number
    description:string
    defaultPrice:string 
}

interface ContextData{
    cartItems:IProduct[]
    addCart:(product:IProduct) => void

    cartTotal:number
    removeItemCart:(product:IProduct) => void
}

interface CartContextProviderProps{
    children:ReactNode
}

 
export const CartContext = createContext({}as ContextData)


export function CartContextProvider({children}:CartContextProviderProps){
    const [cartItems,setCartItems] = useState<IProduct[]>([])
    
    const cartTotal = cartItems.reduce((acc, item) =>{
        console.log(item.numberPrice)
       return acc + item.numberPrice
    },0)
    function addCart(product:IProduct){
        setCartItems(state=>[...state,product])
        console.log(product)
    }

    function removeItemCart(product:IProduct){
        setCartItems(state=>state.filter(item=> item.id != product.id))
    }
    

    return(
        <CartContext.Provider value={{cartItems,addCart,cartTotal,removeItemCart}}>
            {children}
        </CartContext.Provider>
    )
}