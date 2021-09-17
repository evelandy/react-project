import React, { useState, useEffect } from 'react';
import MeetingList from './MeetingList';
import NewMeetingForm from './NewMeetingForm';
import '../styles/mainpage.css';

function MainPage({meetingInfo, setMeetingInfo}) {
    const [meetings, setMeetings] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        fetch('http://localhost:3000/meetings') //3000 59981
        .then(res => res.json())
        .then(data => setMeetingInfo(data))
    }, [setMeetingInfo])
    const addMeeting = (meeting) => {
        setMeetings([...meetings, meeting])
    }
    useEffect(() => {
        fetch('http://localhost:3000/login')
        .then(res => res.json())
        .then(data => setLoggedIn(data["admin"]))
    }, [setLoggedIn])

    return (
        <div>
            {loggedIn === true ? <MeetingList meetingInfo={meetingInfo} /> : <NewMeetingForm addMeeting={addMeeting} />}
        </div>
    );
}

export default MainPage;

