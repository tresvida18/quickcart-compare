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
 highestPrice
}: ProductCardProps) {
 return (
<div
     style={{
       padding: '18px',
       marginBottom: '14px',
       borderRadius: '18px',
       background: isBest
         ? 'linear-gradient(135deg,#064e3b,#022c22)'
         : '#020617',
       border: isBest
         ? '1px solid #22c55e'
         : isFastest
         ? '1px solid #38bdf8'
         : '1px solid #1e293b',
       boxShadow: isBest
         ? '0 0 18px rgba(34,197,94,0.25)'
         : 'none',

       width: '100%',
       boxSizing: 'border-box',
       overflow: 'hidden'
     }}
>
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'flex-start',
         gap: '14px',

         width: '100%',
         minWidth: 0
       }}
>
       {/* LEFT */}
<div
         style={{
           flex: 1,
           minWidth: 0
         }}
>
<div
           style={{
             fontSize: '22px',
             fontWeight: '700',
             marginBottom: '6px',
             color: 'white',

             whiteSpace: 'nowrap',
             overflow: 'hidden',
             textOverflow: 'ellipsis'
           }}
>
           {item.logo} {item.name}
</div>

<div
           style={{
             fontSize: '13px',
             color: '#cbd5e1'
           }}
>
           ⏱ {item.time} mins
</div>
</div>

       {/* RIGHT */}
<div
         style={{
           textAlign: 'right',
           flexShrink: 0
         }}
>
<div
           style={{
             fontSize: '30px',
             fontWeight: 'bold',
             color: 'white',
             lineHeight: 1
           }}
>
           ₹{item.price}
</div>

         {!isBest && (
<div
             style={{
               fontSize: '12px',
               color: '#94a3b8',
               marginTop: '6px'
             }}
>
             Save ₹{highestPrice! - item.price}
</div>
         )}
</div>
</div>

     {/* TAGS */}
<div
       style={{
         display: 'flex',
         gap: '10px',
         marginTop: '14px',
         flexWrap: 'wrap'
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.15)',
             color: '#4ade80',
             padding: '6px 10px',
             borderRadius: '999px',
             fontSize: '12px',
             fontWeight: 'bold'
           }}
>
           🔥 Best Deal
</div>
       )}

       {isFastest && (
<div
           style={{
             background: 'rgba(56,189,248,0.15)',
             color: '#38bdf8',
             padding: '6px 10px',
             borderRadius: '999px',
             fontSize: '12px',
             fontWeight: 'bold'
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
