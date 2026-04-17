import React , { useState } from "react"

function ProductCard({ product , addToCart }) {
    const [showModal,setShowModal] = useState(false)
    const confirmAdd = () => {
        addToCart(product)
        setShowModal(false)
    }
    return (
        <div className="border rounded-2xl p-4 shadow hover:shadow-lg">
            <img src={product.image} alt="product image" className="h-40 w-full object-cover rounded-xl" />
            <h2 className="font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-500">₹{product.price}</p>
            <button
                className="mt-2 bg-black text-white px-3 py-1 rounded-xl"
                onClick={() => setShowModal(true)}
            >
                Add to Cart
            </button>
        
        {
            showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
                        <h2 className="text-lg font-semibold mb-4">Add this item to Cart ?</h2>
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-lg"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-black text-white px-4 py-2 rounded-lg"
                                onClick={confirmAdd}
                            >
                                Yes , Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default ProductCard