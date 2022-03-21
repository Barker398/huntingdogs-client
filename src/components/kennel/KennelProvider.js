import React, { createContext, useState } from "react";


export const KennelContext = createContext();

export const KennelProvider = (props) => {
    const [kennels, setKennels] = useState([]);
    const [ kennel, setKennel] = useState([]);

    const getKennels = () => {
        return fetch("http://localhost:8000/kennels", {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setKennels);
    };
    
    const getKennelById = (id) => {
        return fetch(`http://localhost:8000/kennels/${id}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setKennel);
    };
        
    return (
        <KennelContext.Provider value={{
            kennels, kennel, getKennels, getKennelById
        }}>
            {props.children}
        </KennelContext.Provider>
    )
}
