import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import s from './style.module.css'
import {saveProfileTC, updateUserStatusTC, UserProfilePropsType} from "../../../../redux/profile-reducer";
import ProfileEditForm from "./altEditForm/AltEditForm";
import AlternativeProfileInfo from "./altProfileInfo/AlternativeProfileInfo";
import AltPosts from "./posts/AltPosts";

type PropsType = {
    userProfile: UserProfilePropsType
    profileStatus: string
    savePhoto: (file: File) => void
    saveProfileTC: (profile: UserProfilePropsType) => void
    isOwner: boolean
    updateUserStatusTC: (profileStatus: string) => void
    //UserId: string | null
}

const AltProfile: React.FC<PropsType> = ({userProfile, profileStatus, isOwner}) => {

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)


   /* useEffect(() => {

        dispatch(getProfileTC(userProfile.userId))
        debugger
    }, [userProfile.userId])*/

    const onSubmit = async (formData: UserProfilePropsType) => {
        await dispatch(saveProfileTC(formData))
        setEditMode(false)
    }


    return (
        <div>
            {/*{isFetching && <Preloader />}*/}
            {editMode ? (
                <ProfileEditForm
                    profile={userProfile as UserProfilePropsType}
                    onSubmit={onSubmit}
                    exitOfEditMode={() => setEditMode(false)}
                    isOwner={isOwner}
                    /*isLoading={isFetching}*/
                />
            ) : (
                <div className={s.profile}>
                    {userProfile && (
                        <>
                            <AlternativeProfileInfo profileStatus={profileStatus}
                                isOwner={isOwner}
                                userProfile={userProfile}
                                updateUserStatusTC={(status) => dispatch(updateUserStatusTC(status))}
                                goToEditMode={() => setEditMode(true)}
                            />
                            <AltPosts isOwner={isOwner} />
                        </>
                    )}
                </div>
            )}
        </div>
    )
}


export default AltProfile