import React from "react";

import classes from './Users.module.css';
import userPhoto from '../../assets/images/blank-photo.png';
import { NavLink } from "react-router-dom";

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
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id);
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id);
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