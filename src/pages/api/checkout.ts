import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../contexts/CartContext";
import { stripe } from "../../lib/stripe";


export default async function  handler(req:NextApiRequest, res:NextApiResponse){

    const {products} =req.body as {products: IProduct[]}


    const successUrl=`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl=`${process.env.NEXT_URL}/`

  if(req.method!= 'POST'){
    return res.status(405).json({message:"Invalid Method"})
  }
    if(!products){
      return res.status(400).json({error:"priceId not found"})
    }

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: products.map((prodcut)=>({
          price:prodcut.defaultPrice,
          quantity:1,
        
        }))

      })
 return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })

}