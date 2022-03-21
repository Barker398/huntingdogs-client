import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { DogContext } from "./DogProvider"


export const DogDetail = () => {

    const { dogs, getDogs, getDogFavorites, addDogFavorite } = useContext(DogContext)
    const [dog, setDog] = useState({ traits:[] })
    const [ changeHeard, setChange ] = useState(true)
    
    const toggleChange = () => {changeHeard ? setChange(false) : setChange(true)}

    const currentUser = parseInt(localStorage.getItem("HuntingDogs_user"));

    const { dogId } = useParams();

    const history = useHistory()

    // useEffect, once you get dogs, you want the page to show the dogFavorites.
    useEffect(() => {
        getDogs()
        // without the empty square brackets the code inside would run on every render.
        // with them the code inside will only run once.
      .then(getDogFavorites)}, [changeHeard])

    useEffect(() => {
        const thisDog = dogs.find(d => d.id === parseInt(dogId)) || { traits:[] }
        setDog(thisDog)
    }, [dogs])

    const handleClickSaveFavorite = () => {
        addDogFavorite({
            dogId:dog.id,
            userId:currentUser
        } 
        )
        .then(() => {
            history.push("/Profile")
        })
        
    }
    
    return (
        <>
        <h2>Dog Information</h2>
        <section className="dog">
            <h3 className="dog__name">{dog.name}</h3>       
            <div className="dog__name">Name: {dog.name}</div>
            <img src={dogs.image_url} />
            <div className="dog__breed">Breed: {dog.breed}</div>
            <div className="dog__kennel">Kennel: {dog.kennel}</div>
            <button onClick={handleClickSaveFavorite}> favorites: </button>
        </section>
        <TraitList traits={dog.traits} dogId={trait.id} func={toggleChange}/> 
        </>
    )
}