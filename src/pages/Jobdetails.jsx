// Question.jsx
import React from "react";
import "./Question.css";
import { SearchIcon } from "./icons"; // You'll need to create this icon component

const Question = () => {
  const technologies = [
    { name: "Fresher", count: "08" },
    { name: "Intern", count: "08" },
    { name: "Junior", count: "08" },
    { name: "Senior", count: "21" },
    { name: "Stater", count: "21" },
  ];

  return (
    <div className="question-container">
      <div className="content-wrapper">
        <div className="main-content">
          {/* Search Section */}
          <div className="search-section">
            <div className="search-input-wrapper">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                placeholder="Tìm kiếm trên HireU"
                className="search-input"
              />
            </div>
            <div className="filter-section">
              <select className="filter-select">
                <option value="">Fresher</option>
              </select>
              <select className="filter-select">
                <option value="">UI/UX</option>
              </select>
              <select className="filter-select">
                <option value="">Phần mềm</option>
              </select>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="tech-tags">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className={`tech-tag ${
                  tech.name === "Fresher" ? "active" : ""
                }`}
              >
                {tech.name} {tech.count}
              </span>
            ))}
          </div>

          {/* Questions List */}
          <div className="questions-list">
            <div className="question-card">
              <div className="question-content">
                <div className="question-text">
                  <p className="question-title">
                    <strong>
                      Câu hỏi: Hãy kể tên một vài nguyên tắc thiết kế UI/UX mà
                      bạn biết và giải thích tại sao chúng lại quan trọng.
                    </strong>
                  </p>
                  <p className="question-answer">
                    Tính nhất quán: Giúp người dùng dễ dàng nhận diện và tương
                    tác với sản phẩm. Đơn giản: Giúp người dùng tập trung vào
                    nhiệm vụ chính. Hiển thị trực quan: Sử dụng hình ảnh, biểu
                    tượng để truyền đạt thông tin một cách hiệu quả. Phản hồi:
                    Cho người dùng biết rằng hành động của họ đã được thực hiện.
                  </p>
                </div>
                <div className="question-actions">
                  <button className="read-more-btn">Đọc thêm</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="sidebar">
          <h2 className="sidebar-title">
            <strong>Top công ty nổi bật</strong>
          </h2>
          <div className="company-card">
            <div className="company-info">
              <img src="/logo-1.png" alt="NashTech" className="company-logo" />
              <div className="company-details">
                <h3 className="company-name">NashTech</h3>
                <p className="company-stat">1000+ nhân viên</p>
                <p className="company-stat">BA, Tester, UI/UX</p>
              </div>
            </div>
            <button className="view-company-btn">Xem công ty</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
