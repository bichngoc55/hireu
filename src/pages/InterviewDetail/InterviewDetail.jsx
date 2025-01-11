import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import { LuCalendarDays } from "react-icons/lu";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import img1 from "../../assets/a.jpg";
import img2 from "../../assets/b.png";
import img3 from "../../assets/c.jpg";
import img4 from "../../assets/d.jpg";
import WorkIcon from "@mui/icons-material/Work";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarsIcon from "@mui/icons-material/Stars";
import Modal from "./Modal";

const InterviewDetail = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    title,
    company,
    interviewer,
    avatarUrl,
    skills,
    date,
    duration,
    remainingSpots,
  } = location.state || {};
  return (
    <div className="detailContainerD">
      <div className="leftColemnD">
        <div className="detailcardd">
          <div className="rowsection">
            <div
              style={{
                width: "70%",
                paddingRight: "50px",
                borderRight: "1px solid #A0A0A0",
              }}
            >
              <div className="titlene">{location.state.title}</div>
              <div className="rowsection">
                <div className="namngang">
                  <div className="circlene">
                    <LuCalendarDays color="#fff" />
                  </div>
                  {location.state.date}
                </div>

                <div className="namngang">
                  <div className="circlene">
                    <AvTimerIcon sx={{ color: "#fff" }} />
                  </div>
                  {location.state.duration}
                </div>

                <div className="namngang">
                  <div className="circlene">
                    <AccessTimeIcon sx={{ color: "#fff" }} />
                  </div>
                  9:00 - 17:00
                </div>
              </div>
            </div>
            <div className="benphai">
              <div style={{ textAlign: "right" }}>Số lượng ban đầu: 10</div>
              <div style={{ textAlign: "right" }}>Số lượng đã đăng ký: 6</div>
              <div style={{ textAlign: "right" }}>Số lượng còn lại: 4</div>
            </div>
          </div>

          <button className="DANGKYNGAY" onClick={() => setIsModalOpen(true)}>
            <div>ĐĂNG KÝ NGAY</div>
            <AdsClickIcon />
          </button>
        </div>

        <div className="detailcardd">
          <div className="namngang">
            <div className="bluestraight"></div>
            <div className="tieudene">Chi tiết buổi phỏng vấn</div>
          </div>

          <div
            className="rowsection"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              margin: "20px 0px",
            }}
          >
            <div style={{ textAlign: "center", flex: "1" }}>
              <img
                src={img4}
                alt="Mô tả hình ảnh"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
              <div>Đã mentoring 30+ junior developers</div>
            </div>
            <div style={{ textAlign: "center", flex: "1" }}>
              <img
                src={img2}
                alt="Mô tả hình ảnh"
                style={{
                  width: "100%",
                  objectFit: "contain",
                  height: "180px",
                }}
              />
              <div>Tổ chức các workshop về phát triển sự nghiệp IT</div>
            </div>
            <div style={{ textAlign: "center", flex: "1" }}>
              <img
                src={img3}
                alt="Mô tả hình ảnh"
                style={{
                  width: "100%",
                  objectFit: "contain",
                  height: "180px",
                }}
              />
              <div>Diễn giả tại nhiều hội thảo công nghệ</div>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            Đây là cơ hội để các sinh viên IT được trao đổi trực tiếp với chuyên
            gia có nhiều năm kinh nghiệm trong lĩnh vực Full Stack Development.
            Buổi phỏng vấn sẽ giúp bạn hiểu rõ hơn về vị trí Intern, đồng thời
            nhận được những đánh giá, góp ý có giá trị cho định hướng nghề
            nghiệp
          </div>
          <div className="namngang">
            <div className="bluestraight"></div>
            <div className="tieudene">Yêu cầu ứng viên</div>
          </div>
          <section className="detail-section">
            <ul style={{ paddingLeft: "40px", listStyleType: "disc" }}>
              <li>
                Là sinh viên năm 3, năm 4 ngành Công nghệ thông tin hoặc ngành
                liên quan+
              </li>
              <li> Có kiến thức cơ bản về lập trình Java</li>
              <li> Đã học qua HTML, CSS, JavaScript và các framework cơ bản</li>
              <li> Đã biết cách cơ sở dữ liệu (MySQL, PostgreSQL...)</li>
              <li> Có khả năng giao tiếp và làm việc nhóm tốt</li>
              <li>
                Chủ động học hỏi và dám mê phát triển trong lĩnh vực Full Stack
              </li>
            </ul>
          </section>

          <div className="namngang">
            <div className="bluestraight"></div>
            <div className="tieudene">Lợi ích khi tham gia</div>
          </div>
          <section className="detail-section">
            <ul style={{ paddingLeft: "40px", listStyleType: "disc" }}>
              <li> Được đánh giá năng lực bởi các chuyên gia có kinh nghiệm</li>
              <li>
                Nhận được phản hồi chi tiết về điểm mạnh và điểm cần cải thiện
              </li>
              <li> Học hỏi được kỹ thuật và cách làm việc từ các chuyên gia</li>
              <li> Cải thiện kỹ thuật lập trình và tư duy giải quyết vấn đề</li>
              <li> Mở rộng network trong ngành IT</li>
              <li> Nâng cao kỹ năng và kiến thức chuyên môn</li>
            </ul>
          </section>

          <div className="namngang">
            <div className="bluestraight"></div>
            <div className="tieudene">Chuẩn bị cho buổi phỏng vấn</div>
          </div>
          <section className="detail-section">
            <ul style={{ paddingLeft: "40px", listStyleType: "disc" }}>
              <li> CV đã cập nhật</li>
              <li> Portfolio các project đã làm (nếu được yêu cầu)</li>
              <li> Laptop để demo code nếu được yêu cầu</li>
              <li> Chủ động đặt câu hỏi nếu muốn trao đổi về chuyên gia</li>
            </ul>
          </section>

          <div className="namngang">
            <div className="namngang">
              <div className="bluestraight"></div>
              <div className="tieudene">Địa điểm phỏng vấn</div>
            </div>

            <div style={{ marginLeft: "20px" }}>Microsoft Team</div>
          </div>

          <div className="namngang" style={{ margin: "20px 0px" }}>
            <div className="namngang">
              <div className="bluestraight"></div>
              <div className="tieudene">Cách thức tham gia</div>
            </div>

            <div style={{ marginLeft: "20px" }}>
              Bạn nộp hồ sơ trực tuyến bằng cách bấm Đăng ký
            </div>
          </div>

          <div className="tieudene">Hạn nộp hồ sơ: 11/12/2024</div>
        </div>
      </div>

      <div className="rightColumnD">
        <div className="detailcardd">
          <div className="namngang">
            <img
              src={img1}
              alt="Mô tả hình ảnh"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "contain",
              }}
            />
            <div className="infone">
              <div className="namene">MARK ZUCKERBERG</div>
              <div className="innfe">1984</div>
              <div className="innfe">TP. Hồ Chí Minh</div>
              <div className="innfe">Tốt nghiệp trường Bách Khoa Hà Nội</div>
            </div>
          </div>
        </div>

        <div className="detailcardd" style={{ padding: "0px 0px 10px 0px" }}>
          <div
            className="namngang"
            style={{
              backgroundColor: "#CBEAFF",
              padding: "10px 20px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <WorkIcon sx={{ color: "#4B93CD", marginRight: "10px" }} />
            <div className="namene">Công việc hiện tại</div>
          </div>
          <section className="detail-section" style={{ padding: "0px 20px" }}>
            <ul
              style={{
                paddingLeft: "30px",
                listStyleType: "disc",
              }}
            >
              <li>Project Manager tại Công ty ABC Technology</li>
              <li>Quản lý team phát triển với 20+ thành viên</li>
              <li>Phụ trách các dự án Enterprise Software</li>
            </ul>
          </section>
        </div>
        <div className="detailcardd" style={{ padding: "0px 0px 10px 0px" }}>
          <div
            className="namngang"
            style={{
              backgroundColor: "#4B93CD",
              padding: "10px 20px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <WorkspacePremiumIcon sx={{ color: "#fff", marginRight: "10px" }} />
            <div className="namene" style={{ color: "#fff" }}>
              Kinh nghiệm
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <div className="expe">
              8+ năm kinh nghiệm trong ngành phát triển phần mềm
            </div>
            <div className="rowsection">
              <div className="expe">Product Owner tại XYZ Software</div>
              <div className="namexpe">(2017-2019)</div>
            </div>
            <div className="rowsection">
              <div className="expe">Technical Team Lead tại DEF Solutions</div>
              <div className="namexpe">(2019-2022)</div>
            </div>
            <div className="rowsection">
              <div className="expe">
                Senior Full Stack Developer tại GHI Tech
              </div>
              <div className="namexpe">(2022-now)</div>
            </div>
          </div>
        </div>

        <div className="detailcardd" style={{ padding: "0px 0px 10px 0px" }}>
          <div
            className="namngang"
            style={{
              backgroundColor: "#CBEAFF",
              padding: "10px 20px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <StarsIcon sx={{ color: "#4B93CD", marginRight: "10px" }} />
            <div className="namene">Chuyên môn và kỹ năng</div>
          </div>
          <section className="detail-section" style={{ padding: "0px 20px" }}>
            <ul
              style={{
                paddingLeft: "30px",
                listStyleType: "disc",
              }}
            >
              <li>Quản lý dự án Agile/Scrum</li>
              <li>System Architecture Design</li>
              <li>Full Stack Development (Java, Spring Boot, React)</li>
              <li>Database Design & Optimization</li>
              <li>Cloud Services (AWS, Azure)</li>
              <li>Team Building & Leadership</li>
            </ul>
          </section>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
export default InterviewDetail;
