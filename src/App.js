// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import InterviewDetail from "./pages/InterviewDetail/InterviewDetail";
import JobBoard from "./pages/JobBoard";
import JobDetails from "./pages/Jobdetails";
import JobPortalPage from "./pages/JobPortalPage/JobPortalPage";
import ProfilePage from "./pages/Profile/Profile";
import SaveList from "./pages/SaveJob";
import RegistrationRules from "./pages/TrialInterviewPage/RegistrationRules";
import TrialInterview from "./pages/TrialInterviewPage/TrialInterview";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobPortalPage />} />

          <Route path="/interview" element={<TrialInterview />} />
          <Route path="/interview/detail" element={<InterviewDetail />} />
          <Route path="/registration-rules" element={<RegistrationRules/>}/>
          <Route path="/jobdetails" element={<JobDetails/>}/>

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobboard" element={<JobBoard/>}/>
          <Route path="/save" element={<SaveList/>}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
