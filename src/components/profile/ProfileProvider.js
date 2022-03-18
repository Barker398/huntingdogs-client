import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [ profile, setProfile ] = useState([])

    const getProfile = () => {
        return fetch("http://localhost:8000/users", {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
        .then((response) => response.json())
        .then(setProfile);
    }

    const editProfile = (user) => {
        return fetch(`http://localhost:8000/users/${user}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getProfile)
    }

    return (
        <ProfileContext.Provider value={{
            getProfile, profile, editProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}