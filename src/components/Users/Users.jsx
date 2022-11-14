import axios from "axios";
import React from "react";

import classes from './Users.module.css';
import userPhoto from '../../assets/images/blank-photo.png';

class Users extends React.Component {
    onFollow = (userId) => {
        this.props.follow(userId);
    }

    onUnfollow = (userId) => {
        this.props.unfollow(userId);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <img alt="userPhoto" src={user.photos.small === null ? userPhoto : user.photos.small} className={classes.userPhoto} />
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { this.onUnfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.onFollow(user.id) }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.city"}</div>
                                <div>{"user.location.country"}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;