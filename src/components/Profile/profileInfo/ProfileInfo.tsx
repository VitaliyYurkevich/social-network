import React, {useState} from 'react';
import classes from "./ProfileInfo.module.css";
import {UserProfilePropsType} from "../../../redux/profile-reducer";
import {LoaderInfinity} from "../../loader/LoaderInfinity";
import {ProfileStatus} from "../profileStatus/ProfileStatus";
import userPhoto from "../../../assets/images/user.webp"
import {ProfileReduxForm} from "../profileDataForm/ProfileDataForm";
import {Button, Input, TextField} from "@mui/material";
import {ContactsType} from "./alternative/altProfileInfo/ProfileDescription";



type ProfileInfoPropsType = {
    userProfile: UserProfilePropsType
    profileStatus: string
    updateUserStatusTC: (profileStatus: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfileTC: (profile: UserProfilePropsType) => void
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async (profile: UserProfilePropsType) => {
       await props.saveProfileTC(profile)
        setEditMode(false)
    }

    if (!props.userProfile) {
        return <LoaderInfinity/>
    }

    return (
            <div className={classes.descriptionBlock}>
                <div >
                    <span className={classes.styledSpan}>
                        <img src={props.userProfile.photos.large || userPhoto} className={classes.mainPhoto}/>
                         <ProfileStatus profileStatus={props.profileStatus} updateUserStatusTC={props.updateUserStatusTC}/>
                    </span>



                        {/*{props.isOwner && <TextField variant={"standard"} type={'file'} onChange={onMainPhotoSelected}/>}*/}
                </div>

                    {editMode
                        ? <ProfileReduxForm initialValues={props.userProfile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(props.isOwner)
                        }} isOwner={props.isOwner} userProfile={props.userProfile}/>}

            </div>
    );
};

type ContactPropsType = {
    contactTitle: any,
    contactValue: any
}
const Contact:React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


type ProfileDataType = {
    userProfile: UserProfilePropsType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = (props: ProfileDataType) => {
    return (
        <div className={classes.mainInfo}>
            <div>
                <div className={classes.name}>
                    <b>Full Name: </b>{props.userProfile.fullName}
                </div>
                <div className={classes.aboutMe}>
                    <b>About me:</b> {props.userProfile.aboutMe ? props.userProfile.aboutMe : '-----'}
                </div>
                <div className={classes.LookForJob}>
                    <b>Looking for a job: </b> {props.userProfile.lookingForAJob ? "Yes" : "No"}
                </div>
            </div>
            <div>
                <div>
                    {props.userProfile.lookingForAJob &&
                        <div>
                            <b>My professional skills:</b> {props.userProfile.lookingForAJobDescription}</div>
                    }
                </div>
                <div className={classes.contact}>
                    <b>Contacts:</b> {Object.keys(props.userProfile.contacts).map(key => {

                    return <Contact key={key} contactTitle={key} contactValue={props.userProfile.contacts[key as keyof ContactsType] || ''}/>
                })}
                </div>
            </div>
            {props.isOwner && <div>
                <Button color={'secondary'} variant="contained" onClick={props.goToEditMode}>edit</Button>
            </div>}
        </div>
    )
}
