import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import userPhoto from '../../../../../assets/images/user.webp'
import s from '../style.module.css'
import {saveProfileTC, UserProfilePropsType} from "../../../../../redux/profile-reducer";
import {ProfileStatus} from "../../../profileStatus/ProfileStatus";
import ProfileDescription from "./ProfileDescription";


type ProfileInfoPropsType = {
    userProfile: UserProfilePropsType
    updateUserStatusTC: (profileStatus: string) => void
    isOwner: boolean
    goToEditMode: () => void,
    profileStatus: string
}

const AlternativeProfileInfo: React.FC<ProfileInfoPropsType> = ({ userProfile, profileStatus, updateUserStatusTC, isOwner, goToEditMode }) => {
    const [colorMode, setColorMode] = useState(false)
    const [openPhotoModal, setPhotoModal] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const onSubmit = (profile: UserProfilePropsType) => {
        saveProfileTC(profile)
        setEditMode(false)
    }


    return (
        <div className={s.infoBlock} onDoubleClick={() => setColorMode(false)}>
            {userProfile && (
                <div className={s.mainInfo}>
                    <label id="user-color" className={s.colorBlock} onClick={() => setColorMode(!colorMode)} />
                    <img
                        onClick={() => setPhotoModal(true)}
                        src={userProfile && userProfile.photos?.large ? userProfile.photos?.large : userPhoto}
                        className={cn(s.mainPhoto, { [s.malePhoto]: userProfile.aboutMe })}
                        alt="user img"
                    />
                    <div className={s.name}>{`${userProfile.fullName}`}</div>
                    <div className={s.status}>
                        <ProfileStatus profileStatus={profileStatus} updateUserStatusTC={updateUserStatusTC}  />
                    </div>
                    {isOwner ? (
                        <button className="button button--primary" onClick={goToEditMode}>
                            Edit my profile
                        </button>
                    ) : null}
                </div>
            )}

            {openPhotoModal && userProfile.photos?.large && (
                <div className={s.modal}>
                    <div className={s.overlayModal} onClick={() => setPhotoModal(false)} />
                    <img className={s.modalPhoto} src={userProfile.photos?.large} alt="big user img" />
                </div>
            )}

            {userProfile && <ProfileDescription info={userProfile} />}
        </div>
    )
}

export default AlternativeProfileInfo
