import React from "react";
import { Field, reduxForm } from "redux-form";

import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import classes from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <div>
                        <b>Full name:</b>
                        <Field placeholder={"Full name"} name={"fullName"} component={Input} validate={[]} />
                    </div>
                    <div>
                        <b>Looking for a job:</b>
                        <Field name={"lookingForAJob"} component={Input} type="checkbox" validate={[]} />
                    </div>
                    <div>
                        <b>Job description:</b>
                        <Field placeholder="What kind of job" name={"lookingForAJobDescription"} component={Textarea} validate={[]} />
                    </div>
                    <div>
                        <b>About me:</b>
                        <Field placeholder="About me" name={"aboutMe"} component={Textarea} validate={[]} />
                    </div>
                    <div>
                        <b>Contacts</b> {Object.keys(props.profile.contacts).map(val => <div style={{padding: '0px 0px 0px 50px'}}>
                            {val}: <Field placeholder={val} name={`contacts.${val}`} component={Input} validate={[]} />
                        </div>)}
                    </div>          
                </div>
                {props.error &&
                <div className={classes.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile',
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm);

export default ProfileDataReduxForm;