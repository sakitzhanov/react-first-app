import React from "react";

import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post postId={p.id} message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);
    const newPostElement = React.createRef();

    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    const changePostText = () => {
        const text = newPostElement.current.value;
        props.changePostText(text);
    }

    return (        
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement } value={props.postText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;