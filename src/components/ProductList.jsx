import React from "react"
import ProductCard from "./ProductCard.jsx"

function ProductList({ products , addToCart }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {products.map((p)=>(
                <ProductCard
                    key={p.id}
                    product={p}
                    addToCart={addToCart}
                />
            ))}
        </div>
    )
}

export default ProductList