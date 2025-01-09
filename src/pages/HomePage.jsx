import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ShareIcon from "@mui/icons-material/Share";
import CloudIcon from "@mui/icons-material/Cloud";

// Common styles that can be reused
const commonStyles = {
  sectionBox: {
    padding: "32px 0",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "32px",
  },
  icon: {
    fontSize: "40px",
    marginBottom: "16px",
    color: "#3f51b5",
  },
};

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#ffffff" }}>
      <Container>
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "32px",
            marginBottom: "32px",
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              HIREU
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#666",
                marginBottom: "16px",
              }}
            >
              Ứng Dụng Hỗ Trợ Tìm Việc Toàn Diện, Giúp Người Dùng Chuẩn Bị Tốt
              Nhất Cho Hành Trình Sự Nghiệp.
            </Typography>
            <Button variant="outlined" color="primary">
              Read More
            </Button>
          </Box>
          <Box
            component="img"
            src="/path-to-hero-image.jpg"
            alt="Hero"
            sx={{
              width: "400px",
              height: "auto",
              "@media (max-width: 600px)": {
                width: "100%",
                marginTop: "16px",
              },
            }}
          />
        </Box>

        {/* About Us Section */}
        <Box sx={commonStyles.sectionBox}>
          <Typography variant="h4" sx={commonStyles.sectionTitle}>
            Về Chúng Tôi
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ marginBottom: "32px" }}
          >
            Ai là người phù hợp với HireU?
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <GroupIcon sx={commonStyles.icon} />,
                title: "Câu Hỏi Phỏng Vấn",
                desc: "Hệ câu hỏi phỏng vấn được tổng hợp từ những công ty hàng đầu trên thế giới...",
              },
              {
                icon: <LiveTvIcon sx={commonStyles.icon} />,
                title: "Webinar",
                desc: "Hàng triệu người đang tham gia webinar để nâng cao kỹ năng...",
              },
              {
                icon: <ShareIcon sx={commonStyles.icon} />,
                title: "Mạng Xã Hội",
                desc: "Một nơi để chia sẻ và tìm hiểu từ những người trong nghề...",
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{ textAlign: "center", height: "100%", padding: "16px" }}
                >
                  <CardContent>
                    {feature.icon}
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography>{feature.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Trending Jobs Section */}
        <Box sx={commonStyles.sectionBox}>
          <Typography variant="h4" sx={commonStyles.sectionTitle}>
            Những Job Đang Trending
          </Typography>
          <Grid container spacing={3}>
            {["PHP Web Developer", "Product Manager", "Software Engineer"].map(
              (job) => (
                <Grid item xs={12} md={4} key={job}>
                  <Card
                    sx={{ backgroundColor: "#f5f8e6", marginBottom: "16px" }}
                  >
                    <CardContent>
                      <Typography variant="h6">{job}</Typography>
                      <Button color="primary">Read more</Button>
                    </CardContent>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Box>

        {/* Top Companies Section */}
        <Box sx={commonStyles.sectionBox}>
          <Typography variant="h4" sx={commonStyles.sectionTitle}>
            Top Công Ty Nổi Bật
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Card sx={{ marginBottom: "16px", padding: "16px" }}>
                  <CardContent>
                    <CloudIcon sx={commonStyles.icon} />
                    <Typography variant="h6">VNG</Typography>
                    <Typography>
                      Đây Là Công Ty Về Game Có Hơn 1000 Người Apply Mỗi Năm
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ marginTop: "32px", marginBottom: "32px" }}>
          <Typography variant="h4" sx={commonStyles.sectionTitle}>
            Câu Hỏi Thường Gặp
          </Typography>
          {[
            "Ứng Dụng Cung Cấp Những Tính Năng Gì?",
            "Làm Thế Nào Để Tham Gia Các Buổi Webinar?",
            "Làm Sao Liên Hệ Với Bộ Phận Hỗ Trợ Của HireU?",
            "HireU Có Miễn Phí Không?",
            "HireU Hỗ Trợ Những Ngôn Ngữ Nào?",
          ].map((question, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: "0 16px" }}
              >
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Answer details would go here...</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
