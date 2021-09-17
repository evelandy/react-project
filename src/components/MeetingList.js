import React from 'react';
import MeetingCard from './MeetingCard';
import '../styles/meetingcard.css';

function MeetingList({meetingInfo}) {
    const renderMeetings = meetingInfo.map((meet, i) => <MeetingCard key={i} meet={meet}/>)
    return (
        <div className="main_card_container">
            <h2>Meetings</h2>
            <ul className="card_container">
                {renderMeetings}
            </ul>
        </div>
    );
}

export default MeetingList;