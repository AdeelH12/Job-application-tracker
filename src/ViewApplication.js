import { useState } from "react";

function ViewApplication({ jobs, setJobs}) {


    const [filter, setFilter] = useState("All");

    function deleteJob(indexToDelete) {
    const updatedJobs = jobs.filter((_, index) => index !== indexToDelete);
    setJobs(updatedJobs);
  }

    const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.status.toLowerCase() === filter.toLowerCase());

      return(
<div>
      <h2>All Applications</h2>

      <label htmlFor="statusFilter">Filter by Status: </label>
      <select
        id="statusFilter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <br /><br />

      {filteredJobs.length === 0 ? (
        <p>No job applications found.</p>
      ) : (
        <ul>
          {filteredJobs.map((job, index) => (
            <li key={index}>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Title:</strong> {job.title}</p>
              <p><strong>Date:</strong> {job.date}</p>
              <p><strong>Status:</strong> {job.status}</p>
              <p><strong>Link:</strong> <a href={job.link} target="_blank" rel="noreferrer">View Job</a></p>
              <p><strong>Notes:</strong> {job.notes}</p>

              <button onClick={() => deleteJob(index)}>Delete</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
      )
 
}

export default ViewApplication;