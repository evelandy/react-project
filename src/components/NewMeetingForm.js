import React, { useState } from 'react';
import '../styles/meetingform.css';

function NewMeetingForm({addMeeting}) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        description: ""
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const updateFormData = {...formData}
        fetch("http://localhost:3000/meetings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateFormData)
        })
        .then(res => res.json())
        .then(data => addMeeting(data))
        .then((data) => {
            setFormData({
                name: "",
                phone: "",
                email: "",
                date: "",
                description: ""
            })
            window.location.reload(true)
        })
    }
    return (
        <div>
            <form className="form_container" onSubmit={handleSubmit}>
                <h2>Set Meeting</h2>
                <input type="text" name="name" placeholder="enter name" value={formData.name} onChange={handleChange} />
                <input type="number" name="phone" placeholder="enter phone" value={formData.phone} onChange={handleChange} />
                <input type="email" name="email" placeholder="enter email" value={formData.email} onChange={handleChange} />
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
                <textarea type="text" name="description" placeholder="enter reason for meeting" value={formData.description} onChange={handleChange} />
                <button type="submit">Set Meeting</button>
            </form>
        </div>
    );
}

export default NewMeetingForm;

// this is the form component that uses POST method on the endpoint that adds each field in the input from the form