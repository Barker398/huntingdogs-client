import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { KennelContext } from "./KennelProvider"
import { DogContext } from "../dog/DogProvider"
import { ProfileContext } from "../profile/ProfileProvider"
import { useHistory } from "react-router-dom"
import "./KennelDetail.css"

export const KennelDetail = () => {
    const { getProfiles } = useContext(ProfileContext)
    const { kennel, getKennelById } = useContext(KennelContext)
    const { addDogFavorite } = useContext(DogContext)
    const { kennelId } = useParams();
    const history = useHistory()

    useEffect(() => {
        getKennelById(kennelId)
        getProfiles()
    }, [])

    const handleClickSaveFavorite = (e) => {
        const dogId = e.target.id
        addDogFavorite(dogId)
            .then(() => {
                history.push(`/profiles`)
            })
    }

    return (<>
        <h2>Kennel</h2>
        <h3 className="kennel__name">{kennel.name}</h3>
        {kennel && <section className="kennel">
            <img src={kennel.image_url} alt="images" className="center" />
        </section>}
        <h2>Available Dogs</h2>
        {kennel?.dogs?.map(dog => (
            <section key={dog.id}>
                <h3>{dog.name}</h3>
                <div>
                    <img src={dog.image_url} className="center" />
                    {dog.traits.map(trait => {
                        return <h4>Dog Traits: {trait.description}</h4>
                    })}
                    <h4>Type of Hunting: {dog.breed.hunting_type}</h4>
                    <h4>Breed: {dog.breed.breed_type}</h4>
                </div>
                <button className="center" id={dog.id} onClick={handleClickSaveFavorite}> Favorite this Dog: </button>
            </section>
        ))}

    </>)
}
