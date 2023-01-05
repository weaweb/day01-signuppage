import React from "react";

function App() {
    return (
        <div className="container">
            <div className="intro">
                <div className="intro-left">
                    <div className="intro-panel">
                        <div className="intro-panel--title">
                            <h1 style={{ fontSize: "72px" }}>❡</h1>
                        </div>
                        <div className="intro-panel--middle"><div>
                            <h1>Digital platform for distance learning</h1>
                            <p>You will never know everything</p>
                            <p>But you will know more</p></div>
                        </div>
                        <div className="intro-panel--footer">
                            <p>Copyright © {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
                <div className="intro-right">
                    <div className="intro-right--title">
                        <h3>Create an account</h3>
                        <p>Let's get started with your 30 day free trial</p>
                    </div>
                    <form className="intro-register--form">

                        <input name="name" placeholder="Name"></input>
                        <input name="email" type="email" placeholder="Email"></input>
                        <input name="password" type="password" placeholder="Password"></input>
                        <button type="submit">Create Account</button>
                    </form>


                    <p>Already  have an account? <a href="#target">Login</a></p>


                </div>
            </div>
        </div>
    )
}

export default App;