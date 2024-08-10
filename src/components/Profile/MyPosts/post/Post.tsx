import React from 'react';
import classes from "./Post.module.css";


type PostPropsType = {
    message: string
    likeCount: number

}



export const Post = (props:PostPropsType) => {
    return (
            <div className={classes.item}>
                <img src={'https://cs4.pikabu.ru/post_img/2016/05/23/11/1464032137128579754.jpg'}/>
                {props.message}
                <div>
                    <span>like {props.likeCount}</span>
                </div>
                <div>

                </div>
            </div>
    );
};

