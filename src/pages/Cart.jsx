import React from "react"
import CartItem from "../components/CartItem"

function Cart({ cart , removeFromCart }){
    const total = cart.reduce((sum,item) => sum + item.price,0)
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Your Cart</h1>
            <div className="space-y-3">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
                ))}
            </div>
            <h2 className="mt-4 font-semibold">Total: ₹{total}</h2>
        </div>
    )
}

export default Cart