import React from "react"

function Navbar({ cartCount , setPage , logout , user }) {
    return (
        <div className="p-4 shadow flex justify-between bg-white">
            <h1 className="text-xl font-bold">ShopEasy</h1>
            <div className="space-x-4">
                <button className="" onClick={() => setPage("home") }>Home</button>
                <button className="" onClick={() => setPage("cart")}>Cart ({cartCount})</button>
                {user ? (
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={logout}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => setPage("login")}
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar