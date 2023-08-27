import React from "react";
import "./login-form.css";
import { Routes, Route } from "react-router-dom";

export default function Login() {
    return(
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

function LoginPage() {
    return(
        <div>
            <h1>Login page</h1>
        </div>
    );
}