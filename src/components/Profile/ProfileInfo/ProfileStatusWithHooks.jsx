import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import classes from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {editMode
                ?
                <div>
                    <input onBlur={() => {
                            setEditMode(false);
                            props.updateStatus(status);
                        }}
                        onChange={onStatusChange}
                        autoFocus
                        value={status}
                    />
                </div>
                :
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{status}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;