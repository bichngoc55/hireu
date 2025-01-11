import { FavoriteBorder, Search, ThumbUp } from "@mui/icons-material";
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

const Question = () => {
  const technologies = [
    { name: "Fresher", count: "08" },
    { name: "Intern", count: "08" },
    { name: "Junior", count: "08" },
    { name: "Senior", count: "21" },
    { name: "Stater", count: "21" },
  ];

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
        <Box sx={{ width: "45%", p: 3 }}>
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
                <MenuItem value="">Fresher</MenuItem>
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
                <MenuItem value="">UI/UX</MenuItem>
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
                <MenuItem value="">Phần mềm</MenuItem>
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
                  bgcolor: tech.name === "Fresher" ? "#4B93CD" : "#6D6C6C",
                  color: "white",
                  borderRadius: 1,
                  height: 28,
                }}
              />
            ))}
          </Box>

          {/* Job Listings */}
          <Box>
            <Card sx={{ mb: 2, borderRadius: 3, bgcolor: "#ECF7FF" }}>
              <CardContent>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1, color: "#000000" }}
                    >
                      <strong>
                        Câu hỏi: Câu hỏi: Hãy kể tên một vài nguyên tắc thiết kế
                        UI/UX mà bạn biết và giải thích tại sao chúng lại quan
                        trọng.
                      </strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Tính nhất quán: Giúp người dùng dễ dàng nhận diện và tương
                      tác với sản phẩm. Đơn giản: Giúp người dùng tập trung vào
                      nhiệm vụ chính. Hiển thị trực quan: Sử dụng hình ảnh, biểu
                      tượng để truyền đạt thông tin một cách hiệu quả. Phản hồi:
                      Cho người dùng biết rằng hành động của họ đã được thực
                      hiện.
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "right", minWidth: 150 }}>
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
                        Đọc thêm
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ width: 450, p: 3, pr: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
            <strong>Top công ty nổi bật</strong>
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
      </Box>
    </Box>
  );
};

export default Question;
