import Profile from "./Profile/Profile";
import React from "react";
import ProfileStats from "./ProfileStats/ProfileStats";
import { Card } from "@mui/material";

const Dashboard = () => {
    return(
        <React.Fragment>
            <ProfileStats/>
            <Profile/>
        </React.Fragment>
    )
}

export default Dashboard;