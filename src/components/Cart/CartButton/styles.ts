import { styled } from "../../../styles";

export const CartButtonContainer = styled('button',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:'none',
    borderRadius:6,
    position: 'relative',
    gap:'2rem',

    '&disabled':{
        opacity:0.6,
        cursor:'not-allowed'
    },

    backgroundColor:'$gray800',
    color:'$gray300',
    fontWeight:'bold',

    width:'3rem',
    height:'3rem',
    variants:{
        color:{
          gray:{
            background:'$gray900',
            color:'$white'
          },
          green:{
            background:'$green500',
            color:'$white'
          },
        
        },

    },
    defaultVariants:{
        color:'gray'
    }
})