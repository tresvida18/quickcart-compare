type Props = {
 item: any
 isBest: boolean
 isFastest: boolean
 highestPrice: number | null
}

export default function ProductCard({
 item,
 isBest,
 isFastest,
 highestPrice,
}: Props) {
 const savings =
   highestPrice && highestPrice > item.price
     ? highestPrice - item.price
     : 0

 return (
<div
     style={{
       background: isBest
         ? 'linear-gradient(135deg,#064e3b,#052e16)'
         : '#020617',
       border: `2px solid ${
         isBest ? '#22c55e' : '#38bdf8'
       }`,
       borderRadius: '28px',
       padding: '28px',
       marginBottom: '22px',
       boxShadow: '0 0 25px rgba(56,189,248,0.15)',
     }}
>
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'flex-start',
         gap: '20px',
       }}
>
       {/* LEFT SIDE */}
<div
         style={{
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           flex: 1,
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '90px',
             height: '90px',
             objectFit: 'contain',
             borderRadius: '22px',
             marginBottom: '14px',
           }}
         />

<h2
           style={{
             color: 'white',
             fontSize: '28px',
             fontWeight: '800',
             marginBottom: '10px',
             textAlign: 'center',
           }}
>
           {item.name}
</h2>

<div
           style={{
             color: '#cbd5e1',
             fontSize: '22px',
             textAlign: 'center',
             lineHeight: '32px',
           }}
>
           ⏱️ {item.time} mins
</div>
</div>

       {/* RIGHT SIDE */}
<div
         style={{
           textAlign: 'right',
           minWidth: '130px',
         }}
>
<div
           style={{
             color: 'white',
             fontSize: '54px',
             fontWeight: '900',
           }}
>
           ₹{item.price}
</div>

<div
           style={{
             color: '#cbd5e1',
             marginTop: '8px',
             fontSize: '20px',
           }}
>
           Save ₹{savings}
</div>
</div>
</div>

     {/* TAGS */}
<div
       style={{
         display: 'flex',
         gap: '14px',
         flexWrap: 'wrap',
         marginTop: '28px',
       }}
>
       {isBest && (
<div
           style={{
             background: '#14532d',
             color: '#4ade80',
             padding: '12px 22px',
             borderRadius: '999px',
             fontWeight: '700',
             fontSize: '18px',
           }}
>
           🔥 Best Deal
</div>
       )}

       {isFastest && (
<div
           style={{
             background: '#0c4a6e',
             color: '#38bdf8',
             padding: '12px 22px',
             borderRadius: '999px',
             fontWeight: '700',
             fontSize: '18px',
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
