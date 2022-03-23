import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"


export const ProfilePage = () => {
    const { profile, getProfiles } = useContext(ProfileContext)
    const history = useHistory()

    useEffect(() => {
        getProfiles()
    }, [])


    return (
        <>
            <h1>My Dogs</h1>
            <section className="profile">

                {profile?.favorites?.length ?

                    profile.favorites.map(favDog => {

                        return (
                            <section className="dog" key={favDog.id}>
                                <h3 className="dog__name">{favDog.name}</h3>
                                <img src={favDog.image_url} alt="kennel image_url class=" center />
                                <div className="dog__breed">Breed: {favDog.breed.breed_type}</div>
                                <div className="dog__kennel">Kennel: {favDog.kennel.name}</div>
                            </section>

                        )
                    })
                    : <p>No Favorites</p>}
            </section>
            <h3>Profile Information</h3>
            <section className="profileInfo" key={profile.id}>
                <div className="profile__bio">Bio: {profile.bio}</div>
                <div className="profile__address">Address: {profile.address}</div>
                <div className="profile__phoneNumber">Phone Number: {profile.phoneNumber}</div>
            </section>
            <button onClick={
                () => history.push(`/profiles/create?profileId=${profile.id}`)
            }>
                Add a Profile Info Here!
            </button>
        </>
    )
}