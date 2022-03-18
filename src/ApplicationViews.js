import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./components/home/HomePage"
import { KennelList } from "./components/kennel/KennelList"
import { KennelProvider } from "./components/kennel/KennelProvider"


export const ApplicationViews = () => {
    return (
        <>
            <main
            style={{
            margin: "5rem 2rem"
            }}>
            <KennelProvider>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/kennel">
                    <KennelList />
                </Route> 
            </KennelProvider>
            </main>
        </>
    )
}