import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from "./ProfileStatus.module.css";


type ProfileStatusPropsType = {
    profileStatus: string
    updateUserStatusTC: (profileStatus: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.profileStatus)

    useEffect(()=>{
        setStatus(props.profileStatus)

    }, [props.profileStatus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusTC(status)
    }



    return (
        <div>
            {editMode && <div>
                <input onChange={onChangeHandler} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>}
            {!editMode && <div className={classes.div}>
                <span onClick={activateEditMode}>{props.profileStatus || "------"}</span>
            </div>}
        </div>

    );
};


