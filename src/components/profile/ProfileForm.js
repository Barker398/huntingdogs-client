import { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"


export const ProfileForm = () => {
    const { profile, getProfile, updateProfile } = useContext(ProfileContext)
    const params = useParams();
    // const [isLoading, setIsLoading] = useState(true);
    const updateMode = params.hasOwnProperty("profileId")

    const [_profile, setProfile] = useState({
        userId: 0,
        bio: "",
        address: "", 
        phoneNumber: "",
        email: "" 
    });

    useEffect(() => {
        if (updateMode) {
            getProfile(parseInt(params.profileId))
                .then("useEffectProfile", profile)
        }
    }, [])
   
    // const query = new URLSearchParams(useLocation().search);

    // const profileId = parseInt(query.get("profileId"))

    const history = useHistory();


    const handleControlledInputChange = (e) => {

        const newProfileInfo = { ..._profile }

        newProfileInfo[e.target.id] = e.target.value
        
        setProfile(newProfileInfo)
    }

    const handleSaveProfile = (e) => {
        e.preventDefault()
        
        // const userId = parseInt(localStorage.getItem("HuntingDogs_user"))

        if (profile.id === 0){
            window.alert("Update Profile Info")
        }
        else {
           // if (editMode) {
                updateProfile({
                    id: parseInt(profile.id),
                    userId: _profile.userId,
                    bio: _profile.bio,
                    address: _profile.address,
                    phoneNumber: _profile.phoneNumber,
                    email: _profile.email
                })
                .then(() => history.push(`/profiles/detail/${profile.id}`))
         //   }

            // else {
            //     const newProfileInfo = {
            //         userId: userId,
            //         bio: profile.bio,
            //         address: profile.address,
            //         phoneNumber: profile.phoneNumber
            //     }
            //     addProfileInfo(newProfileInfo)
            //     .then(() => {
            //         history.push(`/profiles/detail/${profileId}`)
            //     })
            // }
        }
    }

    return (
        <form className="profileForm">
            <h2>Profile Info</h2>
            {/* <h2>{profile.id <>New Profile Info</>}</h2> */}
            {/* <h2>{profile.id ? <>Edit Profile Info</> : <>New Profile Info</>}</h2> */}

            <fieldset>
                <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <input type="text" id="bio" required autoFocus className="form-control" placeholder="bio" defaultValue={profile.bio} onChange={handleControlledInputChange} />
                
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" required autoFocus className="form-control" placeholder="address" defaultValue={profile.address} onChange={handleControlledInputChange} />
                
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" required autoFocus className="form-control" placeholder="phoneNumber" defaultValue={profile.phoneNumber} onChange={handleControlledInputChange} />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" required autoFocus className="form-control" placeholder="email" defaultValue={profile.email} onChange={handleControlledInputChange} />

                </div>
                <div id="profileId" defaultValue={profile.userId}></div>
            </fieldset>
            <button className="btn btn-primary"
            onClick={handleSaveProfile}>
                Save Profile Info    
            </button>
        </form>
    )
}