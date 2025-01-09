// ExpertCard.js
import React from "react";
import { Box, Card, Typography, Avatar, Button } from "@mui/material";

const ExpertCard = ({ name, role, experience, avatarUrl, onViewProfile }) => {
  return (
    <Card
      sx={{
        mb: 2,
        p: 2,
        boxShadow: "none",
        backgroundColor: "white",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        src={avatarUrl}
        sx={{
          width: 60,
          height: 60,
          borderRadius: "8px",
        }}
        variant="square"
      />
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            fontFamily: "Asap, sans-serif",
            mb: 0.5,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#666",
            fontSize: "0.9rem",
            fontFamily: "Asap, sans-serif",
            mb: 0.5,
          }}
        >
          {role}
        </Typography>
        <Typography
          sx={{
            color: "#666",
            fontSize: "0.9rem",
            fontFamily: "Asap, sans-serif",
          }}
        >
          {experience}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={onViewProfile}
        sx={{
          backgroundColor: "#CBEAFF",
          color: "#4B93CD",
          textTransform: "none",
          fontFamily: "Asap, sans-serif",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#bde0f7",
            boxShadow: "none",
          },
        }}
      >
        Xem hồ sơ
      </Button>
    </Card>
  );
};

export default ExpertCard;
