import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfilePropsType} from "../../redux/profile-reducer";

type ProfileProsType = {
    userProfile: UserProfilePropsType
    profileStatus: string
    updateUserStatusTC: (profileStatus: string) => void
}

const Profile = (props: ProfileProsType) => {


    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} profileStatus={props.profileStatus}
                         updateUserStatusTC={props.updateUserStatusTC}/>
            <MyPostsContainer/>
        </div>

    );
};

export default Profile;