import React from 'react';
import classes from "./ProfileInfo.module.css";
import {UserProfilePropsType} from "../../../redux/profile-reducer";
import {LoaderInfinity} from "../../loader/LoaderInfinity";

type ProfileInfoPropsType = {
    userProfile: UserProfilePropsType
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.userProfile){
        return <LoaderInfinity />
    }
    console.log(props.userProfile)
    let ava = 'https://bogatyr.club/uploads/posts/2023-03/thumbs/1679425750_bogatyr-club-p-zvezdnoe-nebo-s-lunoi-foni-vkontakte-2.jpg'
    return (
        <div>
            <div>
                <img
                    src={ava}/>
            </div>
            <div className={classes.descriptionBlock}>
                <div>{props.userProfile.fullName}</div>
                <div>Обо мне: {props.userProfile.aboutMe}</div>
                <img src={props.userProfile.photos.large}/>
                ava + decription
            </div>
        </div>
    );
};

