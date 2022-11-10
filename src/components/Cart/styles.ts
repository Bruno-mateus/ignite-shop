import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog'

export const CartContent = styled(Dialog.Content,{
    position:'fixed',
    top:0,
    right:0 ,
    display: 'flex',
    gap:'2rem',
    textAlign:'left',
    bottom:0,
 

    h2:{
        fontSize:'$lg',
        fontWeight:'bold',
    
    },
    width: '25rem',
    backgroundColor:'$gray800',
    padding:'1.5rem',
    paddingTop:'4.5rem',
    boxShadow:"-4px 0px 30px rgba(0,0,0,0.8)",

    flexDirection:'column'
})

export const CartClose = styled(Dialog.Close,{
    background:'none',
    border:'none',
    color:'$gray500',
    position:"absolute",
    top:'1.75rem',
    right: "1.75rem"
})
export const InfoOrder = styled('footer',{
    display:'flex',
    flexDirection:'column',
    marginTop: "auto",
    gap:'.5rem',

    span:{
        display:'flex' ,
        justifyContent:'space-between',
        alignItems:"center"
    },
    strong:{
        display:'flex' ,
        justifyContent:'space-between',
        alignItems:"center"
    },
    button:{
        width: "100%",
        height:70,
        backgroundColor:'$green500',
        color:'$white',
        fontWeight:'bold',
        fontSize:'1.1rem',
        border:'none',
        borderRadius:'8px'
    }

})

export const CartItems = styled('main',{
    display: 'flex',
    flexDirection: 'column',
    gap:'2rem',

    textAlign:'left',
    overflowY:"scroll",
    '&::-webkit-scrollbar':{
        width:5 ,
        borderRadius:'10px'
    },

    '&::-webkit-scrollbar-thumb':{
        backgroundColor:"$gray900"
    }
})

export const CartItem = styled('div',{
    display: 'flex',
    gap:'1.25rem',
    img:{
        borderRadius:'8px',
        objectFit:'cover',
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    },
    div:{
        display: 'flex',
        span:{
            color:'$gray500'
        },
        strong:{
            color:'$white'
        },
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        button:{
            color:'$green500',
            background: 'transparent',
            border:'none',
            fontWeight:'bold',

        }
    }
})


