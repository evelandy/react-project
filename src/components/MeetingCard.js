import React from 'react';
import DeleteMeeting from './DeleteMeeting';
import '../styles/meetingcard.css';
import WeatherMap from './WeatherMap';

function MeetingCard({meet}) {
    return (
        <li className="card">
            <label htmlFor="name">NAME</label>
            <h4 name="name" id="name">{meet.name}</h4>
            <label htmlFor="phone">PHONE</label>
            <h4 name="phone" id="phone">{meet.phone}</h4>
            <label htmlFor="email">EMAIL</label>
            <h4 name="email" id="email">{meet.email}</h4>
            <label htmlFor="date">DATE</label>
            <h4 name="date" id="date">{meet.date}</h4>
            <label htmlFor="description">DESCRIPTION</label>
            <h4 name="description" id="description">{meet.description}</h4>
            <WeatherMap date={meet.date} />
            <DeleteMeeting meeting={meet} />
        </li>
    );
}

export default MeetingCard;

// this is the card that shows the meeting etc