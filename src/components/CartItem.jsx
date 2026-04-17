import React from "react"

function CartItem({ item , removeFromCart }){
    return (
        <div className="flex justify-between items-center border p-3 rounded-fxl">
            <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>₹{item.price}</p>
            </div>
            <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeFromCart(item.id)}
            >
                Remove
            </button>
        </div>
    )
}

export default CartItem