// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import InterviewDetail from "./pages/InterviewDetail/InterviewDetail";
import JobBoard from "./pages/JobBoard";
import JobDetails from "./pages/Jobdetails";
import ProfilePage from "./pages/Profile/Profile";
import Question from "./pages/Question";
import SaveList from "./pages/SaveJob";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/jobs" element={<JobPortalPage />} /> */}
          <Route path="/jobboard" element={<JobBoard />} />
          <Route path="/jobdetail" element={<JobDetails />} />
          <Route path="/question" element={<Question />} />
          <Route path="/savelist" element={<SaveList />} />
          <Route path="/profile" element={<ProfilePage/>} />

          {/* <Route path="/interview" element={<TrialInterview />} /> */}
          <Route path="/interview/detail" element={<InterviewDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
