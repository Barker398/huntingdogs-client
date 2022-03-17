import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="navbar__item">
                Navigation link
            </li>
            <li className="navbar__item">
                <Link className="navbar_link" to="/"></Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar-link" to="/">
                    Profile
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar-link" to="/"></Link>
            </li>
            {
                (localStorage.getItem("HuntingDogs_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("HuntingDogs_token")
                                history.push({ pathname: "/login" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
