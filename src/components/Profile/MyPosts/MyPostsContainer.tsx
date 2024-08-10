import React from 'react';
import {addPostAC, deletePostAC, InitialStateProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";


type MapStatePropsType = {
    profilePage: InitialStateProfileType
}

type MapDispatchPropsType = {
    addPost: (newText: string) => void
    deletePostAC: (postId: number) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        profilePage: state.profilePage
    }
}


export const MyPostsContainer = connect(mapStateToProps, {
    addPost: addPostAC,
    deletePostAC
}) (MyPosts)




