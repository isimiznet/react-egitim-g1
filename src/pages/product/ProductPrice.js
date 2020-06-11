import React from "react"

function ProductPrice({value}) {
    if (value > 100) {
        return (
            <span style={{color: "red"}}>{value} TL</span>
        )
    } else {
        return (
            <span style={{color: "green", fontWeight: "bold"}}>{value}</span>
        )
    }
}

export default ProductPrice;
