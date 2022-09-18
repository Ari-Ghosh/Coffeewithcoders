import React, { useState } from "react";
import './Profile.css'
import Card from "../../UI/Card";
import Calendar from "./Calendar";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useEffect } from 'react';

const Profile = () => {
    const { loggeduser } = useUserAuth();
    const [userData, setUserData] =useState("");

    console.log(loggeduser);
    console.log(userData);
    const img = 'blank-profile-picture-973460__340.webp'
    return (
        <Card className="Profile">
            <div className="HeaderSection">
                <h2>Profile</h2>
                <button type="button">Edit</button>
            </div>
            <div className="PictureSection">
                <div className="ProfileDesigner">
                    <div className="ProfilePicture">
                        <img src="https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/ProfileImages%2Fblank-profile-picture-973460__340.webp?alt=media&token=d34b8edb-6bda-4301-b910-a6d7c08e9a2c"/>
                    </div>
                </div>
                <div className="ProfileName"></div>
            </div>
            <div id="Details">
                <h2>Details</h2>
                <div className="UserDetails">
                    <div className="Name"><span className="NameTag">Name:</span><span className="NameValue"></span></div>
                    <div className="Class"><span className="ClassTag">Class :</span><span className="ClassValue">12</span></div>
                    <div className="Roll"><span className="RollTag">Roll :</span><span className="RollValue">34</span></div>
                    <div className="AddmissionNumber"><span className="AdmTag">Addmission Number :</span><span className="NameValue">ABCD1234</span></div>
                </div>
            </div>
            <h2 className="Profile HeaderSection">Calendar</h2>
            <Card className="Calendar">
                <Calendar />
            </Card>
        </Card>
    );
};

export default Profile;