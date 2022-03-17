import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./components/home/HomePage"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/home">
                <HomePage />
            </Route>
        </>
    )
}