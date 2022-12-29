import React from 'react';
import classes from './Login.module.css';
import {useState} from "react";

const Login = () => {
    
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const nameHandler = (e) => {
        setName(e.target.value);
    } 
    const pwHandler = (e) => {
        setPassword(e.target.value);
    }
    const clickHandler = () => {
        alert(username + " " + password);
        setName("");
        setPassword("");
    } 

    return (
        <div className={classes.login} >
            <div className={classes.username}>
                username: <input onChange={nameHandler} value={username} type="text"/> <br/>
            </div>
            <div className={classes.password}>
                password: <input onChange={pwHandler} value={password} type="password"/>
            </div>
            <br/>
            <div className={classes.btn}>
                <button onClick={clickHandler} >submit</button>
            </div>

        </div>
    )
}

export default Login;