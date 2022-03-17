import React, { createContext, useState } from "react";


export const KennelContext = createContext();

export const KennelProvider = () => {
    cosnt [kennels, setKennels] = useState([]);

    const getKennels = () => {
        return fetch("http://localhost:8000/kennels"), {
            headers: {
                
            }
        }
    }
}