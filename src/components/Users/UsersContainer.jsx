import axios from "axios";
import React from "react";

import { connect } from "react-redux";
import { follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, unfollow } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
    onFollow = (userId) => {
        this.props.follow(userId);
    }

    onUnfollow = (userId) => {
        this.props.unfollow(userId);
    }

    onSetCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "00c4cff9-0715-40db-b8f8-55d43746c85c"
            }
        })
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                ? <Preloader />
                : null
                }
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onSetCurrentPage={this.onSetCurrentPage}
                    onUnfollow={this.onUnfollow}
                    onFollow={this.onFollow}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching
})(UsersContainer);