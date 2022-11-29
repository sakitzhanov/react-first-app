import React from "react";

import classes from './Users.module.css';
import userPhoto from '../../assets/images/blank-photo.png';
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const User = ({ id, followed, photos, name, status, followingInProgress, follow, unfollow }) => {
    return (
        <div key={id}>
            <span>
                <NavLink to={'/profile/' + id}>
                    <div>
                        <img alt="userPhoto" src={photos.small === null ? userPhoto : photos.small} className={classes.userPhoto} />
                    </div>
                </NavLink>
                <div>
                    {followed
                        ? <button disabled={followingInProgress.some(val => val === id)} onClick={() => {
                            unfollow(id);
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(val => val === id)} onClick={() => {
                            follow(id);
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{name}</div>
                    <div>{status}</div>
                </span>
                <span>
                    <div>{"user.location.city"}</div>
                    <div>{"user.location.country"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;