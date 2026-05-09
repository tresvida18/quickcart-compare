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
       width: '100%',
       padding: '20px',
       marginBottom: '16px',
       borderRadius: '20px',

       background: isBest
         ? 'linear-gradient(135deg,#064e3b,#022c22)'
         : '#020617',

       border: isBest
         ? '1px solid #22c55e'
         : isFastest
         ? '1px solid #38bdf8'
         : '1px solid #1e293b',

       boxSizing: 'border-box',

       overflow: 'hidden'
     }}
>
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'flex-start',
         width: '100%',
         gap: '20px'
       }}
>
       {/* LEFT SIDE */}
<div
         style={{
           flex: 1,
           minWidth: 0
         }}
>
<div
           style={{
             fontSize: '26px',
             fontWeight: 700,
             color: 'white',

             whiteSpace: 'nowrap',

             overflow: 'hidden',

             textOverflow: 'ellipsis',

             wordBreak: 'normal'
           }}
>
           {item.name}
</div>

<div
           style={{
             marginTop: '8px',
             fontSize: '14px',
             color: '#cbd5e1'
           }}
>
           ⏱ {item.time} mins
</div>
</div>

       {/* RIGHT SIDE */}
<div
         style={{
           textAlign: 'right',
           flexShrink: 0
         }}
>
<div
           style={{
             fontSize: '34px',
             fontWeight: 800,
             color: 'white',
             lineHeight: 1
           }}
>
           ₹{item.price}
</div>

         {!isBest && (
<div
             style={{
               marginTop: '6px',
               fontSize: '13px',
               color: '#94a3b8'
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
         marginTop: '18px',
         flexWrap: 'wrap'
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.15)',
             color: '#4ade80',

             padding: '8px 14px',

             borderRadius: '999px',

             fontSize: '13px',

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

             padding: '8px 14px',

             borderRadius: '999px',

             fontSize: '13px',

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
