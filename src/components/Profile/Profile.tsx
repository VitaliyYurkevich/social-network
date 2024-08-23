import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfilePropsType} from "../../redux/profile-reducer";
import styled from "styled-components";
import AlternativeProfileInfo from "./profileInfo/alternative/altProfileInfo/AlternativeProfileInfo";


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
        <>
            <StyledDiv>

                    <ProfileInfo saveProfileTC={props.saveProfileTC}
                                 savePhoto={props.savePhoto}
                                 isOwner={props.isOwner} userProfile={props.userProfile}
                                 profileStatus={props.profileStatus}
                                 updateUserStatusTC={props.updateUserStatusTC}/>


                {/*<StyledMyPosts>
                <MyPostsContainer/>
            </StyledMyPosts>*/}
            </StyledDiv>
        </>
    );
};


const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  border-radius: 10px;
  //padding-left: 3.5%;
  //padding-top: 20px;
  background-color: var(--wrap-bg-color);
  margin-bottom: 50px;
  position: relative;
  //background-color: #ce1919;

`

const StyledSpan = styled.span`
  width: 100%;
  height: 20%;
  position: absolute;
  border-radius: 10px;
  background: rgb(47, 19, 218, 0.5);

  /*background: linear-gradient(90deg, rgba(47,19,218,1) 21%, rgba(101,82,214,0.5) 44%, rgba(59,62,77,0.5) 73%);*/
`

const StyledMyPosts = styled.div`
  color: var(--b-w-text-color);
  margin-right: 200px;
  margin-top: 20px;
  width: 200px;
  max-height: 500px;
  background-color: white;
`