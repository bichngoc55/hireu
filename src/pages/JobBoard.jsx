import { FavoriteBorder, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const JobBoard = ({ setSelectedTab }) => {
  const navigate = useNavigate();
  const technologies = [
    { name: "Java", count: "08" },
    { name: "Python", count: "08" },
    { name: "JavaScript", count: "08" },
    { name: "C/C#", count: "21" },
    { name: "Khác", count: "21" },
  ];
  const handleCardClick = () => {
    setSelectedTab("details");
  };

  return (
    <Box
      sx={{
        bgcolor: "#F4F4F4",
        minHeight: "100vh",
        fontFamily: "Asap, sans-serif",
        "& *": { fontFamily: "Asap, sans-serif" },
      }}
    >
      <Box sx={{ display: "flex", maxWidth: "100%", gap: 6 }}>
        <Box sx={{ width: "100%", p: 3 }}>
          {/* Search Section */}
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              placeholder="Tìm kiếm trên HireU"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  bgcolor: "white",
                  borderRadius: 3,
                },
              }}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Select
                displayEmpty
                defaultValue=""
                sx={{
                  width: "33%",
                  bgcolor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E0E0E0",
                  },
                }}
              >
                <MenuItem value="">Cấp bậc</MenuItem>
              </Select>
              <Select
                displayEmpty
                defaultValue=""
                sx={{
                  width: "33%",
                  bgcolor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E0E0E0",
                  },
                }}
              >
                <MenuItem value="">Vị trí</MenuItem>
              </Select>
              <Select
                displayEmpty
                defaultValue=""
                sx={{
                  width: "33%",
                  bgcolor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E0E0E0",
                  },
                }}
              >
                <MenuItem value="">Chuyên ngành</MenuItem>
              </Select>
            </Box>
          </Box>

          {/* Technology Tags */}
          <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
            {technologies.map((tech) => (
              <Chip
                key={tech.name}
                label={`${tech.name} ${tech.count}`}
                sx={{
                  bgcolor: tech.name === "Khác" ? "#6D6C6C" : "#4B93CD",
                  color: "white",
                  borderRadius: 1,
                  height: 28,
                }}
              />
            ))}
          </Box>

          {/* Job Listings */}
          <Box>
            <Card
              sx={{ mb: 2, borderRadius: 3, bgcolor: "#ECF7FF" }}
              onClick={() => handleCardClick()}
            >
              <CardContent>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <img
                    src="/logo-2.png"
                    alt="Company"
                    style={{
                      borderRadius: 8,
                      width: "100px", // Đặt chiều rộng cố định
                      height: "100px", // Đặt chiều cao cố định
                      objectFit: "cover", // Đảm bảo hình ảnh được cắt đúng tỉ lệ
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ color: "#000000", fontWeight: 500, mb: 1 }}
                    >
                      <strong>PHP Web Developer (Junior/Mid)</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1, color: "#6D6C6C" }}
                    >
                      CÔNG TY TNHH THK HOLDINGS VIỆT NAM
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                      <Chip
                        label="TP. HCM"
                        size="small"
                        sx={{
                          bgcolor: "#D3EEFF",
                          borderRadius: 1,
                          color: "#4B93CD",
                        }}
                      />
                      <Chip
                        label="1 năm"
                        size="small"
                        sx={{
                          bgcolor: "#D3EEFF",
                          borderRadius: 1,
                          color: "#4B93CD",
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="textSecondary">
                      Backend Developer | IT - Phần mềm
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "right", minWidth: 150 }}>
                    <Typography
                      sx={{
                        color: "#4B93CD",
                        fontWeight: 500,
                        mb: 1,
                        fontSize: "1.5rem",
                      }}
                    >
                      <strong>10 - 15 triệu</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ mb: 2 }}
                    >
                      Đã đăng 30 phút trước
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#4B93CD",
                          borderRadius: 1,
                          "&:hover": { bgcolor: "#3d7ab0" },
                        }}
                      >
                        Ứng tuyển
                      </Button>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          border: "1px solid #4B93CD",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <FavoriteBorder
                          sx={{ fontSize: 18, color: "#4B93CD" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Right Sidebar */}
      </Box>
    </Box>
  );
};

export default JobBoard;
