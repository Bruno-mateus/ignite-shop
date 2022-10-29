import { HomeContainer, Product } from "../styles/pages/home"

import {stripe} from '../lib/stripe'

import Image from "next/image"


import { useState } from "react"
import { GetStaticProps } from "next"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import Link from "next/link"



interface HomeProps {
  products:{
  id: string;
  name:string;
  imgUrl:string;
  price:string;
  }[]
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
      currency:'BRL'}).format(price.unit_amount/100)
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

  return (
    
<HomeContainer ref={sliderRef} className="keen-slider">
    {
      products.map(product =>{
        return(
      <Link href={`/product/${product.id}`} key={product.id}>
        <Product className="keen-slider__slide" >
          <Image  src={product.imgUrl} width={520} height={480} alt=""/>
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      </Link>

      )})
    }
</HomeContainer>
  )
  
  
}





