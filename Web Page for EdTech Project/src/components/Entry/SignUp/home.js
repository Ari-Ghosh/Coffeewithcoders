import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../../context/UserAuthContext";

const Home = () => {
    const { user, logOut } = useUserAuth();
    const logOutHandler = async () =>{
        try{
            await logOut();
        }catch (err){
            console.log(err.message);
        }
    }
    return (
        <React.Fragment>
            <div className="p-4 box mt-3 text-center">{`Hello, ${user.email} `}</div>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={logOutHandler}>Log Out</Button>
            </div>
        </React.Fragment>
    )
}

export default Home