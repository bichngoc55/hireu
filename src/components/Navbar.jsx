import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar,
  Box,
  styled,
} from "@mui/material";
import {
  HomeOutlined,
  DescriptionOutlined,
  WorkOutline,
  VideoCallOutlined,
  GroupOutlined,
  //   NotificationsOutlined,
} from "@mui/icons-material";

import logo from "../assets/logo_HireU.png";

// import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { FaFacebook } from "react-icons/fa";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Custom styled components
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: "#65676B",
  backgroundColor: "#F0EFEF",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "#E4E6E9",
    color: "#4B93CD",
  },
}));

const NavbarItem = styled(Box)(({ theme, active }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "8px 16px",
  cursor: "pointer",
  borderRadius: "8px",
  position: "relative",
  transition: "all 0.3s ease",
  "& .MuiSvgIcon-root": {
    color: active ? "#4B93CD" : "#65676B",
    transition: "all 0.3s ease",
    fontSize: "28px",
  },
  "& .MuiTypography-caption": {
    color: active ? "#4B93CD" : "#65676B",
    transition: "all 0.3s ease",
    fontWeight: active ? 500 : 400,
  },
  "&:hover": {
    backgroundColor: "rgba(75, 147, 205, 0.1)",
    "& .MuiSvgIcon-root": {
      color: "#4B93CD",
    },
    "& .MuiTypography-caption": {
      color: "#4B93CD",
    },
  },
}));

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const navItems = [
    { id: "/home", icon: HomeOutlined, label: "Trang chủ" },
    { id: "/interview", icon: DescriptionOutlined, label: "Phỏng vấn" },
    { id: "/jobs", icon: WorkOutline, label: "Việc làm" },
    { id: "/webinar", icon: VideoCallOutlined, label: "Webinar" },
    { id: "/social", icon: GroupOutlined, label: "Mạng xã hội" },
  ];

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            style={{
              width: "50px",
              aspectRatio: "1 / 1",
              borderRadius: "100px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            gap: 1,
          }}
        >
          {navItems.map((item) => (
            <NavbarItem
              key={item.id}
              active={activeTab === item.id}
              onClick={() => {
                setActiveTab(item.id);
                navigate(item.path);
              }}
            >
              <item.icon />
              <Typography
                variant="caption"
                sx={{
                  display: { xs: "none", sm: "block" },
                  marginTop: "4px",
                  fontSize: "0.75rem",
                }}
              >
                {item.label}
              </Typography>
            </NavbarItem>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <StyledIconButton>
            <AiTwotoneMessage sx={{ fontSize: 20 }} />
          </StyledIconButton>

          <StyledIconButton>
            <IoMdNotifications sx={{ fontSize: 20 }} />
          </StyledIconButton>

          <IconButton
            sx={{
              padding: "2px",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
