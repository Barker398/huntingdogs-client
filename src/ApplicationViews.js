import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./components/home/HomePage"
import { KennelList } from "./components/kennel/KennelList"
import { KennelProvider } from "./components/kennel/KennelProvider"


export const ApplicationViews = () => {
    return (
        <>
        
            <Route exact path="/home">
                <HomePage />
            </Route>
            <KennelProvider>
            <Route path="/kennel">
                <KennelList />
            </Route> 
            </KennelProvider>
        </>
    )
}