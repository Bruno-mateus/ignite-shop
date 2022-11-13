import { Handbag } from "phosphor-react";
import { ComponentProps } from "react";
import { CartButtonContainer, PopUp } from "./styles";

interface PopUpProps extends CartProps { 
    hasPopUp: boolean;
}

type CartProps = ComponentProps<typeof CartButtonContainer>

export function CartButton({...rest}:PopUpProps){
    const {hasPopUp} = rest
    return(
        hasPopUp?(
        <CartButtonContainer {...rest}>
            <Handbag size={24}/>
            <PopUp>0</PopUp>
        </CartButtonContainer>
        ):(
        <CartButtonContainer {...rest}>
            <Handbag size={24}/>
        </CartButtonContainer>
        )
    )
}