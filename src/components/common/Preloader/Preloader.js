import React from "react";

import loader from "../../../assets/images/loader.svg"

const Preloader = (props) => {
    return (
        <div>
            <img alt="loader-animation" src={loader} />
        </div>
    )
}

export default Preloader;