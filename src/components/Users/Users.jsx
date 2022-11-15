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

    onSetCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(val => (
                        <span onClick={() => { this.onSetCurrentPage(val) }} className={this.props.currentPage === val && classes.selectedPage}>{val}</span>
                    ))}
                </div>
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