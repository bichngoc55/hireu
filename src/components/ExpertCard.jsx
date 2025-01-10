import React from "react";
import defaultAvatar from '../assets/hinh-anh-10-diem.jpg';
const ExpertCard = ({ name, role, experience, avatarUrl, onViewProfile }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        padding: "15px",
        boxShadow: "none",
        backgroundColor: "white",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        // src={avatarUrl ? avatarUrl : defaultAvatar}
        src={ defaultAvatar}
        alt={name}
        style={{
          width: "20%",
          aspectRatio: "1 / 1",
          borderRadius: "8px",
        }}
      />
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontWeight: 600,
            fontSize: "1rem",
            fontFamily: "'Asap', sans-serif",
          }}
        >
          {name}
        </p>
        <p
          style={{
            color: "#666",
            fontSize: "0.9rem",
            fontFamily: "'Asap', sans-serif",
          }}
        >
          {role} <br /> {experience}
        </p>
      </div>
      <button
        onClick={onViewProfile}
        style={{
          backgroundColor: "#CBEAFF",
          color: "#4B93CD",
          textTransform: "none",
          fontFamily: "'Asap', sans-serif",
          boxShadow: "none",
          border: "none",
          padding: "8px",
          borderRadius: 5,
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#bde0f7")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#CBEAFF")}
      >
        Xem hồ sơ
      </button>
    </div>
  );
};

export default ExpertCard;