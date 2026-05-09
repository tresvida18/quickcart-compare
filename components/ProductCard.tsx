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
       boxSizing: 'border-box',

       padding: '20px',
       marginBottom: '16px',

       borderRadius: '22px',

       background: isBest
         ? 'linear-gradient(135deg,#064e3b,#022c22)'
         : '#020617',

       border: isBest
         ? '2px solid #22c55e'
         : isFastest
         ? '2px solid #38bdf8'
         : '1px solid #1e293b',

       overflow: 'hidden'
     }}
>
     {/* TOP ROW */}
<div
       style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         gap: '16px',
         width: '100%'
       }}
>
       {/* LEFT */}
<div
         style={{
           display: 'flex',
           alignItems: 'center',
           gap: '14px',
           flex: 1,
           minWidth: 0
         }}
>
<img
           src={item.logo}
           alt={item.name}
           style={{
             width: '54px',
             height: '54px',
             borderRadius: '14px',
             objectFit: 'contain',
             background: 'white',
             flexShrink: 0
           }}
         />

<div
           style={{
             minWidth: 0
           }}
>
<div
             style={{
               fontSize: '24px',
               fontWeight: 700,
               color: 'white',

               whiteSpace: 'nowrap',
               overflow: 'hidden',
               textOverflow: 'ellipsis'
             }}
>
             {item.name}
</div>

<div
             style={{
               fontSize: '14px',
               color: '#cbd5e1',
               marginTop: '4px'
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
               fontSize: '13px',
               color: '#94a3b8',
               marginTop: '6px'
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
             fontWeight: 700
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
             fontWeight: 700
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
