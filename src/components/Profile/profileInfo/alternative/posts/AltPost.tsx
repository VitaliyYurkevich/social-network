import React from 'react'
import cn from 'classnames'
import userPhoto from '../../../../../assets/images/user.webp'
import likeIcon from '../../../../../assets/images/like.png'
import removePost from '../../../../../assets/images/removePost.svg'

import s from './style.module.css'
import {UserProfilePropsType} from "../../../../../redux/profile-reducer";
import formatDate from "../../../../../helpers/formatDate";

type PropsType = {
    message: string
    likesCount: number
    id: number
    profile: UserProfilePropsType | null
    isOwner: boolean
    addLikes: (postId: number) => void
    deletePost: (postId: number) => void
}

const AltPost: React.FC<PropsType> = (props) => (
    <div className={s.item} key={props.id}>
        {props.profile && (
            <div className={s.user}>
                <div className={s.userInfo}>
                    <img
                        className={cn(s.userPhoto)}
                        src={props.profile.photos?.large ? props.profile.photos?.large : userPhoto}
                        alt=""
                    />
                    <div className={s.userDescription}>
                        <div className={s.name}>{`${props.profile.fullName}`}</div>
                    </div>
                </div>
                {props.isOwner && (
                    <img className={s.removePost} onClick={() => props.deletePost(props.id)} src={removePost} alt="" />
                )}
            </div>
        )}
        <div className={s.bottomBlock}>
            <div className={s.text}>{props.message && props.message}</div>
            <div className={s.likes} onClick={() => props.addLikes(props.id)}>
                <span className={s.likeCount}>{props.likesCount}</span>
                <img src={likeIcon} alt="" />
            </div>
        </div>
    </div>
)

export default AltPost
