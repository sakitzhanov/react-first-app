import React from "react";
import axios from "axios";
import withRouter from "../functions/withRouter";

import classes from './Profile.module.css';

import Profile from './Profile';
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
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