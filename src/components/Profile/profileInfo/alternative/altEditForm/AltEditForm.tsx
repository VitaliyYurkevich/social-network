import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userPhoto from '../../../../../assets/images/user.webp'
import s from './altEditForm.module.css'
import {savePhotoTC, UserProfilePropsType} from "../../../../../redux/profile-reducer";

type PropsType = {
    profile: UserProfilePropsType
    onSubmit: (formData: UserProfilePropsType) => void
    exitOfEditMode: () => void
    isOwner: boolean
   /* isLoading: boolean*/
}

const ProfileEditForm: React.FC<PropsType> = ({ profile, onSubmit, exitOfEditMode, isOwner, /*isLoading*/ }) => {
    const dispatch = useDispatch()
    const [infoData, setInfoData] = useState<UserProfilePropsType>(profile)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(infoData)
    }

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        if (files && files.length) {
            dispatch(savePhotoTC(files[0]))
        }
    }

    /*if (isLoading) {
        return <Preloader />
    }*/

    return (
        <form className={s.editInfoBlock} onSubmit={(e) => handleSubmit(e)}>
            <div className={s.topBlock}>
                <div className={s.leftBlock}>
                    <h3>Edit your profile</h3>
                    {isOwner && (
                        <div className={s.upload}>
                            <p>Edit photo</p>
                            <p className={s.secondP}>Upload new photo</p>
                            <input id="upl" type="file" onChange={onMainPhotoSelected} />
                            <label htmlFor="upl" className={`button button--primary ${s.uploadBtn}`}>
                                Upload
                            </label>
                            <div className={s.photos}>
                                <img src={profile.photos?.large || userPhoto} className={s.largePhoto} alt="" />
                                <img src={profile.photos?.large || userPhoto} className={s.smallPhoto} alt="" />
                            </div>
                        </div>
                    )}
                    <div className={s.name_surname}>
                        <div className={s.name}>
                            <p>Edit name</p>
                            <input
                                type="text"
                                placeholder="Name"
                                value={infoData.fullName}
                                onChange={(e) => setInfoData({ ...infoData, fullName: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className={s.rightBlock}>
                    <h3>Edit information</h3>
                    <div className={s.aboutMe}>
                        <p>Edit info</p>
                        <input
                            type="text"
                            placeholder="About me"
                            value={infoData.aboutMe}
                            onChange={(e) => setInfoData({ ...infoData, aboutMe: e.target.value })}
                        />
                    </div>

                    <div className={s.checkbox}>
                        <p>Do you want a find a job?</p>
                        <input
                            type="checkbox"
                            placeholder=""
                            checked={infoData.lookingForAJob}
                            onChange={() => setInfoData({ ...infoData, lookingForAJob: !infoData.lookingForAJob })}
                        />
                    </div>

                    <div className={s.skills}>
                        <p>Edit skills</p>
                        <input
                            type="text"
                            placeholder="My professional skills"
                            value={infoData.lookingForAJobDescription}
                            onChange={(e) => setInfoData({ ...infoData, lookingForAJobDescription: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            <div className={s.contactsBlock}>
                <h3>Edit contacts</h3>
                <div className={s.contacts}>
                    {profile.contacts &&
                        Object.keys(profile.contacts).map((key) => (
                            <div key={key} className={s.contactsItem}>
                                <div className={s.contactKey}>{key}</div>
                                <input
                                    className={s.contactValue}
                                    type="text"
                                    placeholder={`http://${key}.com`}
                                    // @ts-ignore
                                    value={infoData.contacts[key]}
                                    onChange={(e) =>
                                        setInfoData({
                                            ...infoData,
                                            contacts: {
                                                ...infoData.contacts,
                                                [key]: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                        ))}
                </div>
            </div>

            <div className={s.buttons}>
                <button className="button button--secondary" onClick={exitOfEditMode}>
                    Cancel
                </button>
                <button className={`button button--primary ${s.saveBtn}`} onClick={() => onSubmit(infoData)}>
                    Save changes
                </button>
            </div>
            {/* {error && <div className={style.formSummaryError}>{error}</div>} */}
        </form>
    )
}

export default ProfileEditForm