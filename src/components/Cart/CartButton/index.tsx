import { Handbag } from "phosphor-react";
import { ComponentProps } from "react";
import { CartButtonContainer } from "./styles";



type CartProps = ComponentProps<typeof CartButtonContainer>

export function CartButton({...rest}:CartProps){
    return(
        <CartButtonContainer {...rest}>
            <Handbag size={24}/>
        </CartButtonContainer>
    )
}