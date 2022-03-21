import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { KennelContext } from "./KennelProvider"
import { DogContext } from "../dog/DogProvider"
import "./KennelDetail.css"
import { useHistory } from "react-router-dom"

export const KennelDetail = () => {

    const { kennel, getKennelById } = useContext(KennelContext)
    const { dog, addDogFavorite } = useContext(DogContext)


    const { kennelId } = useParams();
    // const { dogId } = useParams();
    const history = useHistory
    const currentUser = parseInt(localStorage.getItem("HuntingDogs_user"));

    useEffect(() => {
        getKennelById(kennelId)
    }, [])

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
            {/* <h3 className="kennel__name">{kennel.name}</h3> */}
            <img src={kennel.image_url} alt="images" className="center" />
            </section>}
            <h2>Dogs</h2>
            {kennel?.dogs?.map(dog => (

                <section key={dog.id}>
                    <h3>{dog.name}</h3>
                    <div>
                        <img src={dog.image_url} className="center" />
                        <span>{dog.breed}</span>
                        <span>{dog.trait}</span>
                    </div>
                    <button  className="center" id={dog.id} onClick={handleClickSaveFavorite}> Favorite this Dog: </button>
                </section>

            ))}
            
        {/* </section>} */}
    </>)

}