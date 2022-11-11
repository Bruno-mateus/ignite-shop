import { globalCss } from ".";


export const globalStyles = globalCss({
    '*':{
        padding:0,
        margin:0,
        boxSizing: 'border-box'
    },
    'html,body':{
        height:'100vh'
    },
    'body':{
        backgroundColor:"$gray900",
        color:"$gray100",
        '-webkit-font-smoothing':'antialiased',
    },
    'body,input,button,textarea':{
        '-webkit-font-smoothing':'antialiased',
        fontFamily:"Roboto, sans-serif",
        fontWeight:'400'
    },
    'button':{
        '&:hover':{
            cursor: 'pointer'
        },
        '&:disabled':{
            opacity:0.6,
            cursor:'not-allowed'
        },
    }
})