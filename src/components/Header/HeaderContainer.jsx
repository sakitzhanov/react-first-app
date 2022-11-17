import React from "react";

import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer"
import { authApi } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authApi.confirm()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);