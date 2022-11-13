import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ItemsList } from "../../styles/pages/success";
import { SuccessContainer } from "../../styles/pages/success";

interface SuccessProps{
    customerName:string;
    productsImages:string[]
}

export default function Success({customerName, productsImages}:SuccessProps){
    return (
        <>
         <Head>Compra efetuada | Ignite shop</Head>
         <SuccessContainer>
            <h1>Compra efetuada</h1>
            <ItemsList>
                {productsImages.map(productImage=>{
                    return (
                    <ImageContainer key={productImage}>
                        <Image src={productImage} width={120} height={110} alt=""/>
                    </ImageContainer>
                    )
                })}
            </ItemsList>
            <p>
                Uhul <strong>{customerName}</strong>, {productsImages.length>0 ? 'seus items':'seu item'} {productsImages.length>0 ? 'ja estão':'ja está'} a caminho da sua casa 
            </p>

            <Link  href="/"><p>Voltar ao catálogo</p></Link>
        </SuccessContainer>
            
        </>
       
    )
}

export const getServerSideProps:GetServerSideProps =async ({query})=>{
    if(!query.session_id){
        return{
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }
    
    
    const sessionId= String(query.session_id)
    const session = await stripe.checkout.sessions.retrieve(sessionId,{
        expand:['line_items','line_items.data.price.product']
    })
    const customerName = session.customer_details.name
   const productsImages = session.line_items.data.map(item=>{
    const product = item.price.product as Stripe.Product
    return product.images[0]
   })
    return{
        props:{
            customerName,
            productsImages
        }
    }
}