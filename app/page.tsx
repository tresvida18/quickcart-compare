
'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/components/data/products'

export default function Home() {
 const [product, setProduct] = useState('')
 const [results, setResults] = useState<any[]>([])
 const [filteredProducts, setFilteredProducts] = useState<string[]>([])

 const comparePrices = () => {
   const found = products.find(
     (p) => p.name.toLowerCase() === product.toLowerCase()
   )

   if (!found) {
     setResults([])
     return
   }

   setResults(found.results)
   setFilteredProducts([])
 }

 const handleSearch = (value: string) => {
   setProduct(value)

   if (value.trim() === '') {
     setFilteredProducts([])
     return
   }

   const matches = products
     .filter((item) =>
       item.name.toLowerCase().startsWith(value.toLowerCase())
     )
     .map((item) => item.name)

   setFilteredProducts(matches)
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
       padding: '20px',
       fontFamily: 'Inter, sans-serif',
     }}
>
<div
       style={{
         width: '100%',
         maxWidth: '520px',
       }}
>
       {/* TOP BOX */}
<div
         style={{
           background: 'rgba(15,23,42,0.82)',
           border: '1px solid rgba(148,163,184,0.12)',
           borderRadius: '28px',
           padding: '24px',
           backdropFilter: 'blur(18px)',
           marginBottom: '24px',
           boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
         }}
>
         {/* TITLE */}
<div
           style={{
             textAlign: 'center',
             marginBottom: '24px',
           }}
>
<h1
             style={{
               fontSize: 'clamp(28px, 4vw, 48px)',
               lineHeight: 1,
               marginBottom: '10px',
               fontWeight: 900,
               color: 'white',
             }}
>
             ⚡ QuickCart Compare
</h1>

<p
             style={{
               color: '#94a3b8',
               fontSize: '14px',
             }}
>
             Compare prices instantly across apps
</p>
</div>

         {/* SEARCH */}
<div
           style={{
             position: 'relative',
             marginBottom: '16px',
           }}
>
<input
             type="text"
             value={product}
             onChange={(e) => handleSearch(e.target.value)}
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
               boxSizing: 'border-box',
             }}
           />

           {filteredProducts.length > 0 && (
<div
               style={{
                 position: 'absolute',
                 top: '105%',
                 left: 0,
                 width: '100%',
                 background: '#020617',
                 border: '1px solid #1e293b',
                 borderRadius: '14px',
                 overflow: 'hidden',
                 zIndex: 20,
               }}
>
               {filteredProducts.map((item) => (
<div
                   key={item}
                   onClick={() => {
                     setProduct(item)
                     setFilteredProducts([])
                   }}
                   style={{
                     padding: '14px 16px',
                     cursor: 'pointer',
                     borderBottom: '1px solid #0f172a',
                     color: 'white',
                   }}
>
                   {item}
</div>
               ))}
</div>
           )}
</div>

         {/* BUTTON */}
<button
           onClick={comparePrices}
           style={{
             width: '100%',
             padding: '16px',
             borderRadius: '16px',
             border: 'none',
             background: 'linear-gradient(90deg,#84cc16,#4ade80)',
             color: '#052e16',
             fontWeight: 900,
             fontSize: '16px',
             cursor: 'pointer',
           }}
>
           Compare Prices
</button>
</div>

       {/* RESULTS */}
<div>
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

