import React from "react"
import NavBar from "../components/NavBar/"
import UserProfile from "../components/userProfile/UserProfile"
import MyTab from "../components/MyTabs"
import Footer from '../components/Footer'
export default function Profile() {
    return (
        <>
            <NavBar />
            <UserProfile />
            <MyTab />
            <Footer />

        </>
    )
}
