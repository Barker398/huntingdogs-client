import { useContext, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { KennelContext } from "./KennelProvider"
import { DogContext } from "../dog/DogProvider"
// import { TraitContext } from "../trait/TraitProvider"
import "./KennelDetail.css"

export const KennelDetail = () => {

    const { kennel, getKennelById } = useContext(KennelContext)
    // const { trait, getTraitById } = useContext(TraitContext)
    const { addDogFavorite } = useContext(DogContext)

    const { kennelId } = useParams();
    // const { traitId } = useParams();

    const history = useHistory

    const currentUser = parseInt(localStorage.getItem("HuntingDogs_user"));

    useEffect(() => {
        getKennelById(kennelId)
    }, [])

    // useEffect(() => {
    //     getTraitById(traitId)
    // }, [])

    const handleClickSaveFavorite = (e) => {
        const dogId = e.target.id
        console.log(dogId)
        addDogFavorite({
            dogId: dogId,
            userId: currentUser
        }
        )
            .then(() => {
                history.push("/Profiles")
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
                        return <h4>{trait.description}</h4>
                    })} 
                    <h4>Type of Hunting: {dog.breed.hunting_type}</h4>
                    <h4>Breed: {dog.breed.breed_type}</h4>
                </div>
                <button className="center" id={dog.id} onClick={handleClickSaveFavorite}> Favorite this Dog: </button>
            </section>
        ))}
        
    </>)
}