import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfilePropsType} from "../../redux/profile-reducer";
import styled from "styled-components";


type ProfileProsType = {
    userProfile: UserProfilePropsType
    profileStatus: string
    updateUserStatusTC: (profileStatus: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfileTC: (profile: UserProfilePropsType) => void
}

export const Profile = (props: ProfileProsType) => {



    return (
        <StyledDiv>
            <div>
                <ProfileInfo saveProfileTC={props.saveProfileTC}
                             savePhoto={props.savePhoto}
                             isOwner={props.isOwner} userProfile={props.userProfile}
                             profileStatus={props.profileStatus}
                             updateUserStatusTC={props.updateUserStatusTC}/>
            </div>
            <div style={{ paddingRight: 200 }}>
                <MyPostsContainer/>
            </div>
        </StyledDiv>
    );
};



const StyledDiv = styled.div`
   display: flex;
  justify-content: space-between;
`