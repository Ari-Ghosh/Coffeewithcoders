// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Route, Routes } from "react-router-dom";
// import Login from "./components/Login/Login";
// import ProtectedRoutes from "./components/Login/ProtectedRoutes";
// import Home from "./components/SignUp/home";
// import Signup from "./components/SignUp/SignUp";
// import { UserAuthContextProvider } from "./context/UserAuthContext";

// const Test = () => {
//     return (
//         <Container>
//             <Row>
//                 <UserAuthContextProvider>
//                     <Col>
//                         <Routes>
//                             <Route path='/' element={<Login />} />
//                             <Route path='/signup' element={<Signup />} />
//                             <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
//                         </Routes>
//                     </Col>
//                 </UserAuthContextProvider>
//             </Row>
//         </Container>
//     );
// }

// export default Test;