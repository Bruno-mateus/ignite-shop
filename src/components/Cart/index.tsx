import { CartButton } from "./CartButton";
import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContent, CartItem, CartItems, InfoOrder } from "./styles";
import {X} from 'phosphor-react'
import Image from "next/image";

import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import axios from "axios";
import { PopUp } from "./CartButton/styles";


export function Cart(){

    const {cartItems,cartTotal,removeItemCart} = useCart()

    const [isCreatingCheckoutSession,setIsCreatingCheckoutSession] = useState(false)

    async function handleCheckout(){
        try{
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout',{
                products:cartItems
            })
            const {checkoutUrl} = response.data

            window.location.href=checkoutUrl
        }catch(err){
            
            setIsCreatingCheckoutSession(false)
            alert("Falha ao rediricionar ao carrinho, tente novamente mais tarde")
        }
    }
    return (
        <Dialog.Root>
      
            <Dialog.Trigger asChild>
            
              
                   
                <CartButton hasPopUp/>
            </Dialog.Trigger>

            <Dialog.Portal>
                   <CartContent>
                        <CartClose>
                            <X size={24} weight={'bold'}/>
                        </CartClose>
                        <h2>Sacola de produtos</h2>
                        <CartItems>
                            {
                                cartItems.length<1?                           
                            <p>
                                Parece que seu carrinho está vazio 🙁
                            </p>:(                         
                                cartItems.map(item=>{
                                    return(
                                        <CartItem key={item.id}>
                                        <Image src={item.imgUrl} alt="" width={90} height={90}/>
                                        <div>
                                           <span>{item.name}</span> 
                                           <strong>{item.price}</strong>
                                           <button
                                            onClick={()=>removeItemCart(item)}
                                           >Remover</button>
                                        </div>
                                    </CartItem>
                                    )
                                })
                            )
                            }
                        </CartItems>
  
                       
                            <InfoOrder>
                                <span>
                                    <small>Quantidade</small>{' '}
                                    <small>{cartItems.length>1?`${cartItems.length} itens`:`${cartItems.length} item`}</small>
                                </span>
                                <strong>
                                    <span>Valor total</span>{' '}
                                    <span>{
                                    new Intl.NumberFormat('pt-br',{style:'currency',
                                         currency:'BRL'}).format(cartTotal/100)
                                         }</span>
                                </strong>
                                <button onClick={handleCheckout} disabled={isCreatingCheckoutSession || cartItems.length <= 0}>Finalizar compra</button>
                            </InfoOrder>
                       
                   </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}