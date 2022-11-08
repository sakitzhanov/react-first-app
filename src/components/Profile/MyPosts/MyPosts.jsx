import React from "react";

import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post postId={p.id} message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);
    const newPostElement = React.createRef();

    const onAddPost = () => {
        const action = addPostActionCreator();
        props.dispatch(action);
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (        
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder="Enter text" onChange={ onPostChange } ref={ newPostElement } value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;