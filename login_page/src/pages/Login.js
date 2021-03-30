import React, { useState } from 'react';
import icon from '../images/avatar_icon.png';

const API_URL = "https://idu-test.datazoo.com/api/v2/auth/sign_in";
export default function Login() {
    const [data, setData] = useState(null);

    // fetch data from the data zoo api
    async function fetch_login(user, pass) {
        const url = `${API_URL}`;        
        let login = await fetch(url, {
            method: "POST",
            body: JSON.stringify({username: user, password: pass})
        })
        .then(data => data.json())
        .then(response => {
            setData(response.error);
            return response;
        })
    
        .catch((error) => {
            console.error(error);
        })
        return login;
    }

    // create a login form for the login page
    function LoginForm() {
        // useStates for the username and password
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
    
        return (
            <div>
                <form
                 onSubmit={async(e) => {
                    e.preventDefault();
                 }}>
                <h2>Login to account</h2>
                <img src={icon} alt="Icon" />
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
                    setData(data);
                    setUsername("");
                    setPassword("");
                   
                }}>Submit</button>
                <button onClick={() => {
                    setUsername("");
                    setPassword("");
                    setData("");
                }}>Cancel</button>
                </form>
                 {data != null ? <p>{data}</p> : null}
            </div>
        )
    }
    return(
        <div className = "Login">
            <LoginForm />
        </div>
    )
}