// InterviewCard.js
import React from "react";
import { Box, Card, Typography, Chip, Avatar, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

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
    <Card
      sx={{
        mb: 2,
        p: 2,
        backgroundColor: "#D3EEFF",
        boxShadow: "none",
        borderRadius: "8px",
        "&:hover": {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Avatar
          src={avatarUrl}
          sx={{
            width: 80,
            height: 80,
            borderRadius: "8px",
          }}
          variant="square"
        />
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Asap, sans-serif",
                fontWeight: 600,
                fontSize: "1.1rem",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#4B93CD",
                fontSize: "0.9rem",
                fontFamily: "Asap, sans-serif",
              }}
            >
              Số lượng còn lại: {remainingSpots}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#666",
              mb: 1.5,
              fontSize: "0.9rem",
              fontFamily: "Asap, sans-serif",
            }}
          >
            {interviewer} ({company})
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  fontFamily: "Asap, sans-serif",
                  color: "#4B93CD",
                  fontSize: "0.8rem",
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarTodayOutlinedIcon
                  sx={{ fontSize: 16, color: "#666" }}
                />
                <Typography
                  sx={{
                    color: "#666",
                    fontSize: "0.9rem",
                    fontFamily: "Asap, sans-serif",
                  }}
                >
                  {date}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeIcon sx={{ fontSize: 16, color: "#666" }} />
                <Typography
                  sx={{
                    color: "#666",
                    fontSize: "0.9rem",
                    fontFamily: "Asap, sans-serif",
                  }}
                >
                  {duration}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              onClick={onRegister}
              sx={{
                backgroundColor: "#4B93CD",
                textTransform: "none",
                fontFamily: "Asap, sans-serif",
                "&:hover": {
                  backgroundColor: "#4083b7",
                },
              }}
            >
              Đăng ký
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default InterviewCard;
