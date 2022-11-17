import React from "react";

import classes from './Profile.module.css';

import Profile from './Profile';
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import withRouter from "../functions/withRouter";
import { profileApi } from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }

        profileApi.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
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
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));