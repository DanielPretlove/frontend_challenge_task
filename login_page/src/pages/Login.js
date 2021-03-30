import React, { useState } from 'react';

const API_URL = "https://idu-test.datazoo.com/api/v2/auth/sign_in";


//  response success: {"message": "Logged in!", "sessionToken": "{value}"}
async function fetch_login(user, pass) {
    const url = `${API_URL}`;

    let login = await fetch(url, {
        method: "POST",
        body: JSON.stringify({username: user, password: pass})
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
        return response;
    })

    .catch((error) => {
        console.error(error);
    })

    return login;
}


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
            id="username"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value);
            }}></input>
            </label>
            <label htmlFor="password">
            <input
             type="password"
             placeholder="Password"
             id="pwd"
             value={password}
             onChange={(e) => {
                 setPassword(e.target.value);
             }}
             ></input>
            </label>
            <button onClick={() => {
                fetch_login(username, password);
                setError("You do not have access to this environment, only to: Incorrect password detected");
            }}>Submit</button>
            <button onClick={() => {
                setUsername("");
                setPassword("");
            }}>Cancel</button>
              {error ? (
            <div className="Error">
              <p>{error}</p>
            </div>
          ) : (
            ""
          )}
             </form>
           
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