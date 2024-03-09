import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, InitialStateProfileType, updateNewPostAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";


type MapStatePropsType = {
    profilePage: InitialStateProfileType
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPost: (newText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        profilePage: state.profilePage
    }
}


export const MyPostsContainer = connect(mapStateToProps, {
    addPost: addPostAC,
    updateNewPost: updateNewPostAC
}) (MyPosts)




