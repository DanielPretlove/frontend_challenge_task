import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    return (
        <div>
            <form
             onSubmit={(e) => {
                e.preventDefault();
             }}>
            <h2>General settings</h2>
            <label htmlFor="username">
            <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value);
            }}></input>
            </label>
            <label htmlFor="password">
            <input
             type="password"
             placeholder="Password"
             name="pwd"
             value={password}
             onChange={(e) => {
                 setPassword(e.target.value);
             }}
             ></input>
            </label>
            <button onClick={() => {
                setError("bad")
            }}>Submit</button>
            <button onClick={() => {
                setUsername("");
                setPassword("");
            }}>Cancel</button>
             </form>
             {error ? (
            <div className="Error">
              <p>{error}</p>
            </div>
          ) : (
            ""
          )}
        </div>
    )
}
export default function Login() {
    return(
        <div className = "Login">
            <LoginForm />
        </div>
    )
}