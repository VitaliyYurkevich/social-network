import React from 'react';
import classes from "./FormsControls.module.css";




export const Textarea = ({input, meta, ...props}:any) => {


    return (
        <div className={classes.formControl + "" + classes.error}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <span>{"some error"}</span>
        </div>
    );
};
