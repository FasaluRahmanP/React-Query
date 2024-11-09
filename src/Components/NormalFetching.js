import axios from "axios"
import React from "react"
import { useState,useEffect } from "react"

function NormalFetching() {
    const[loading, setloading] = useState(true)
    const[user, setuser] = useState([])

    const fetchUser = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        const data = response.data
        setuser(data)
        setloading(false)
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            {loading && <h1>Loading!.....</h1>}
            {
                user.map(user => (
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>
    )
}
export default NormalFetching