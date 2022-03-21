import { createContext, useState } from "react";


export const DogContext = createContext()
export const DogProvider = (props) => {

    const [dogs, setDogs] = useState([])

    const [favorites, setFavorites] = useState([])

    const getDogs = () => {
        return fetch("http://localhost:8000/dogs", {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setDogs);
    }

    const getDogFavorites = () => {
        return fetch("http://localhost:8000/favorites?_expand=dog", {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setFavorites);
    }

    const getDogById = (id) => {
        return fetch(`http://localhost:8000/dogs?id=${id}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setDogs);
    };

    const addDogFavorite = dogObj => {
        return fetch("http://localhost:8000/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dogObj)
        })
        .then(getDogFavorites)
    }

    return (
        <DogContext.Provider value={{
            dogs, getDogs, favorites, setFavorites, addDogFavorite, getDogFavorites, getDogById
        }}>
            {props.children}
        </DogContext.Provider>
    )
}