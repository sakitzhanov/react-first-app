import React from "react";

import Header from "./Header";
import { connect } from "react-redux";
import { confirm, logout } from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.confirm();
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

export default connect(mapStateToProps, {confirm, logout})(HeaderContainer);