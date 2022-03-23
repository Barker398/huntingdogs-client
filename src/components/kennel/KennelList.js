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
        <article className="kennels">
            <h2>Kennels</h2>
            <section className="kennels">
                {
                    kennels && kennels.map(k => {
                        return (
                            <div className="kennel" key={`kennel--${k.id}`}>
                                <Link to={`/kennels/detail/${k.id}`}>
                                    {k.name}
                                </Link>
                                <img src={k.image_url} alt="images" className="center" />
                            </div>
                        )
                    })
                }
            </section>
        </article>
    )
}