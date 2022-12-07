import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Navigate } from "react-router-dom";
import { compose } from "redux";

import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import classes from "../common/FormsControls/FormsControls.module.css";
import withRouter from "../functions/withRouter";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type="password" component={Input} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox" />Remember me
            </div>
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && <Field placeholder="Symbols from image" name={"captcha"} component={Input} validate={[required]} />}
            {error &&
            <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose(connect(mapStateToProps, {login}), withRouter)(Login);