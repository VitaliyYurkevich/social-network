import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.webp";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../commons/paginator/Paginator";
import {Button} from "@mui/material";


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


    return (
        <div style={{marginLeft: 300, marginTop: 100}}>
            {
                props.users.map((u, index) => {
                    return (
                        <div className={classes.userArray} key={index}>
                            <span key={index}>
                                <div>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img className={classes.img}
                                             src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        u.followed ?
                                            <Button color={'error'} variant="contained" disabled={props.followingInProgress.some(id => id === u.id)}
                                                    onClick={() => {
                                                        props.unFollowTC(u.id)
                                                    }}>UnFollow</Button>
                                            :
                                            <Button color={'secondary'} variant="contained" onClick={() => {
                                                props.followTC(u.id)
                                            }}
                                                    disabled={props.followingInProgress.some(id => id === u.id)}>Follow</Button>}
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
            <Paginator portionSize={10} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUserCount={props.totalUserCount}/>
        </div>
    );
};

export default Users;
