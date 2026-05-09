type ProductCardProps = {
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
}: ProductCardProps) {
 return (
<div
     style={{
       width: '100%',
       boxSizing: 'border-box',
       padding: '16px',
       marginBottom: '16px',
       borderRadius: '20px',
       background: '#081223',
       border: isBest
         ? '1px solid rgba(74,222,128,0.4)'
         : isFastest
         ? '1px solid rgba(56,189,248,0.4)'
         : '1px solid rgba(255,255,255,0.08)',
       boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
     }}
>
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         gap: '16px',
       }}
>
       {/* LEFT SIDE */}
<div
         style={{
           display: 'flex',
           alignItems: 'center',
           gap: '14px',
           flex: 1,
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '58px',
             height: '58px',
             borderRadius: '14px',
             objectFit: 'cover',
             flexShrink: 0,
           }}
         />

<div>
<div
             style={{
               color: 'white',
               fontWeight: 800,
               fontSize: '22px',
               lineHeight: '24px',
             }}
>
             {item.name}
</div>

<div
             style={{
               color: '#94a3b8',
               fontSize: '13px',
               marginTop: '6px',
             }}
>
             ⏱ {item.time} mins
</div>
</div>
</div>

       {/* RIGHT SIDE */}
<div
         style={{
           textAlign: 'right',
           flexShrink: 0,
         }}
>
<div
           style={{
             color: 'white',
             fontWeight: 900,
             fontSize: '30px',
             lineHeight: 1,
           }}
>
           ₹{item.price}
</div>

         {isBest && (
<div
             style={{
               color: '#94a3b8',
               fontSize: '11px',
               marginTop: '4px',
             }}
>
             Save ₹{highestPrice! - item.price}
</div>
         )}
</div>
</div>

     {/* BADGES */}
<div
       style={{
         display: 'flex',
         flexWrap: 'wrap',
         gap: '10px',
         marginTop: '16px',
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.12)',
             color: '#4ade80',
             padding: '8px 14px',
             borderRadius: '999px',
             fontSize: '12px',
             fontWeight: 700,
           }}
>
           🔥 Best Deal
</div>
       )}

       {isFastest && (
<div
           style={{
             background: 'rgba(56,189,248,0.12)',
             color: '#38bdf8',
             padding: '8px 14px',
             borderRadius: '999px',
             fontSize: '12px',
             fontWeight: 700,
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
