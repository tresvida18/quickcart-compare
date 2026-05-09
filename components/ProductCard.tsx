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
       padding: '14px',
       marginBottom: '14px',
       borderRadius: '18px',
       background: '#081323',
       border: isBest
         ? '1px solid rgba(74,222,128,0.4)'
         : isFastest
         ? '1px solid rgba(56,189,248,0.4)'
         : '1px solid rgba(255,255,255,0.08)',
       boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
     }}
>
     {/* TOP SECTION */}
<div
       style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         gap: '12px',
       }}
>
       {/* LEFT */}
<div
         style={{
           display: 'flex',
           alignItems: 'center',
           gap: '12px',
           flex: 1,
           minWidth: 0,
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '52px',
             height: '52px',
             borderRadius: '14px',
             objectFit: 'cover',
             flexShrink: 0,
           }}
         />

<div style={{ minWidth: 0 }}>
<div
             style={{
               color: 'white',
               fontWeight: 800,
               fontSize: '22px',
               lineHeight: 1.1,
             }}
>
             {item.name}
</div>

<div
             style={{
               color: '#cbd5e1',
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
             fontWeight: 900,
             fontSize: '34px',
             lineHeight: 1,
           }}
>
           ₹{item.price}
</div>

         {isBest && (
<div
             style={{
               color: '#94a3b8',
               fontSize: '12px',
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
         gap: '8px',
         marginTop: '14px',
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.12)',
             color: '#4ade80',
             padding: '7px 12px',
             borderRadius: '999px',
             fontSize: '12px',
             fontWeight: 700,
             border: '1px solid rgba(74,222,128,0.15)',
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
             padding: '7px 12px',
             borderRadius: '999px',
             fontSize: '12px',
             fontWeight: 700,
             border: '1px solid rgba(56,189,248,0.15)',
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
