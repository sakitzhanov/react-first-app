import React from "react";

import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render = () => {
        return (
            <div>
                {this.state.editMode
                ?
                <div>
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status} />
                </div>
                :
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>}                
            </div>
        )
    }
}

export default ProfileStatus;