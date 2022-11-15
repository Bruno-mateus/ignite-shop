import { Handbag } from "phosphor-react";
import { ComponentProps, useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CartButtonContainer, PopUp } from "./styles";

interface PopUpProps extends CartProps { 
    hasPopUp: boolean;
}

type CartProps = ComponentProps<typeof CartButtonContainer>

export function CartButton({...rest}:PopUpProps){
    const {cartItems} = useContext(CartContext)
    const {hasPopUp} = rest
    return(
        hasPopUp?(
        <CartButtonContainer {...rest}>
            <Handbag size={24}/>
            <PopUp>{cartItems.length}</PopUp>
        </CartButtonContainer>
        ):(
        <CartButtonContainer {...rest}>
            <Handbag size={24}/>
        </CartButtonContainer>
        )
    )
}