import {styled} from '..'

export const SuccessContainer = styled('main',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin: '0 auto',
    height: '100%',
    padding:'1rem',
    h1:{
        fontSize:'$2xl',
        color:'$gray100'
    },
    p:{
        fontSize:'',
        color:"$gray300",
        maxWidth:560,
        textAlign: 'center',
        marginTop:'4rem',
        lineHeight:'1.4'
     
    },
    a:{
        display:'block',
        marginTop:'3rem',
        fontSize:'', 
        fontWeight:'bold',
        textDecoration:'none',
        color:'$green300',
        '&:hover':{
            color:'$green500'
        }
    }
})

export const ItemsList  = styled('div',{
    display:'flex',
    position:'relative',
    'div + div':{
        marginLeft:'-3rem',
        zIndex:2
      },
    

})

export const ImageContainer = styled('div',{
    width: '100%',
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
    maxWidth:120,
    height:120,
    background:'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    
    padding:'0.25rem',
    marginTop:'4rem',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',

    borderRadius:'50%',
    img:{
        objectFit:'cover',
       
    }
})