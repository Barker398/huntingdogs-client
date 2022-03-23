import { createContext, useState } from "react";


export const BreedContext = createContext();

export const BreedProvider = (props) => {
    const [breeds, setBreeds] = useState([]);

    const getBreeds = () => {
        return fetch("http://localhost:8000/breeds", {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setBreeds)
    };

    return (
        <BreedContext.Provider value={{
            breeds, getBreeds
        }}>
            {props.children}
        </BreedContext.Provider>
    )
}