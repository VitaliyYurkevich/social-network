import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.webp";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersComponentPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    users: Array<UserType>
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    toggleIsFollowingProgress: (id: number, isFetch: boolean) => void
    followingInProgress: Array<boolean | number>
}

const Users = (props: UsersComponentPropsType) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    const pages = []
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? classes.selectedPage : ''}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map((u, index) => {


                    return (
                        <div key={index}>
                            <span key={index}>
                                <div>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img className={classes.img}
                                             src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                props.unFollowTC(u.id)
                                            }}>UnFollow</button>
                                            :
                                            <button  onClick={() => {
                                                props.followTC(u.id)
                                            }} disabled={props.followingInProgress.some(id => id === u.id)}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div><div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.country'}</div><div>{'u.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    )

                })
            }
        </div>
    );
};

export default Users;
