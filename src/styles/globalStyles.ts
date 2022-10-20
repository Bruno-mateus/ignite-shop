import { globalCss } from ".";


export const globalStyles = globalCss({
    '*':{
        padding:0,
        margin:0,
        boxSizing: 'border-box'
    },
    'body':{
        backgroundColor:"$gray800",
        color:"$gray100",
        '-webkit-font-smoothing':'antialiased',
    },
    'body,input,button,textarea':{
        '-webkit-font-smoothing':'antialiased',
        fontFamily:"Roboto, sans-serif",
        fontWeight:'400'
    }
})