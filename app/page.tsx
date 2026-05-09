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
       item.name.toLowerCase().includes(value.toLowerCase())
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
         'radial-gradient(circle at top, #0f172a 0%, #020617 70%)',
       display: 'flex',
       justifyContent: 'center',
       padding: '20px',
       boxSizing: 'border-box',
       fontFamily: 'Arial, sans-serif',
     }}
>
<div
       style={{
         width: '100%',
         maxWidth: '700px',
         minWidth: '320px',
       }}
>
       {/* HEADER */}
<div
         style={{
           textAlign: 'center',
           marginBottom: '28px',
         }}
>
<h1
           style={{
             color: 'white',
             fontSize: '36px',
             fontWeight: 900,
             margin: 0,
             lineHeight: 1.1,
           }}
>
           ⚡ QuickCart Compare
</h1>

<p
           style={{
             color: '#94a3b8',
             marginTop: '10px',
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
             borderRadius: '14px',
             border: '1px solid #1e293b',
             background: '#020617',
             color: 'white',
             fontSize: '16px',
             boxSizing: 'border-box',
             outline: 'none',
           }}
         />

         {filteredProducts.length > 0 && (
<div
             style={{
               position: 'absolute',
               top: '105%',
               width: '100%',
               background: '#020617',
               border: '1px solid #1e293b',
               borderRadius: '14px',
               overflow: 'hidden',
               zIndex: 10,
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
                   padding: '14px',
                   color: 'white',
                   cursor: 'pointer',
                   borderBottom: '1px solid #0f172a',
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
           borderRadius: '14px',
           border: 'none',
           background: 'linear-gradient(90deg,#84cc16,#4ade80)',
           color: '#052e16',
           fontSize: '16px',
           fontWeight: 800,
           cursor: 'pointer',
           marginBottom: '24px',
         }}
>
         Compare Prices
</button>

       {/* RESULTS */}
<div
         style={{
           width: '100%',
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
