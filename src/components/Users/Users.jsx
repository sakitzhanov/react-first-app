import React from "react";

import classes from './Users.module.css';
import userPhoto from '../../assets/images/blank-photo.png';
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({ currentPage, totalUsersCount, pageSize, onSetCurrentPage, ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onSetCurrentPage={onSetCurrentPage} />
            {
                props.users.map(user => <User
                    id={user.id}
                    followed={user.followed}
                    photos={user.photos}
                    name={user.name}
                    status={user.status}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />)
            }
        </div>
    )
}

export default Users;