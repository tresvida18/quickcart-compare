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
       borderRadius: '20px',
       padding: '18px',
       marginBottom: '18px',
       boxSizing: 'border-box',
       border: isBest
         ? '1px solid rgba(74,222,128,0.35)'
         : '1px solid rgba(255,255,255,0.08)',
       overflow: 'hidden',
     }}
>
     {/* TOP */}
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         gap: '12px',
         width: '100%',
       }}
>
       {/* LEFT */}
<div
         style={{
           display: 'flex',
           alignItems: 'center',
           gap: '12px',
           minWidth: 0,
           flex: 1,
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '56px',
             height: '56px',
             borderRadius: '14px',
             objectFit: 'cover',
             flexShrink: 0,
           }}
         />

<div
           style={{
             minWidth: 0,
             overflow: 'hidden',
           }}
>
<div
             style={{
               color: 'white',
               fontSize: '22px',
               fontWeight: 800,
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
               fontSize: '13px',
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
         }}
>
<div
           style={{
             color: 'white',
             fontSize: '32px',
             fontWeight: 900,
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
               fontSize: '11px',
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
