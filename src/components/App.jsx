import React from "react";
import Register from "./Register";

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
                    <Register />

                </div>
            </div>
        </div>
    )
}

export default App;