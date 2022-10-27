import React from "react";

import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    const posts = [
        {id: 1, message: 'Welcome!', likesCount: 20, dislikesCount: 2},
        {id: 2, message: 'How are you?', likesCount: 100, dislikesCount: 5},
        {id: 3, message: 'Call me ASAP', likesCount: 13, dislikesCount: 47}
    ]

    const postsElements = posts.map(p => <Post postId={p.id} message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);

    return (        
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;