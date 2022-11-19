import React from "react";
import { Navigate } from "react-router-dom";

import classes from './Profile.module.css';

import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import withRouter from "../functions/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 26723;
        }

        this.props.getProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);