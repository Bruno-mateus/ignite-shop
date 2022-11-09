import { CartButton } from "./CartButton";
import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContent, CartItem, CartItems, InfoOrder } from "./styles";
import {X} from 'phosphor-react'
import Image from "next/image";
import camisa from '../../assets/camisa.webp'


export function Cart(){
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton/>
            </Dialog.Trigger>

            <Dialog.Portal>
                   <CartContent>
                        <CartClose>
                            <X size={24} weight={'bold'}/>
                        </CartClose>
                        <h2>Sacola de produtos</h2>
                        <CartItems>
   
                             {/* {
                            <p>
                                Parece que seu carrinho está vazio :(
                            </p>
                            }   */}
                            <CartItem>
                                <Image src={camisa} alt="" width={90} height={90}/>
                                <div>
                                   <span>Camiseta Man City 2022</span> 
                                   <strong>199,00</strong>
                                   <button>Remover</button>
                                </div>
                            </CartItem>

                        </CartItems>
  
                       
                            <InfoOrder>
                                <span>
                                    <small>Quantidade</small>{' '}
                                    <small>3 itens</small>
                                </span>
                                <strong>
                                    <span>Valor total</span>{' '}
                                    <span>R$ 200,00</span>
                                </strong>
                                <button>Finalizar compra</button>
                            </InfoOrder>
                       
                   </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}