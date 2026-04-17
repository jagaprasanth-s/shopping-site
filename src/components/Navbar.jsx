import React from "react"

function Navbar({ cartCount , setPage }) {
    return (
        <div className="p-4 shadow flex justify-between bg-white">
            <h1 className="text-xl font-bold">ShopEasy</h1>
            <div className="space-x-4">
                <button className="" onClick={() => setPage("home") }>Home</button>
                <button className="" onClick={() => setPage("cart")}>Cart ({cartCount})</button>
            </div>
        </div>
    )
}

export default Navbar