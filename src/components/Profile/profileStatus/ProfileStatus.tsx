import React, {useState} from 'react';
import classes from "./ProfileStatus.module.css";


type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

   let [editMode, setEditMode] = useState(false)


    return (
        <div>
            {editMode && <div>
                <input autoFocus={true} onBlur={() => setEditMode(false)} value={props.status} />
            </div>}
            {!editMode && <div className={classes.div}>
                <span onClick={()=> setEditMode(true)}>{props.status}</span>
            </div>}
        </div>

    );
};


