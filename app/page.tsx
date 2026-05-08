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
       padding: '22px',
       borderRadius: '28px',
       background: 'rgba(10,15,35,0.92)',
       border: isBest
         ? '1px solid rgba(74,222,128,0.7)'
         : isFastest
         ? '1px solid rgba(56,189,248,0.7)'
         : '1px solid rgba(255,255,255,0.08)',
       boxShadow: isBest
         ? '0 0 30px rgba(74,222,128,0.18)'
         : isFastest
         ? '0 0 24px rgba(56,189,248,0.15)'
         : '0 10px 30px rgba(0,0,0,0.35)',
       marginBottom: '18px',
       width: '100%',
       boxSizing: 'border-box',
     }}
>
     {/* TOP SECTION */}
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
         {/* LOGO */}
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

         {/* NAME + TIME */}
<div
           style={{
             minWidth: 0,
           }}
>
<div
             style={{
               fontSize: 'clamp(24px, 4vw, 34px)',
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
               fontSize: 'clamp(14px, 2vw, 16px)',
               display: 'flex',
               alignItems: 'center',
               gap: '6px',
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
           minWidth: '90px',
         }}
>
<div
           style={{
             fontSize: 'clamp(30px, 5vw, 44px)',
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
               fontSize: '13px',
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
         marginTop: '22px',
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.15)',
             color: '#4ade80',
             padding: '10px 18px',
             borderRadius: '999px',
             fontSize: '14px',
             fontWeight: 700,
             border: '1px solid rgba(74,222,128,0.2)',
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
             padding: '10px 18px',
             borderRadius: '999px',
             fontSize: '14px',
             fontWeight: 700,
             border: '1px solid rgba(56,189,248,0.2)',
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
