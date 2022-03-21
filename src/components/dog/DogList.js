// import { useContext, useEffect } from "react"
// import { Link } from "react-router-dom"

// import { DogContext } from "./DogProvider"
// import { KennelContext } from "../kennel/KennelProvider"

// export const DogList = (props) => {
  
//     const {dogs, getDogs} = useContext(DogContext)
//     const {kennels, getKennels} = useContext(KennelContext)

//     useEffect(() => {
//         getKennels()
//         getDogs()
//     }, [])


//     return (
//         <div className="dogs">
//             <h2>Dogs</h2>
//             {
//             dogs.map(dog => {
//                 return <article key={`dog--${dog.id}`} className="dog" style={{ width: `18rem`}}>
//                 <section className="body">
//                 <Link className="link"
//                 to={{
//                     pathname: `/dogs/${dog.id}`,
//                     state: { chosenDog: dog }
//                 }}>
//                 <h2 className="title">{dog.name}</h2>    
//                 </Link>    
//                 </section>
//                 <section>
//                 {`${dog.kennels.length} ${dog.kennels.length === 1 ? "kennel" : "kennels"}`}    
//                 </section>    
//                 </article>
//             })
//         }
//         </div>
        
//     )
// }
    // const { dogs, getDogs } = useContext(DogContext)

    // useEffect(() => {
    //     getDogs()
    // }, [])

//     return (
//         <>
//         <h2>Dogs</h2>
//         <section className="dogs">
//             {
//             dogs.map(dog => {
//                 return (
//                     <div className="dog" key={`dog--${dog.id}`}>
//                     <img src={dog.image_url} alt="dog images" class="center" />
//                     <DogDetail key={dog.id} kennelId={dog.kennelId} dog={dog} />
//                     </div>
//                 )
//             })
//             }
//         </section>
//         </>
//     )
// }