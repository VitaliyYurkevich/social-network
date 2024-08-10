import React from 'react';
import classes from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../commons/formControls/FormsControls";
import {Button, TextField} from "@mui/material";


export const MyPosts = React.memo((props: MyPostsPropsType) => {

    const postsElements = props.profilePage.posts.map((p, index) => {
        return (
            <div>
                <Post key={index} message={p.message} likeCount={p.likeCount}/>
                <Button color={'secondary'} variant="contained" onClick={()=> props.deletePostAC(p.id)}>DELETE</Button>
            </div>


        )
    })

    let addPost = (formData: FormDataType) => {
        props.addPost(formData.post)
    }

    return (
        <div className={classes.postBlock}>
            <div>
                <h3>My Posts</h3>
                <AddPostReduxForm onSubmit={addPost}  />
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export type FormDataType = {
    post: string
}

const maxLength10 = maxLengthCreator(10)

export const addPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <TextField
                    color={'secondary'}
                       placeholder={'Enter your text'}
                      label={'My post'}
                       variant="standard"

                />
            </div>
            <div>
                <Button type={"submit"} color={'secondary'} variant="contained">Add post</Button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<FormDataType>({
    form: 'post'
})(addPostForm)