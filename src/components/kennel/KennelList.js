import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { KennelContext } from "./KennelProvider"
import "./KennelList.css"

export const KennelList = () => {
    const { kennels, getKennels } = useContext(KennelContext);
  

    useEffect(() => {
        getKennels();
    }, []);

    return (
        <>
            <h2>Kennels</h2>
            <section className="kennels">
                {
                    kennels.map(kennel => {
                        return (
                            <div className="kennel" key={`kennel--${kennel.id}`}>
                                <img src={kennel.url} alt="kennel pictures" class="center" />

                                <Link to={`/kennels/detail/${kennel.id}`}>
                                    {kennel.name}
                                </Link>
                                <div className="kennel__name">
                                    Name of Kennel: {kennel.name}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}