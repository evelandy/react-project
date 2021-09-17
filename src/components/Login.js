import React, { useState, useEffect } from 'react';
import MainPage from './MainPage';
import '../styles/login.css';
import {useHistory } from 'react-router-dom';


function Login() {
    const [meetingInfo, setMeetingInfo] = useState([]);
    const [admin, setAdmin] = useState(false);
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();
    const handleLogin = () => history.push('/admin');
    const handleLogout = () => history.push('/');
    useEffect(() => {
        fetch('http://localhost:3000/login')
        .then(res => res.json())
        .then(data => setAdmin(data['admin']))
    })
    const handleSubmit = () => {
        const username = 'admin';
        const password = 'pass';
        if(login.username === username && login.password === password){
            fetch('http://localhost:3000/login', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"admin": true})
            })
            .then(handleLogin())
        }
    }
    const logOut = () => {
        fetch('http://localhost:3000/login', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"admin": false})
        })
        .then(handleLogout())
    }
    const handleChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    }
    return (
        <div className="main_container">
            <MainPage meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} />
            {   
            admin === false 
                ? 
                <form className="login_contianer" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={login.name} name="username" type="text" placeholder="enter username" />
                    <input onChange={handleChange} value={login.password} name="password" type="password" placeholder="enter password" />
                    <button type="submit">Login</button>
                </form> 
                :
                <button className="logout" onClick={logOut} type="button">Log Out</button>
            }
        </div>
    );
}

export default Login;

// this component logs admin in to see the cards. it calls a PUT method on the DB and if admin is false it sets to true and vice versa
//THIS component uses React Router to LogIn AND LogOut