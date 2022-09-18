import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import './Login.css';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";



const Login = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    let navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const loggedUser = localStorage.getItem("LoggedUser");
            if (loggedUser) {
                //     const { user } = await logIn(JSON.parse(loggedUser).email, JSON.parse(loggedUser).password);
                //     navigate("/home/dashboard");
                console.log(JSON.parse(loggedUser));
            }
            else {
                const { user } = await logIn(email, password);
                localStorage.setItem("LoggedUser", JSON.stringify({ 'email': user.email, 'password': password }));
            }
            navigate("/home/dashboard");
        } catch (err) {
            setError(err.message);
        }

    };



    return (
        <React.Fragment>
            <div className="login-wrapper wrapper">
                <div className="Login">
                    <img src="original-be9f4c8d2ca9bbfdfeffc1b677b99fab.webp" height={`100%`} />
                    <div className="form-wrapper">
                        <div className="form">
                            <h2 className="form-header">Welcome Back</h2>
                            {error && <div className="danger">{error}</div>}
                            <form onSubmit={handleSubmit} className="form-body">
                                <input type="email" placeholder="Email" onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />

                                <input type="password" placeholder="Password" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />

                                <button type="submit">
                                    Log In
                                </button>
                            </form>
                            <div className="signUp">
                                Don't have an account? <Link to='/signup'>SignUp</Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;