import React from "react";
import { Navigate } from "react-router-dom";

import classes from './Profile.module.css';

import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import withRouter from "../functions/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId && this.props.userId) {
            userId = this.props.userId
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    {...this.props}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer);