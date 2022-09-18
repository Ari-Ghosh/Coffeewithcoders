import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from ".././../../context/UserAuthContext";
import GoogleButton from "react-google-button";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { db } from "../../../firebase";

const Signup = () => {
    const [school, setSchool] = useState("");
    const [email, setEmail] = useState("");
    const [admNum, setAdmNum] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const {user} = await signUp(email, password);

            // Add a new document in collection "users"
            await setDoc(doc(db, "students", (user.uid)), {
              school: {school},
              admission_number: {admNum},
              email: {email}
            });

            
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-wrapper </div>">
            <div className="Signup">
                <img src="original-be9f4c8d2ca9bbfdfeffc1b677b99fab.webp" height={`100%`} />
                <div className="form-wrapper">
                    <div className="form">
                <h2 className="form-header">Sign Up</h2>
                {error && <div className="danger">{error}</div>}
                <form onSubmit={handleSubmit} className="form-body">
                    <input type="text" placeholder="School" onChange={(e) => {
                                setSchool(e.target.value);
                            }} />
                    <input type="text" placeholder="Admission Number" onChange={(e) => {
                                setAdmNum(e.target.value);
                            }} />
                    <input type="email" placeholder="Email" onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            
                    <input type="password" placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} />

                    <button type="Submit">
                        Sign Up
                    </button>
                </form>
                <div className="logIn">
                    Already have an account? <Link to="/">Log In</Link>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;



// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
  
// }