import { PlayCircleFilled } from "@mui/icons-material";
import React from "react";
import './Modules.css'

const Module = (props) => {

    return (
        <div className="Module">
            <div className="Title"><h2>{`${props.name}`}</h2></div>
                <a href={props.link} className="Videos" >
                    <PlayCircleFilled className="play" />
                </a>
        </div>
    );
}

export default Module;