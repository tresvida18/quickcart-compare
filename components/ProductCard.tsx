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
       background: '#081223',
       borderRadius: '18px',
       padding: '16px',
       marginBottom: '16px',
       border: isBest
         ? '1px solid rgba(74,222,128,0.35)'
         : '1px solid rgba(255,255,255,0.08)',
       boxSizing: 'border-box',
       overflow: 'hidden',
     }}
>
<div
       style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         gap: '10px',
         width: '100%',
       }}
>
       {/* LEFT */}
<div
         style={{
           display: 'flex',
           alignItems: 'center',
           gap: '10px',
           flex: 1,
           minWidth: 0,
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '44px',
             height: '44px',
             borderRadius: '12px',
             objectFit: 'cover',
             flexShrink: 0,
           }}
         />

<div
           style={{
             minWidth: 0,
           }}
>
<div
             style={{
               color: 'white',
               fontSize: '18px',
               fontWeight: 700,
               lineHeight: 1.1,
               whiteSpace: 'nowrap',
               overflow: 'hidden',
               textOverflow: 'ellipsis',
             }}
>
             {item.name}
</div>

<div
             style={{
               color: '#94a3b8',
               fontSize: '11px',
               marginTop: '4px',
             }}
>
             ⏱ {item.time} mins
</div>
</div>
</div>

       {/* RIGHT */}
<div
         style={{
           textAlign: 'right',
           flexShrink: 0,
           minWidth: '70px',
         }}
>
<div
           style={{
             color: 'white',
             fontSize: '24px',
             fontWeight: 800,
             lineHeight: 1,
             whiteSpace: 'nowrap',
           }}
>
           ₹{item.price}
</div>

         {isBest && highestPrice && (
<div
             style={{
               color: '#94a3b8',
               fontSize: '10px',
               marginTop: '4px',
             }}
>
             Save ₹{highestPrice - item.price}
</div>
         )}
</div>
</div>

     {/* BADGES */}
<div
       style={{
         display: 'flex',
         flexWrap: 'wrap',
         gap: '8px',
         marginTop: '14px',
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.12)',
             color: '#4ade80',
             padding: '6px 12px',
             borderRadius: '999px',
             fontSize: '11px',
             fontWeight: 600,
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
             padding: '6px 12px',
             borderRadius: '999px',
             fontSize: '11px',
             fontWeight: 600,
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
