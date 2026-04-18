import React , { useState } from "react"
import { getUsers  , setCurrentUser } from "../auth.js"

function Login({ setPage }) {

    const [ form , setForm ] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setForm({ ...form , [e.target.name]: e.target.value })
    }

    const handleSUbmit = (e) => {
        e.preventDefault()
        const users = getUsers()
        const validUser = users.find(
            u => u.username=== form.username && u.password === form.password
        )
        if (!validUser) {
            alert("Invalid credentials")
            return
        }
        setCurrentUser(validUser)
        setPage("home")
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSUbmit}
                className="bg-white p-6 rounded-xl shadow w-80"
            >
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input type="text" name="username" placeholder="Enter Your Username" className="w-full mb-3 p-2 border rounded" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Enter Your Password" className="w-full mb-3 p-2 border rounded" onChange={handleChange} required />
                <button type="submit" className="bg-green-500 text-white w-full py-2 rounded">Login</button>
                <p className="mt-3 text-sm">
                    New User?{" "}
                    <span className="text-blue-500 cursor-pointer" onClick={() => setPage("register")}>
                        Register
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Login