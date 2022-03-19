import React, { createContext, useState } from "react";


export const KennelContext = createContext();

export const KennelProvider = (props) => {
    const [kennels, setKennels] = useState([]);

    const getKennels = () => {
        return fetch("http://localhost:8000/kennels", {
            headers: {
                Authorization: `Token ${localStorage.getItem("HuntingDogs_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setKennels);
    };    
        
    return (
        <KennelContext.Provider value={{
            kennels, getKennels
        }}>
            {props.children}
        </KennelContext.Provider>
    )
}
