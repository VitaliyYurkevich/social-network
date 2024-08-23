import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.css'
import {addPostAC, deletePostAC, PostsPropsType, UserProfilePropsType} from "../../../../../redux/profile-reducer";
import {AppStateType} from "../../../../../redux/redux-store";
import AltPost from "./AltPost";


const AltPosts: React.FC<{ isOwner: boolean }> = ({ isOwner }) => {
    const  userProfile: UserProfilePropsType  = useSelector((state: AppStateType) => state.profilePage)
    // @ts-ignore
    const posts:Array<PostsPropsType> = useSelector((state: AppStateType)=> state.profilePage.posts)
    const dispatch = useDispatch()

    const [newPostText, setNewPostText] = useState('')

    const onAddPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        debugger
        dispatch(addPostAC(newPostText))
        setNewPostText('')
    }

    const addLikes = (id: number, userId: number) => {
        return console.log('')
    }

    const postsElements = posts
        .map((p) => (
            <AltPost
                key={p.id}
                message={p.message}
                likesCount={p.likeCount}
                id={p.id}
                profile={userProfile}
                isOwner={isOwner}
                addLikes={(postId) => dispatch(addLikes(postId, userProfile.userId))}
                deletePost={(postId) => dispatch(deletePostAC(postId))}
            />
        ))

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {isOwner && (
                <form className={`form--primary ${s.form}`} onSubmit={(e) => onAddPost(e)}>
                    <input
                        className="form--primary-input"
                        type="text"
                        placeholder="Enter your post..."
                        value={newPostText}
                        onChange={(e) => setNewPostText(e.target.value)}
                    />
                    <button className="button button--primary form--primary-button">Add post</button>
                </form>
            )}
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}

export default AltPosts
