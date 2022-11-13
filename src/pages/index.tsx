import { HomeContainer, Product } from "../styles/pages/home"

import {stripe} from '../lib/stripe'

import Image from "next/image"



import { GetStaticProps } from "next"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import Link from "next/link"
import Head from "next/head"
import { CartButton } from "../components/Cart/CartButton"
import { IProduct } from "../contexts/CartContext"
import {useCart} from '../hooks/useCart'


interface HomeProps {
  products:IProduct[];
}


export const getStaticProps:GetStaticProps = async ()=>{
  const response = await stripe.products.list({
    expand:['data.default_price']
  })
  const products = response.data.map(product=>{
    const price = product.default_price as Stripe.Price
    return{
      id: product.id,
      name:product.name,
      imgUrl:product.images[0],
      price:new Intl.NumberFormat('pt-br',{style:'currency',
      currency:'BRL'}).format(price.unit_amount/100),
      numberPrice:price.unit_amount,
      defaultPrice:price.id
    }
  })
  return {
    props:{
      products
    },
    revalidate:60*60*2 //2 horas
  }
} 

export default function Home({products}:HomeProps) {


const [sliderRef] = useKeenSlider({
  slides:{
    perView:2.7,
    spacing:48
  }
})
const {addCart,cartItems} = useCart()

function handleItem(e: React.MouseEvent<HTMLButtonElement>,product:IProduct){
  e.preventDefault()

  addCart(product)
}

  return (
    <>
    <Head>Home | Ignite shop</Head>
    <HomeContainer ref={sliderRef} className="keen-slider">
    {
      products.map(product =>{
        return(
      <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
        <Product className="keen-slider__slide" >
          <Image  src={product.imgUrl} width={520} height={480} alt=""/>
          <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>

            <CartButton hasPopUp={false} color={'green'} onClick={(e)=>handleItem(e,product)} disabled={cartItems.some(item=>item.id===product.id)}/>
            {cartItems.some(item=>item.id===product.id)&&<small>Item ja adicionado</small>}
           
          </footer>
         
        </Product>
      </Link>

      )})
    }
  </HomeContainer>
</>

  )
  
  
}





