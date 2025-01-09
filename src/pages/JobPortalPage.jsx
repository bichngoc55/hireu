// JobPortalPage.js
import React, { useState } from "react";
import { Box, Typography, CssBaseline } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SearchSection from "../components/SearchSection";
import LanguageTags from "../components/LanguageTags";
import InterviewCard from "../components/InterviewCard";
import ExpertCard from "../components/ExpertCard";

const JobPortalPage = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const sidebarItems = [
    {
      icon: ThumbUpOutlinedIcon,
      text: "Gợi ý cho bạn",
      id: "home",
      color: "#85b7e7",
    },
    {
      text: "Lịch phỏng vấn",
      id: "schedule",
      color: "#85b7e7",
    },
    {
      text: "Phỏng vấn đã tham gia",
      id: "participated",
      color: "#85b7e7",
    },
  ];

  const languagesData = [
    { name: "Java", count: "08" },
    { name: "Python", count: "08" },
    { name: "JavaScript", count: "08" },
    { name: "C/C#", count: "21" },
    { name: "Khác", count: "21" },
  ];

  const interviewsData = [
    {
      id: 1,
      title: "[Interview] Intern Full Stack Developer",
      company: "Công ty TNHH LG CNS",
      interviewer: "Justin Bieber",
      avatarUrl: "/path-to-image.jpg",
      skills: ["Java", "PHP", "Github", "Aloha"],
      date: "12/12/2024",
      duration: "15 phút",
      remainingSpots: 2,
    },
    // Duplicate this object 3 more times for the other cards
  ];

  const expertsData = [
    {
      id: 1,
      name: "Mary Jonhson",
      role: "Tester tại FPT Software",
      experience: "20 năm kinh nghiệm",
      avatarUrl: "/path-to-expert.jpg",
    },
    // Duplicate this 2 more times
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#F5F7FA",
        fontFamily: "Asap, sans-serif",
      }}
    >
      <CssBaseline />

      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          p: 2,
          backgroundColor: "white",
        }}
      >
        {sidebarItems.map((item) => (
          <Box
            key={item.id}
            onClick={() => setSelectedTab(item.id)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1.5,
              cursor: "pointer",
              color: selectedTab === item.id ? "#4B93CD" : item.color,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            {item.icon && <item.icon />}
            <Typography
              sx={{
                fontFamily: "Asap, sans-serif",
                fontWeight: selectedTab === item.id ? 600 : 400,
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Main content */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Box
          sx={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: 3,
          }}
        >
          {/* Left column */}
          <Box>
            <SearchSection />
            <LanguageTags languages={languagesData} />
            <Box>
              {interviewsData.map((interview) => (
                <InterviewCard key={interview.id} {...interview} />
              ))}
            </Box>
          </Box>

          {/* Right column */}
          <Box>
            <Typography
              variant="h6"
              mb={2}
              sx={{
                fontFamily: "Asap, sans-serif",
                fontWeight: 600,
                color: "#4B93CD",
              }}
            >
              Top chuyên gia nổi bật
            </Typography>
            {expertsData.map((expert) => (
              <ExpertCard key={expert.id} {...expert} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobPortalPage;
