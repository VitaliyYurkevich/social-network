import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfilePropsType} from "../../redux/profile-reducer";

type ProfileProsType = {
    userProfile: UserProfilePropsType
}

const Profile = (props: ProfileProsType) => {


    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </div>

    );
};

export default Profile;