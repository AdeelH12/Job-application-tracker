import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ViewApplication from "./ViewApplication";
import AddApplication from "./AddApplication";

function App() {

   const [jobs, setJobs] = useState(() => {
    const storedJobs = localStorage.getItem("jobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  useEffect(() =>{

    localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])


   return (
    <Router>
    <div className="App">
      <h1>Job Application Tracker</h1>
      <button><Link to="/AddApplication" className="AddLink">Add a new job application</Link></button>


         <Routes>
          <Route path="/" element={<ViewApplication jobs={jobs} setJobs={setJobs}/>} />
          <Route path="/AddApplication" element={<AddApplication jobs={jobs} setJobs={setJobs}/>} />
        
        </Routes>
    </div>
    </Router>
  );
}

export default App;
