import { AppProps } from "next/app"
import { globalStyles } from "../styles/globalStyles"
import logo from '../assets/Logo.svg'
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "../components/Cart";
globalStyles();
function MyApp({ Component, pageProps }:AppProps) {


  return (
  <Container>
    <Header>
      <Link href={"/"} >
        <Image src={logo} alt="" />
      </Link>
      <Cart />
    </Header>
 
      <Component {...pageProps}/>
   
   </Container>
   )
}

export default MyApp
