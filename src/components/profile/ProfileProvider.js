import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [ profile, setProfile ] = useState([])

    const getProfiles = () => {
        return fetch("http://localhost:8000/profiles", {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
        .then((response) => response.json())
        .then(setProfile);
    }

    const updateProfile = (profile) => {
        return fetch(`http://localhost:8000/profiles/${profile.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(getProfiles)
    }

    const addProfileInfo = (profile) => {
        return fetch("http://localhost:8000/profiles", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("HuntingDogs_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
        .then((response) => response.json())
        .then(getProfiles);
    }

    return (
        <ProfileContext.Provider value={{
            getProfiles, profile, updateProfile, addProfileInfo
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}