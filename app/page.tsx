'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function Home() {
 const [product, setProduct] = useState('')
 const [results, setResults] = useState<any[]>([])

 const productsData = [
   {
     name: 'apple',
     blinkit_price: 130,
     blinkit_time: 12,
     zepto_price: 131,
     zepto_time: 12,
     instamart_price: 168,
     instamart_time: 14
   },
   {
     name: 'almond',
     blinkit_price: 711,
     blinkit_time: 12,
     zepto_price: 718,
     zepto_time: 13,
     instamart_price: 760,
     instamart_time: 16
   },
   {
     name: 'milk',
     blinkit_price: 73,
     blinkit_time: 12,
     zepto_price: 75,
     zepto_time: 12,
     instamart_price: 72,
     instamart_time: 14
   }
 ]

 const comparePrices = () => {
   const found = productsData.find(
     (p) => p.name.toLowerCase() === product.toLowerCase()
   )

   if (!found) {
     setResults([])
     return
   }

   const formattedResults = [
     {
       name: 'Blinkit',
       logo: '/logos/blinkit.png',
       price: found.blinkit_price,
       time: found.blinkit_time
     },
     {
       name: 'Zepto',
       logo: '/logos/zepto.png',
       price: found.zepto_price,
       time: found.zepto_time
     },
     {
       name: 'Instamart',
       logo: '/logos/instamart.png',
       price: found.instamart_price,
       time: found.instamart_time
     }
   ]

   setResults(formattedResults)
 }

 const highestPrice =
   results.length > 0
     ? Math.max(...results.map((item) => item.price))
     : null

 const lowestPrice =
   results.length > 0
     ? Math.min(...results.map((item) => item.price))
     : null

 const fastestTime =
   results.length > 0
     ? Math.min(...results.map((item) => item.time))
     : null

 return (
<main
     style={{
       minHeight: '100vh',
       background:
         'radial-gradient(circle at top, #0f172a 0%, #020617 60%)',

       display: 'flex',
       justifyContent: 'center',
       alignItems: 'flex-start',

       padding: '24px',

       fontFamily: 'Inter, sans-serif',
       boxSizing: 'border-box'
     }}
>
<div
       style={{
         width: '100%',
         maxWidth: '520px',

         background: 'rgba(15,23,42,0.92)',

         border: '1px solid rgba(148,163,184,0.15)',

         borderRadius: '28px',

         padding: '24px',

         boxSizing: 'border-box'
       }}
>
<div
         style={{
           textAlign: 'center',
           marginBottom: '24px'
         }}
>
<h1
           style={{
             fontSize: '42px',
             lineHeight: '44px',
             marginBottom: '10px',
             fontWeight: 800,
             color: 'white'
           }}
>
           ⚡ QuickCart Compare
</h1>

<p
           style={{
             color: '#94a3b8',
             fontSize: '15px'
           }}
>
           Compare prices instantly across apps
</p>
</div>

<input
         type="text"
         value={product}
         onChange={(e) => setProduct(e.target.value)}
         placeholder="Search groceries..."
         style={{
           width: '100%',
           padding: '16px',

           borderRadius: '16px',

           border: '1px solid #1e293b',

           background: '#020617',

           color: 'white',

           fontSize: '15px',

           outline: 'none',

           marginBottom: '18px',

           boxSizing: 'border-box'
         }}
       />

<button
         onClick={comparePrices}
         style={{
           width: '100%',
           padding: '16px',

           borderRadius: '16px',

           border: 'none',

           background:
             'linear-gradient(90deg,#84cc16,#4ade80)',

           color: '#052e16',

           fontWeight: 800,

           fontSize: '16px',

           cursor: 'pointer',

           marginBottom: '24px'
         }}
>
         Compare Prices
</button>

<div
         style={{
           width: '100%'
         }}
>
         {results.map((item) => (
<ProductCard
             key={item.name}
             item={item}
             isBest={item.price === lowestPrice}
             isFastest={item.time === fastestTime}
             highestPrice={highestPrice}
           />
         ))}
</div>
</div>
</main>
 )
}
