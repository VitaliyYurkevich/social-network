import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.webp";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../commons/paginator/Paginator";
import {Button, Pagination} from "@mui/material";
import styled from "styled-components";
import s from "./Users.module.css"


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
        <div className={s.users} /*style={{marginLeft: 270, marginTop: 100}}*/>
            <div className={s.userContainer}>
                {
                    props.users.map((u, index) => {
                        return (
                            <div className={s.user} key={index}>
                            <span key={index}>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img className={s.photo}
                                             src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </NavLink>
                                <div className={s.fol}>
                                    {
                                        u.followed ?
                                            <Button color={'error'} variant="contained"
                                                    disabled={props.followingInProgress.some(id => id === u.id)}
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
                                <span className={s.descriptionUser}>
                                    <div className={s.name}>{u.name}</div><div style={{maxWidth: 25}}>{u.status}</div>
                                </span>
                                <span className={s.descriptionUser}>
                                    <div>{'u.location.country'}</div><div>{'u.location.city'}</div>
                                </span>
                            </span>
                            </div>
                        )
                    })
                }
            </div>

            <StyledPaginator portionSize={10} pageSize={props.pageSize} currentPage={props.currentPage}
                             onPageChanged={props.onPageChanged}
                             totalUserCount={props.totalUserCount}/>

        </div>

    );
};


const StyledPaginator = styled(Paginator)`
  padding-top: 50px;
  background-color: black;
`

export default Users;
