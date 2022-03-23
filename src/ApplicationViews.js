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
import { TraitProvider } from "./components/trait/TraitProvider"
import { BreedProvider } from "./components/breed/BreedProvider"

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
                            <TraitProvider>
                                <BreedProvider>
                                    <Route path="/home">
                                        <HomePage />
                                    </Route>
                                    <Route exact path="/kennels">
                                        <KennelList />
                                    </Route>
                                    <Route exact path="/kennels/detail/:kennelId(\d+)">
                                        <KennelDetail />
                                    </Route>
                                    <Route path="/profiles">
                                        <ProfilePage />
                                    </Route>
                                    <Route path="/profiles/create">
                                        <ProfileForm />
                                    </Route>
                                </BreedProvider>
                            </TraitProvider>
                        </DogProvider>
                    </ProfileProvider>
                </KennelProvider>
            </main>
        </>
    )
}