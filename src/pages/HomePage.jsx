// HomePage.jsx
import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">HIREU</h1>
            <p className="hero-subtitle">
              Ứng Dụng Hỗ Trợ Tìm Việc Toàn Diện, Giúp Người Dùng Chuẩn Bị Tốt
              Nhất Cho Hành Trình Sự Nghiệp.
            </p>
            <button className="btn-primary">Read More</button>
          </div>
          <img
            src="/path-to-hero-image.jpg"
            alt="Hero"
            className="hero-image"
          />
        </div>

        {/* About Us Section */}
        <div className="section">
          <h2 className="section-title">Về Chúng Tôi</h2>
          <p className="section-subtitle">Ai là người phù hợp với HireU?</p>
          <div className="features-grid">
            {[
              {
                icon: "👥",
                title: "Câu Hỏi Phỏng Vấn",
                desc: "Hệ câu hỏi phỏng vấn được tổng hợp từ những công ty hàng đầu trên thế giới...",
              },
              {
                icon: "📺",
                title: "Webinar",
                desc: "Hàng triệu người đang tham gia webinar để nâng cao kỹ năng...",
              },
              {
                icon: "🔄",
                title: "Mạng Xã Hội",
                desc: "Một nơi để chia sẻ và tìm hiểu từ những người trong nghề...",
              },
            ].map((feature, index) => (
              <div className="feature-card" key={index}>
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Jobs Section */}
        <div className="section">
          <h2 className="section-title">Những Job Đang Trending</h2>
          <div className="jobs-grid">
            {["PHP Web Developer", "Product Manager", "Software Engineer"].map(
              (job) => (
                <div className="job-card" key={job}>
                  <h3 className="job-title">{job}</h3>
                  <button className="btn-secondary">Read more</button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Top Companies Section */}
        <div className="section">
          <h2 className="section-title">Top Công Ty Nổi Bật</h2>
          <div className="companies-grid">
            {[1, 2, 3].map((item) => (
              <div className="company-card" key={item}>
                <span className="company-icon">☁️</span>
                <h3 className="company-title">VNG</h3>
                <p className="company-desc">
                  Đây Là Công Ty Về Game Có Hơn 1000 Người Apply Mỗi Năm
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
          {[
            "Ứng Dụng Cung Cấp Những Tính Năng Gì?",
            "Làm Thế Nào Để Tham Gia Các Buổi Webinar?",
            "Làm Sao Liên Hệ Với Bộ Phận Hỗ Trợ Của HireU?",
            "HireU Có Miễn Phí Không?",
            "HireU Hỗ Trợ Những Ngôn Ngữ Nào?",
          ].map((question, index) => (
            <details className="faq-item" key={index}>
              <summary className="faq-question">{question}</summary>
              <p className="faq-answer">Answer details would go here...</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
