import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"


export const ProfileForm = () => {
    const { addProfileInfo, updateProfile } = useContext(ProfileContext)
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

        newContactInfo[event.target.id] = event.target.value
        
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
            }
        }
    }
}