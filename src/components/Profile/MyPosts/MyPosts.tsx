import React, {ChangeEvent} from 'react';
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.profilePage.posts.map((p, index) => {
        return (
            <Post key={index} message={p.message} likeCount={p.likeCount}/>
        )
    })

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value
        props.updateNewPost(newText)
    }

    return (
        <div className={classes.postBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea onChange={onChangeHandler} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;