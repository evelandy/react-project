import React from 'react';

function DeleteMeeting({meeting}) {
    const handleSubmit = () => {
        fetch(`http://localhost:3000/meetings/${meeting.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then((data) => {
            window.location.reload(true);
        })
    }
    return (
        <button onClick={handleSubmit}>Delete Meeting</button>
    );
}

export default DeleteMeeting;

// this calls the delete method on the endpoint and deletes entry based on id