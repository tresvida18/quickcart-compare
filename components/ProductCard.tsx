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
       padding: '20px',
       marginBottom: '18px',
       borderRadius: '28px',
       background: 'rgba(10,15,35,0.88)',
       border: isBest
         ? '1px solid rgba(74,222,128,0.6)'
         : isFastest
         ? '1px solid rgba(56,189,248,0.6)'
         : '1px solid rgba(255,255,255,0.08)',
       boxShadow: isBest
         ? '0 0 30px rgba(74,222,128,0.18)'
         : '0 10px 30px rgba(0,0,0,0.35)',
       overflow: 'hidden',
     }}
>
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'flex-start',
         gap: '14px',
         flexWrap: 'wrap',
       }}
>
       {/* LEFT */}
<div
         style={{
           display: 'flex',
           gap: '14px',
           alignItems: 'center',
           flex: 1,
           minWidth: 0,
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '72px',
             height: '72px',
             borderRadius: '22px',
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
               fontSize: 'clamp(24px, 5vw, 34px)',
               fontWeight: 800,
               color: 'white',
               lineHeight: 1.1,
               wordBreak: 'break-word',
             }}
>
             {item.name}
</div>

<div
             style={{
               marginTop: '10px',
               color: '#cbd5e1',
               fontSize: 'clamp(14px, 3vw, 18px)',
               display: 'flex',
               alignItems: 'center',
               gap: '6px',
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
             fontSize: 'clamp(34px, 7vw, 52px)',
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
               color: '#cbd5e1',
               fontSize: '14px',
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
         flexWrap: 'wrap',
         gap: '12px',
         marginTop: '22px',
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.15)',
             border: '1px solid rgba(74,222,128,0.25)',
             color: '#4ade80',
             padding: '12px 18px',
             borderRadius: '999px',
             fontSize: '15px',
             fontWeight: 700,
           }}
>
           🔥 Best Deal
</div>
       )}

       {isFastest && (
<div
           style={{
             background: 'rgba(56,189,248,0.15)',
             border: '1px solid rgba(56,189,248,0.25)',
             color: '#38bdf8',
             padding: '12px 18px',
             borderRadius: '999px',
             fontSize: '15px',
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
