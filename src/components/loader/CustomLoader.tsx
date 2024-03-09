import React from 'react';
import classes from "./Loader.module.css";

const CustomLoader = () => {
    return (
        <ul className={classes.ul}>
            <li className={classes.li}></li>
            <li className={classes.li}></li>
            <li className={classes.li}></li>
            <li className={classes.li}></li>
            <li className={classes.li}></li>
        </ul>
    );
};

export default CustomLoader;