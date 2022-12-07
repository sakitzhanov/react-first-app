import React from "react";
import { Navigate } from "react-router-dom";

import classes from './Profile.module.css';

import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import withRouter from "../functions/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = this.props.userId;

            if (!userId) {
                this.props.router.navigate('/login');
            }
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile
                    isOwner={!this.props.router.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
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
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
    // withAuthRedirect
)(ProfileContainer);