import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { DogContext } from "../dog/DogProvider"
import { ProfileContext } from "./ProfileProvider"


export const ProfilePage = (props) => {
    const { profile, getProfiles } = useContext(ProfileContext)
    const { favorites } = useContext(DogContext)
    const history = useHistory()

    useEffect(() => {
        getProfiles()
    }, [])


    return (
        <>
            <h1>My Dogs</h1>

            <button onClick={

                () => history.push(`/profiles/create?profileId=${props.profileId}`)
            }>
                Add a Profile Info Here!
            </button>
            <section className="profile">

                {favorites.length ?

                    favorites.map(favDog => {

                        return (
                            <section className="dog">
                                <h3 className="dog__name">{favDog.dogs.name}</h3>
                                <img src={favDog.dogs.image_url} alt="kennel image_url class=" center />
                                <div className="dog__breed">Breed: {favDog.dogs.breed}</div>
                                <div className="dog__kennel">Kennel: {favDog.dogs.kennel}</div>
                            </section>

                        )
                    })
                    : <p>No Favorites</p>}
            </section>
            <button onClick={() => {
                history.push(`/profiles/edit/${profile.id}`)
            }}>Edit Contact</button>

        </>
    )
}