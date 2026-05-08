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
       padding: "18px",
       marginBottom: "14px",
       borderRadius: "24px",
       background: "rgba(20,20,30,0.65)",
       backdropFilter: "blur(14px)",
       WebkitBackdropFilter: "blur(14px)",
       border: isBest
         ? "1px solid #22c55e"
         : isFastest
         ? "1px solid #38bdf8"
         : "1px solid rgba(255,255,255,0.08)",
       boxShadow: isBest
         ? "0 0 24px rgba(34,197,94,0.25)"
         : "0 6px 24px rgba(0,0,0,0.35)",
       transition: "all 0.3s ease",
     }}
>
<div
       style={{
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
       }}
>
<div>
<div
           style={{
             display: "flex",
             alignItems: "center",
             gap: "12px",
             marginBottom: "6px",
           }}
>
<div
             style={{
               width: "64px",
               height: "64px",
               borderRadius: "18px",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               fontSize: "34px",
               background: "rgba(255,255,255,0.08)",
               border: "1px solid rgba(255,255,255,0.12)",
               backdropFilter: "blur(12px)",
             }}
>
             {item.logo}
</div>
<div
             style={{
               fontSize: "20px",
               fontWeight: "700",
             }}
>
             {item.name}
</div>
</div>
<div
           style={{
             fontSize: "13px",
             color: "#cbd5e1",
           }}
>
           ⏱ {item.time} mins
</div>
</div>
<div style={{ textAlign: "right" }}>
<div
           style={{
             fontSize: "28px",
             fontWeight: "bold",
           }}
>
           ₹{item.price}
</div>
         {isBest && (
<div
             style={{
               fontSize: "12px",
               color: "#94a3b8",
               marginTop: "4px",
             }}
>
             Save ₹{highestPrice! - item.price}
</div>
         )}
</div>
</div>
<div
       style={{
         display: "flex",
         gap: "10px",
         marginTop: "14px",
         flexWrap: "wrap",
       }}
>
       {isBest && (
<div
           style={{
             background: "rgba(34,197,94,0.15)",
             color: "#4ade80",
             padding: "6px 10px",
             borderRadius: "999px",
             fontSize: "12px",
             fontWeight: "bold",
           }}
>
           🔥 Best Deal
</div>
       )}
       {isFastest && (
<div
           style={{
             background: "rgba(56,189,248,0.15)",
             color: "#38bdf8",
             padding: "6px 10px",
             borderRadius: "999px",
             fontSize: "12px",
             fontWeight: "bold",
           }}
>
           ⚡ Fastest Delivery
</div>
       )}
</div>
</div>
 )
}
