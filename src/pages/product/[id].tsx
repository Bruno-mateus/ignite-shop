
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

import Head from "next/head"
import { useCart } from "../../hooks/useCart"
interface ProductProps {
    product:{
      id: string
      name: string
      imgUrl: string
      price:string
      numberPrice:number
      description:string
      defaultPrice:string 
    }
  }



export default function Product({product}:ProductProps){
  const {addCart,cartItems} = useCart()
  const {isFallback} = useRouter()
  if(isFallback){
    return <p>loading...</p>
  }


const itemAlreadyAddInCart = cartItems.some(item=>item.id===product.id)
    return (
      <>
        <Head>{product.name} | Ignite shop</Head>
        <ProductContainer>
        <ImageContainer>
            <Image src={product.imgUrl} width={520} height={400} alt=""/>
        </ImageContainer>
  
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
  
          <p>{product.description}</p>
  
          <button onClick={()=>addCart(product)} disabled={itemAlreadyAddInCart}>
          {itemAlreadyAddInCart?'Item ja adicionado no carrinho':'Adicionar no carrinho'}
          </button>
        </ProductDetails>
      </ProductContainer>
      </>
     
    )
}
export const getStaticPaths:GetStaticPaths = async () => {
  return{
    paths:[],
    fallback:true
  }
} 


export const getStaticProps:GetStaticProps<any, {id:string}> = async({params})=>{
    const productId = params.id
    const product = await stripe.products.retrieve(productId,{
        expand:['default_price']
    })
    const price = product.default_price as Stripe.Price

    return{
        props:{
            product:{
                id: product.id,
                name:product.name,
                imgUrl:product.images[0],
                price:new Intl.NumberFormat('pt-br',{style:'currency',
                currency:'BRL'}).format(price.unit_amount/100),
                description:product.description,
                priceId:price.id,
                numberPrice:price.unit_amount
            },
            revalidate:60*60*1 //1 hora
        }
    }
}