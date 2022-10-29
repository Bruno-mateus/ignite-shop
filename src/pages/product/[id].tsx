
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps {
    product:{
    id: string;
    name:string;
    imgUrl:string;
    price:string;
    description:string;
    }
  }



export default function Product({product}:ProductProps){
  const {isFallback} = useRouter()
  if(isFallback){
    return <p>loading...</p>
  }
    return (
        <ProductContainer>
        <ImageContainer>
            <Image src={product.imgUrl} width={520} height={400} alt=""/>
        </ImageContainer>
  
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
  
          <p>{product.description}</p>
  
          <button>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
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
                description:product.description
            },
            revalidate:60*60*1 //1 hora
        }
    }
}