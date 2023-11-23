import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import Home from "../pages/home";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";



const AppRouter: React.FC = () => (
    <BrowserRouter basename="/">
        <div className='app-container'>
            <div className="router-container">
                <Routes>
                    <Route path={AppRoutes.SignIn} element={<SignIn/>} />
                    <Route  path={AppRoutes.SignUp} element={<SignUp/>} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;