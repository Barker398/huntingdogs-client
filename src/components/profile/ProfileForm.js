import { useContext, useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"


export const ProfileForm = () => {
    const { getProfile, addProfileInfo, updateProfile } = useContext(ProfileContext)
    const params = useParams();
    // const [isLoading, setIsLoading] = useState(true);
    const editMode = params.hasOwnProperty("profileId")

    const [profile, setProfile] = useState({
        userId: 0,
        bio: "",
        address: "", 
        phoneNumber: "" 
    });

    useEffect(() => {
        if (editMode) {
            getProfile(parseInt(params.profileId))
                .then(setProfile)
                .then("useEffectProfile", profile)
        }
    }, [])
   
    const query = new URLSearchParams(useLocation().search);

    const profileId = parseInt(query.get("profileId"))

    const history = useHistory();


    const handleControlledInputChange = (event) => {

        const newProfileInfo = { ...profile }

        newProfileInfo[event.target.id] = event.target.value
        
        setProfile(newProfileInfo)
    }

    const handleSaveProfile = (event) => {
        event.preventDefault()
        
        const userId = parseInt(localStorage.getItem("HuntingDogs_user"))

        if (profile.id === 0){
            window.alert("Edit Profile Info")
        }
        else {
            if (editMode) {
                updateProfile({
                    id: parseInt(params.profileId),
                    userId: profile.userId,
                    bio: profile.bio,
                    address: profile.address,
                    phoneNumber: profile.phoneNumber
                })
                .then(() => history.push(`/profiles/detail/${profile.userId}`))
            }

            else {
                const newProfileInfo = {
                    userId: userId,
                    bio: profile.bio,
                    address: profile.address,
                    phoneNumber: profile.phoneNumber
                }
                addProfileInfo(newProfileInfo)
                .then(() => {
                    history.push(`/profiles/detail/${profileId}`)
                })
            }
        }
    }

    return (
        <form className="profileForm">
            <h2>{profile.id ? <>Edit Profile Info</> : <>New Profile Info</>}</h2>

            <fieldset>
                <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <input type="text" id="bio" required autoFocus className="form-control" placeholder="bio" value={profile.bio} onChange={handleControlledInputChange} />
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" required autoFocus className="form-control" placeholder="address" value={profile.address} onChange={handleControlledInputChange} />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" required autoFocus className="form-control" placeholder="phoneNumber" value={profile.phoneNumber} onChange={handleControlledInputChange} />
                </div>
                <div id="profileId" value={profile.userId}></div>
            </fieldset>
            <button className="btn btn-primary"
            onClick={handleSaveProfile}>
                Save Profile Info    
            </button>
        </form>
    )
}