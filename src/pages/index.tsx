import { styled } from "../styles"

const Button = styled("button", {
  backgroundColor:'$rocketseat',
  borderRadius:4,
  padding:"4px 8px",
  span:{
    fontWeight:'bold'
  },
  '&:hover':{
    cursor:'pointer',
  }
})

export default function Home() {



  return <Button>Sent <span>Now</span></Button>
  
}
