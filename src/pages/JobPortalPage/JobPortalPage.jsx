import {
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoSaveOutline } from "react-icons/io5";
import { LuFileQuestion } from "react-icons/lu";

import { useNavigate } from "react-router-dom";
import JobBoard from "../JobBoard";
import JobDetails from "../Jobdetails";
import SaveList from "../SaveJob";

const JobPortalPage = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    level: "",
    position: "",
    specialization: "",
  });

  const sidebarItems = [
    {
      icon: AiOutlineLike,
      text: "Gợi ý cho bạn",
      id: "home",
      color: "#85b7e7",
    },
    {
      icon: IoSaveOutline,
      text: "Đã lưu",
      id: "schedule",
      color: "#85b7e7",
    },
  ];

  const interviewsData = [
    {
      id: 1,
      title: "[Interview] Intern Full Stack Developer",
      company: "Công ty TNHH LG CNS",
      interviewer: "Justin Bieber",
      skills: ["Java", "Github", "Spring"],
      date: "12/12/2024",
      duration: "30 phút",
      level: "Intern",
      position: "Full Stack Developer",
      specialization: "Mobile Development",
      remainingSpots: 2,
    },
    {
      id: 2,
      title: "[Interview] Junior Frontend Developer",
      company: "FPT Software",
      interviewer: "John Doe",
      skills: ["JavaScript", "React", "HTML", "CSS"],
      date: "15/12/2024",
      duration: "30 phút",
      remainingSpots: 3,
      level: "Junior",
      position: "Frontend Developer",
      specialization: "Web Development",
    },
    {
      id: 3,
      title: "[Interview] Senior Backend Developer",
      company: "Viettel",
      interviewer: "Jane Smith",
      skills: ["Python", "Django", "PostgreSQL"],
      date: "20/12/2024",
      duration: "45 phút",
      remainingSpots: 1,
      level: "Senior",
      position: "Backend Developer",
      specialization: "Software Engineering",
    },
  ];

  // Calculate language counts from interviewsData
  const calculateLanguageCounts = () => {
    const languageCounts = {
      Java: 0,
      Python: 0,
      JavaScript: 0,
      "C/C#": 0,
      Khác: 0,
    };

    interviewsData.forEach((interview) => {
      interview.skills.forEach((skill) => {
        if (skill === "Java") languageCounts.Java++;
        else if (skill === "Python") languageCounts.Python++;
        else if (skill === "JavaScript") languageCounts.JavaScript++;
        else if (skill === "C" || skill === "C#") languageCounts["C/C#"]++;
        else languageCounts.Khác++;
      });
    });

    return Object.entries(languageCounts).map(([name, count]) => ({
      name,
      count: String(count).padStart(2, "0"),
    }));
  };

  const languagesData = calculateLanguageCounts();

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(selectedLanguage === language ? "" : language);
  };

  const filteredInterviews = interviewsData.filter((interview) => {
    // Search term filter
    const searchMatch =
      searchTerm === "" ||
      interview.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interview.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interview.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Language filter
    const languageMatch =
      selectedLanguage === "" ||
      interview.skills.some(
        (skill) => skill.toLowerCase() === selectedLanguage.toLowerCase()
      );

    // Other filters match
    const levelMatch =
      filters.level === "" || interview.level === filters.level;
    const positionMatch =
      filters.position === "" || interview.position === filters.position;
    const specializationMatch =
      filters.specialization === "" ||
      interview.specialization === filters.specialization;

    return (
      searchMatch &&
      languageMatch &&
      levelMatch &&
      positionMatch &&
      specializationMatch
    );
  });

  const expertsData = [
    {
      id: 1,
      name: "Mary Jonhson",
      role: "Tester tại FPT Software",
      experience: "20 năm kinh nghiệm",
      avatarUrl: "/path-to-expert.jpg",
    },
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

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
            {item.icon && item.icon === LuFileQuestion ? (
              <item.icon size={35} />
            ) : (
              <item.icon size={25} />
            )}
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
            gridTemplateColumns:
              selectedTab === "schedule" || selectedTab === "details"
                ? "1fr"
                : "1fr 380px",
            gap: 3,
          }}
        >
          {selectedTab === "schedule" && (
            <Box sx={{ flex: 2, maxWidth: "100%" }}>
              <SaveList />
            </Box>
          )}
          {selectedTab === "details" && (
            <Box sx={{ flex: 2, maxWidth: "100%" }}>
              <JobDetails />
            </Box>
          )}
          {selectedTab === "home" && (
            <Box sx={{ flex: 2, maxWidth: "100%" }}>
              <JobBoard setSelectedTab={setSelectedTab} />
            </Box>
          )}
          {selectedTab === "home" && (
            <Box sx={{ width: 450, p: 3, pr: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                Top công ty nổi bật
              </Typography>
              <Card sx={{ borderRadius: 3, mb: 2 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <img
                        src="/logo-1.png"
                        alt="NashTech"
                        style={{
                          borderRadius: "50%", // Định dạng hình tròn
                          width: "60px", // Chiều rộng
                          height: "60px", // Chiều cao
                          objectFit: "cover", // Đảm bảo hình ảnh không bị biến dạng
                        }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                          NashTech
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          1000+ nhân viên
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          BA, Tester, UI/UX
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: 1,
                        bgcolor: "#CBEAFF", // Màu nền
                        borderColor: "#CBEAFF",
                        color: "#4B93CD", // Màu chữ
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {
                          borderColor: "#3d7ab0",
                        },
                      }}
                    >
                      Xem công ty
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default JobPortalPage;