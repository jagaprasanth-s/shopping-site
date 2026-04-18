import React , { useState } from "react"
import { getUsers , saveUsers } from "../auth.js"

function Register({ setPage }) {

    const [form,setForm] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const users = getUsers()
        const userExists = users.find(u => u.username === form.username)
        if(userExists){
            alert("User already exists")
            return
        }
        const newUser = [...users,form]
        saveUsers(newUser)
        alert("Registration successful , Login to continue")
        setPage("login")
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow "
            >
                <h2 className="text-xl font-bold mb-4">Register</h2>
                <input type="text" name="username" placeholder="set the Username" className="w-full mb-3 p-2 border rounded" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Set your password" className="w-full mb-3 p-2 border rounded" onChange={handleChange} required />
                <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">Register</button>
                <p className="mt-3 text-sm">
                    Already have an account? {" "}
                    <span className="text-blue-500 cursor-pointer">
                        Login
                    </span>
                </p>
            </form>
        </div>
    )

}

export default Register