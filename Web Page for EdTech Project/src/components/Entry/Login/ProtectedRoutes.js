import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";

const ProtectedRoutes = (props) =>{
    let {user} = useUserAuth();
    if(!user){
        return <Navigate to="/"/>
    }
    return <React.Fragment>{props.children}</React.Fragment>;
};

export default ProtectedRoutes