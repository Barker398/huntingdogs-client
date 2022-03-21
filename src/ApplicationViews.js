import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./components/home/HomePage"
import { KennelList } from "./components/kennel/KennelList"
import { KennelProvider } from "./components/kennel/KennelProvider"
import { ProfilePage } from "./components/profile/ProfilePage"
import { ProfileProvider } from "./components/profile/ProfileProvider"
import { KennelDetail } from "./components/kennel/KennelDetail"
import { DogProvider } from "./components/dog/DogProvider"
import { ProfileForm } from "./components/profile/ProfileForm"

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
                <Route  path="/profiles/edit/:profileId(\d+)">
                    <ProfileForm />
                </Route>
                <Route exact path="/profiles/create">
                    <ProfileForm />
                </Route>
                    </DogProvider>
                </ProfileProvider>   
            </KennelProvider>
            </main>
        </>
    )
}