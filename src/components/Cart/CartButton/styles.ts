import { styled } from "../../../styles";

export const CartButtonContainer = styled('button',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:'none',
    posistion:'relative',
    borderRadius:6,
    position: 'relative',
    
    gap:'2rem',
    svg:{
      position:'absolute'
    },
    '&:disabled':{
        opacity:0.6,
        cursor:'not-allowed'
    },

   
    color:'$gray300',
    fontWeight:'bold',

    width:'3rem',
    height:'3rem',
    variants:{
        color:{
          gray:{
            background:'$gray800',
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

export const PopUp= styled('div',{
  background:'#b51818',
  fontSize:'.7rem',
  width:'1rem',
  height:'1rem',
  borderRadius:'50%',
  display:'flex',
  position:'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  top:-1,
  right:-4
})