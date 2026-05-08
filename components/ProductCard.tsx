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
       marginBottom: '18px',
       borderRadius: '30px',
       background: 'rgba(15,23,42,0.88)',
       border: isBest
         ? '1px solid rgba(34,197,94,0.55)'
         : isFastest
         ? '1px solid rgba(56,189,248,0.45)'
         : '1px solid rgba(255,255,255,0.06)',
       boxShadow: isBest
         ? '0 0 40px rgba(34,197,94,0.18)'
         : '0 12px 40px rgba(0,0,0,0.45)',
       backdropFilter: 'blur(18px)',
       WebkitBackdropFilter: 'blur(18px)',
       transition: 'all 0.3s ease',
     }}
>
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'flex-start',
         gap: '14px',
       }}
>
       {/* LEFT SIDE */}
<div
         style={{
           display: 'flex',
           gap: '16px',
           alignItems: 'center',
         }}
>
         {/* LOGO */}
<div
           style={{
             width: '72px',
             height: '72px',
             borderRadius: '22px',
             overflow: 'hidden',
             background: 'white',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             flexShrink: 0,
           }}
>
<img
             src={item.logo}
             alt={item.name}
             style={{
               width: '100%',
               height: '100%',
               objectFit: 'cover',
             }}
           />
</div>

         {/* NAME + TIME */}
<div>
<div
             style={{
               fontSize: '28px',
               fontWeight: '800',
               color: 'white',
               marginBottom: '8px',
               letterSpacing: '-0.5px',
             }}
>
             {item.name}
</div>

<div
             style={{
               color: '#cbd5e1',
               fontSize: '15px',
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
<div style={{ textAlign: 'right' }}>
<div
           style={{
             fontSize: '42px',
             fontWeight: '900',
             color: 'white',
             lineHeight: '42px',
             letterSpacing: '-1px',
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
               fontWeight: '500',
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
         marginTop: '20px',
         flexWrap: 'wrap',
       }}
>
       {isBest && (
<div
           style={{
             background: 'rgba(34,197,94,0.14)',
             color: '#4ade80',
             padding: '10px 16px',
             borderRadius: '999px',
             fontSize: '14px',
             fontWeight: '700',
             border: '1px solid rgba(34,197,94,0.22)',
           }}
>
           🔥 Best Deal
</div>
       )}

       {isFastest && (
<div
           style={{
             background: 'rgba(56,189,248,0.14)',
             color: '#38bdf8',
             padding: '10px 16px',
             borderRadius: '999px',
             fontSize: '14px',
             fontWeight: '700',
             border: '1px solid rgba(56,189,248,0.22)',
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
