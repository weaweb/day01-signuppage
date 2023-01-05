import React from "react";

function Register() {
    return (
        <div className="register">
            <div className="register-title">
                <h3>Create an account</h3>
                <p>Let's get started with your 30 day free trial</p>
            </div>
            <form className="register-form">

                <input name="name" placeholder="Name"></input>
                <input name="email" type="email" placeholder="Email"></input>
                <input name="password" type="password" placeholder="Password"></input>
                <button type="submit">Create Account</button>
            </form>


            <p>Already  have an account? <a href="#target">Login</a></p>
        </div>
    )
}

export default Register;