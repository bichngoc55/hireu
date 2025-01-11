// InterviewCard.js
import React, { useState } from "react";
import defaultAvatar from "../../assets/hinh-anh-10-diem.jpg";
import { GoClock } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Modal from "../../pages/InterviewDetail/Modal";

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
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    navigate(`/interview/detail`, {
      state: {
        title,
        company,
        interviewer,
        avatarUrl,
        skills,
        date,
        duration,
        remainingSpots,
      },
    });
  };
  return (
    <div className="interview-card">
      <div className="card-content">
        <img
          src={avatarUrl ? avatarUrl : defaultAvatar}
          alt={interviewer}
          className="avatar"
          onClick={() => handleCardClick()}
        />
        <div className="card-details">
          <div className="card-header" onClick={() => handleCardClick()}>
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
              <LuCalendarDays color="#4B93CD" />
              <span className="date">{date}</span>
              <GoClock color="#4B93CD" />
              <span className="duration">{duration}</span>
            </div>
            <button
              className="register-button"
              onClick={() => setIsModalOpen(true)}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default InterviewCard;
