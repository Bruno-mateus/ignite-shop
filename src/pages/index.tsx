import { HomeContainer, Product } from "../styles/pages/home"

import {stripe} from '../lib/stripe'

import Image from "next/image"


import { useState } from "react"
import { GetStaticProps } from "next"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"



interface HomeProps {
  products:{
  id: string;
  name:string;
  imgUrl:string;
  price:number;
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
      price:price.unit_amount/100
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
        <Product className="keen-slider__slide" key={product.id}>
          <Image  src={product.imgUrl} width={520} height={480} alt=""/>
          <footer>
            <strong>{product.name}</strong>
            <span>{
              new Intl.NumberFormat('pt-br',{style:'currency',
                currency:'BRL'}).format(product.price)}
             </span>
          </footer>
        </Product>
      )})
    }
</HomeContainer>
  )
  
  
}

