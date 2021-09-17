import React from 'react';
import '../styles/login.css';
import {useHistory} from 'react-router-dom';

function LandingPage() {
    const history = useHistory();
    const handleClick = () => history.push('/login');
    return (
        <div className="lp_container">
            <h3>Welcome</h3>
            <button className="meeting_btn" onClick={handleClick}>
                Set a meeting
            </button>
        </div>
    );
}

export default LandingPage;


//this component uses React Router to go from landing page to meeting/login page