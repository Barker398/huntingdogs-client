import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./components/home/HomePage"
import { KennelList } from "./components/kennel/KennelList"
import { KennelProvider } from "./components/kennel/KennelProvider"
import { ProfilePage } from "./components/profile/ProfilePage"
import { ProfileProvider } from "./components/profile/ProfileProvider"
import { KennelDetail } from "./components/kennel/KennelDetail"
import { DogProvider } from "./components/dog/DogProvider"

export const ApplicationViews = () => {
    return (
        <>
            <main
            style={{
            margin: "5rem 2rem"
            }}>
            <KennelProvider>
                <ProfileProvider>
                    <DogProvider>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route exact path="/kennels">
                    <KennelList />
                </Route>
                <Route exact path="/kennels/detail/:kennelId(\d+)">
                    <KennelDetail />
                </Route>
                <Route exact path="/profiles">
                    <ProfilePage />
                </Route>
                    </DogProvider>
                </ProfileProvider>   
            </KennelProvider>
            </main>
        </>
    )
}