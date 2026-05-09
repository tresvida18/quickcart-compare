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
       padding: '18px',
       marginBottom: '18px',
       borderRadius: '24px',
       background: 'rgba(8,15,35,0.92)',
       border: isBest
         ? '1px solid rgba(74,222,128,0.45)'
         : isFastest
         ? '1px solid rgba(56,189,248,0.45)'
         : '1px solid rgba(255,255,255,0.08)',
       boxShadow: isBest
         ? '0 0 24px rgba(74,222,128,0.12)'
         : '0 10px 28px rgba(0,0,0,0.35)',
     }}
>
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         gap: '14px',
       }}
>
       {/* LEFT SIDE */}
<div
         style={{
           display: 'flex',
           alignItems: 'center',
           gap: '14px',
           flex: 1,
           minWidth: 0,
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '58px',
             height: '58px',
             borderRadius: '18px',
             objectFit: 'cover',
             flexShrink: 0,
           }}
         />

<div style={{ minWidth: 0 }}>
<div
             style={{
               fontSize: 'clamp(18px, 2vw, 28px)',
               fontWeight: 800,
               color: 'white',
               lineHeight: 1.1,
             }}
>
             {item.name}
</div>

<div
             style={{
               marginTop: '6px',
               color: '#cbd5e1',
               fontSize: '14px',
             }}
>
             ⏱ {item.time} mins
</div>
</div>
</div>

       {/* PRICE */}
<div
         style={{
           textAlign: 'right',
           flexShrink: 0,
         }}
>
<div
           style={{
             fontSize: 'clamp(24px, 3vw, 38px)',
             fontWeight: 900,
             color: 'white',
             lineHeight: 1,
           }}
>
           ₹{item.price}
</div>

         {isBest && (
<div
             style={{
               marginTop: '6px',
               fontSize: '12px',
               color: '#94a3b8',
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
         gap: '10px',
         flexWrap: 'wrap',
         marginTop: '18px',
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.12)',
             color: '#4ade80',
             padding: '8px 14px',
             borderRadius: '999px',
             fontSize: '13px',
             fontWeight: 700,
             border: '1px solid rgba(74,222,128,0.18)',
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
             fontSize: '13px',
             fontWeight: 700,
             border: '1px solid rgba(56,189,248,0.18)',
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
