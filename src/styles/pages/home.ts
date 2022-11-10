import { styled, theme } from "..";


export const HomeContainer = styled('main',{
    display:'flex',
    // gap:'3rem',
   
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft:'auto',
    minHeight:656,
    padding:'2rem',

})


export const Product = styled('a',{
    background:'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius:8,
    // padding:'0.25rem',
    cursor:'pointer',
    position:'relative',
 
    height:'100%' ,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    img:{
        objectFit:'cover',
    },
    '&:hover':{
        footer:{
            opacity:'1',
            visibility: 'visible',
            transform: 'translateY(0)'
        }
      },
    footer:{
       
        position:'absolute',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor:'rgba(0,0,0,.6)',
        transform:'translateY(110%)',
        opacity:'0' ,
        visibility:'hidden',
        transition: 'all 0.2s ease-in-out',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding:'2rem',
        small:{
            position:'absolute',  
            right: '2rem'  ,
            top: '5.6rem',
            color:'red'
        },
        span:{
            color:"$green500"
        },
        div:{
            display: 'flex',
            flexDirection: 'column',
            gap:'.25rem',
            span:{
                fontSize: '$lg',
                fontWeight: 'bold'
            }
        }
 
    }
})

