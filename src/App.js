// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import JobPortalPage from "./pages/JobPortalPage/JobPortalPage";
import RegistrationRules from "./pages/TrialInterviewPage/RegistrationRules";
import InterviewDetail from "./pages/InterviewDetail/InterviewDetail";
import TrialInterview from "./pages/TrialInterviewPage/TrialInterview";
import Question from "./pages/Question";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
