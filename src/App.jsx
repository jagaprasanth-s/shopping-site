import React, { useState , useEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import ProductList from "./components/ProductList.jsx"
import Cart from "./pages/Cart.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import { getCurrentUser, logout } from "./auth.js"

const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]")
const saveCart = (cart) => localStorage.setItem("cart",JSON.stringify(cart))

export default function App() {

  const [page,setPage] = useState("home")
  const [cart,setCart] = useState(getCart())
  const [user,setUser] = useState(getCurrentUser())

  const products = [
    { id: 1 , title: "Shoes" , price: 1999 , image: "https://picsum.photos/200?1" },
    { id: 2 , title: "watch" , price: 2999 , image: "https://picsum.photos/200?2" },
    { id: 3 , title: "Bag" , price: 14999 , image: "https://picsum.photos/200?3" },
    { id: 4 , title: "Headphones" , price: 2499 , image: "https://picsum.photos/200?4" },
    { id: 5 , title: "T-Shirt" , price: 799 , image: "https://picsum.photos/200?5" },
    { id: 6 , title: "Laptop" , price: 49999 , image: "https://picsum.photos/200?6" }
  ] 

  useEffect(() => {
    setUser(getCurrentUser())
  },[page])

  useEffect(() => {
    saveCart(cart)
  },[cart])

  const addToCart = (product) => {
    setCart([...cart,product])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} setPage={setPage} user={user} logout={() => {
        logout()
        setUser(null)
        setPage("login")
      }} />
      {!user && page === "login" && <Login setPage={setPage}/>}
      {!user && page === "register" && <Register setPage={setPage}/>}
      {user && page === "home" && (
        <ProductList products={products} addToCart={addToCart}/>
      )}
      {user && page === "cart" && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  )

}