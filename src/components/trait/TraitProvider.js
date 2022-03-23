import { createContext, useState } from "react";

export const TraitContext = createContext()

export const TraitProvider = (props) => {
    const [traits, setTraits] = useState([])

    const getTraits = () => {
        return fetch("http://localhost:8000/traits", {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setTraits);
    };

    const getTraitById = (id) => {
        return fetch(`http://localhost:8000/traits?id=${id}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setTraits);
    }

    return (
        <TraitContext.Provider value={{
            traits, getTraits, getTraitById
        }}>
            {props.children}
        </TraitContext.Provider>
    )
}