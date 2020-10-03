import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <>
            <NavBar />
            <div>  <Link to="/login" className="styles.link">Login </Link></div>
        </>
    )
}
