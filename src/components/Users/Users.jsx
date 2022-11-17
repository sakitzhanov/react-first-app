import React from "react";

import classes from './Users.module.css';
import userPhoto from '../../assets/images/blank-photo.png';
import { NavLink } from "react-router-dom";
import { followApi } from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(val => (
                    <span key={val} onClick={() => { props.onSetCurrentPage(val) }} className={props.currentPage === val ? classes.selectedPage : undefined}>&nbsp;{val}</span>
                ))}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <NavLink to={'/profile/' + user.id}>
                            <div>
                                <img alt="userPhoto" src={user.photos.small === null ? userPhoto : user.photos.small} className={classes.userPhoto} />
                            </div>
                        </NavLink>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    followApi.unfollow(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.onUnfollow(user.id);
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    followApi.follow(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.onFollow(user.id);
                                            }
                                        })
                                }}>Follow</button>
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

export default Users;