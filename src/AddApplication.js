import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddApplication({ jobs, setJobs }) {

    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [link, setLink] = useState("");
    const [notes, setNotes] = useState("");
    const [showViewButton, setShowViewButton] = useState(false);

    let navigate = useNavigate();

    function comapnyName(e) {

        setCompany(e.target.value);
    }

    function jobTitle(e) {

        setTitle(e.target.value);
    }

    function dateCapture(e) {

        setDate(e.target.value);
    }

    function statusCapture(e) {

        setStatus(e.target.value);
    }

    function jobURL(e) {

        setLink(e.target.value);
    }

    function addNotes(e) {

        setNotes(e.target.value);
    }

    function saveButton(e) {

        e.preventDefault();
        // if the form is filled in
        if (company && title && date && status && link && notes) {

            // then return an object called 'jobObj'
            const jobObj = {
                company,
                title,
                date,
                status,
                link,
                notes,
            };

            // we are then going to use that object and set the jobs to whatever the user typed.
            setJobs([...(jobs || []), jobObj]);

            setCompany("");
            setTitle("");
            setDate("");
            setStatus("")
            setLink("");
            setNotes("");

            alert("Job Succesfully Added")

            setShowViewButton(true)

        } else {

            alert("Please complete the form")
        }
    }

    function cancelButton(e) {

        e.preventDefault();

        const confrim = window.confirm("Are you sure you want to cancel?");

        if (confrim) {
            setCompany("");
            setTitle("");
            setDate("");
            setStatus("")
            setLink("");
            setNotes("");
        }

    }
    return <>
        <form>
            <label>Enter Company Name:</label>
            <input type="text" placeholder="Enter Company Name" onChange={comapnyName} value={company} />
            <br /><br />
            <label>Enter Job Title:</label>
            <input type="text" placeholder="Enter Job Title" onChange={jobTitle} value={title} />
            <br /><br />
            <label>Enter Date Applied On:</label>
            <input type="date" placeholder="Enter Date" onChange={dateCapture} value={date} />
            <br /><br />
            <label>Select Status: </label>
            <select onChange={statusCapture} value={status}>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>
            <br /><br />
            <label>Enter Job URL:</label>
            <input type="text" placeholder="Enter URL" onChange={jobURL} value={link} />
            <br /><br />
            <label>Enter Any Extra Info: </label>
            <input type="text" placeholder="Add notes here" onChange={addNotes} value={notes} />
        </form>

        <button onClick={cancelButton}>Cancel</button>
        <br /><br />
        <button onClick={saveButton}>Save</button>
        {showViewButton && <button
            onClick={() => navigate(`/`)}
        >
            View Jobs
        </button>}
    </>
}

export default AddApplication;