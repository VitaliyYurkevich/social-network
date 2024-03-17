import React from 'react';
import classes from "./FormsControls.module.css";


export const FormsControl = ({input, meta, child, ...props}:any) => {

    const hasError =  meta.touched && meta.error

    return (
        <div className={classes.formControl + "" + (hasError ? classes.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props: any) => {

    const {input, meta, children, ...restProps} = props

    return <FormsControl {...props} ><textarea {...input} {...restProps}/></FormsControl>
};


export const Input = (props: any) => {

    const {input, meta, children, ...restProps} = props

    return <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
};
