import React from "react";
import { Field, reduxForm } from "redux-form";

import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post key={p.id} postId={p.id} message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);

    const onSubmit = (formData) => {
        props.addPost(formData);
    }

    return (        
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onSubmit} />
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                placeholder="Enter text"
                name="text"
                component={Textarea}
                validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'post'
})(AddNewPostForm);

export default MyPosts;