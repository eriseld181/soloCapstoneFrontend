import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

class Home extends React.Component {
    state = {
        users: []
    }

    componentDidMount = async () => {
        console.log("this is cookie.get", Cookies.get("accessToken"))
        const response = await fetch('http://localhost:5000/api/users/', {
            credentials: 'include'
        })
        const fetchedUsers = await response.json()
        this.setState({ users: fetchedUsers.users })
    }

    render() {
        return (
            <>
                <NavBar />
                {this.state.users.map((user, i) => (<div key={i}>{user.username}</div>))}
                <div>  <Link to="/login" className="styles.link">Login </Link></div>
            </>
        )
    }
}

export default Home