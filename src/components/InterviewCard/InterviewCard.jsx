// InterviewCard.js
import React from "react";
import defaultAvatar from '../../assets/hinh-anh-10-diem.jpg';
import { GoClock } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";

import "./InterviewCard.css";

const InterviewCard = ({
  title,
  company,
  interviewer,
  avatarUrl,
  skills,
  date,
  duration,
  remainingSpots,
  onRegister,
}) => {
  return (
    <div className="interview-card">
      <div className="card-content">
        <img src={avatarUrl ? avatarUrl : defaultAvatar} alt={interviewer} className="avatar" />
        <div className="card-details">
          <div className="card-header">
            <span className="card-title">{title}</span>
            <span className="remaining-spots">
              Số lượng còn lại: {remainingSpots}
            </span>
          </div>
          <p className="interviewer-info">
            {interviewer} ({company})
          </p>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
          <div className="card-footer">
            <div className="date-time">
              <LuCalendarDays color="#4B93CD"/>
              <span className="date">{date}</span>
              <GoClock color="#4B93CD"/>
              <span className="duration">{duration}</span>
            </div>
            <button className="register-button" onClick={onRegister}>
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
