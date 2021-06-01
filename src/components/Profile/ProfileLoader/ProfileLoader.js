import React from 'react'
import {css} from "@emotion/react";
import SyncLoader from 'react-spinners/SyncLoader'

let ProfileLoader = ({profileLoader}) => {
    const override = css`display: block;margin: 200px auto;border-color: red;`;
    let color = "rgb(0, 13, 131)"

    return (
        <div className="sweet-loading d-flex">
            <SyncLoader color={color} loading={profileLoader} css={override} size={40}/>
        </div>
    );
}

export default ProfileLoader