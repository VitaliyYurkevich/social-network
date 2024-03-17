import React from 'react';
import classes from "./ProfileInfo.module.css";
import {UserProfilePropsType} from "../../../redux/profile-reducer";
import {LoaderInfinity} from "../../loader/LoaderInfinity";
import {ProfileStatus} from "../profileStatus/ProfileStatus";


type ProfileInfoPropsType = {
    userProfile: UserProfilePropsType
    profileStatus: string
    updateUserStatusTC: (profileStatus: string) => void
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.userProfile) {
        return <LoaderInfinity/>
    }
    let ava = 'https://bogatyr.club/uploads/posts/2023-03/thumbs/1679425750_bogatyr-club-p-zvezdnoe-nebo-s-lunoi-foni-vkontakte-2.jpg'
    return (
        <div>
            {/* <div>
                <img
                    src={ava}/>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <div>{props.userProfile.fullName}</div>
                <div>Обо мне: {props.userProfile.aboutMe}</div>
                <img src={props.userProfile.photos.large}/>
                ava + decription
                <ProfileStatus profileStatus={props.profileStatus} updateUserStatusTC={props.updateUserStatusTC}/>
            </div>
        </div>
    );
};

