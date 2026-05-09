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
       padding: '24px',
       marginBottom: '22px',
       borderRadius: '30px',
       background: 'rgba(8,15,35,0.92)',
       border: isBest
         ? '1px solid rgba(74,222,128,0.45)'
         : isFastest
         ? '1px solid rgba(56,189,248,0.45)'
         : '1px solid rgba(255,255,255,0.08)',
       boxShadow: isBest
         ? '0 0 40px rgba(74,222,128,0.15)'
         : '0 12px 35px rgba(0,0,0,0.35)',
     }}
>
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         gap: '18px',
       }}
>
       {/* LEFT */}
<div
         style={{
           display: 'flex',
           alignItems: 'center',
           gap: '18px',
           minWidth: 0,
           flex: 1,
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '80px',
             height: '80px',
             borderRadius: '24px',
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
               fontSize: 'clamp(24px, 4vw, 38px)',
               fontWeight: 800,
               color: 'white',
               lineHeight: 1.1,
             }}
>
             {item.name}
</div>

<div
             style={{
               marginTop: '10px',
               color: '#cbd5e1',
               fontSize: '16px',
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
             fontSize: 'clamp(34px, 5vw, 54px)',
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
               marginTop: '8px',
               fontSize: '14px',
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
         gap: '12px',
         flexWrap: 'wrap',
         marginTop: '24px',
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.12)',
             color: '#4ade80',
             padding: '10px 18px',
             borderRadius: '999px',
             fontSize: '14px',
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
             padding: '10px 18px',
             borderRadius: '999px',
             fontSize: '14px',
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
