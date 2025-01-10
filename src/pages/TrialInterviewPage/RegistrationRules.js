import React from 'react';
import './RegistrationRules.css';

function RegistrationRules() {
  return (
    <div className="rules-container">
      <h1 className="rules-title">
        Quy định dành cho người dùng tham gia buổi phỏng vấn thử trên app "HireU"
      </h1>

      <div className="rules-content">
        <section className="rule-section">
          <h2>1. Thời gian phỏng vấn:</h2>
          <ul>
            <li>Người dùng nên tham gia buổi phỏng vấn đúng giờ đã đăng ký. HireU khuyến khích bạn nên truy cập vào link Microsoft Teams trước giờ bắt đầu phỏng vấn 5-10'.</li>
            <li>Nếu có sự cố không thể tham gia, vui lòng thông báo cho chuyên gia ít nhất 24 giờ trước khi buổi phỏng vấn diễn ra.</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>2. Chuẩn bị:</h2>
          <ul>
            <li>Người dùng nên chuẩn bị kỹ lưỡng trước buổi phỏng vấn, bao gồm:</li>
            <li>Tìm hiểu về các công nghệ, yêu cầu có trong JD phỏng vấn.</li>
            <li>Chuẩn bị câu hỏi mà bạn thắc mắc cũng như các nội dung cần thảo luận với chuyên gia.</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>3. Hành vi trong buổi phỏng vấn:</h2>
          <ul>
            <li>Người dùng cần thể hiện thái độ chuyên nghiệp trong suốt buổi phỏng vấn.</li>
            <li>Tôn trọng chuyên gia và không sử dụng ngôn ngữ không phù hợp.</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>4. Bảo mật thông tin:</h2>
          <ul>
            <li>Người dùng cam kết không chia sẻ thông tin cá nhân của chuyên gia và nội dung buổi phỏng vấn với bên thứ ba.</li>
            <li>Tôn trọng quyền riêng tư và bảo mật dữ liệu của tất cả các bên liên quan.</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>5. Phản hồi:</h2>
          <ul>
            <li>Sau buổi phỏng vấn, người dùng được khuyến khích gửi phản hồi về trải nghiệm của mình để cải thiện dịch vụ.</li>
            <li>Người dùng có quyền nhận phản hồi từ chuyên gia về khả năng trả lời phỏng vấn và cách cải thiện những điểm còn thiếu sót.</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>6. Hủy bỏ và thay đổi:</h2>
          <ul>
            <li>Người dùng có quyền hủy bỏ lịch phỏng vấn, nhưng cần thông báo trước ít nhất 24 giờ, nếu không hệ thống có quyền cảnh cáo tài khoản người dùng.</li>
            <li>Trong trường hợp hủy bỏ, vui lòng cung cấp lý do để đội ngũ hỗ trợ có thể cải thiện dịch vụ.</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>7. Trách nhiệm:</h2>
          <ul>
            <li>Người dùng chịu trách nhiệm về hành vi của mình trong buổi phỏng vấn và các thông tin cung cấp trên ứng dụng.</li>
            <li>"HireU" không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ hành vi của người dùng.</li>
          </ul>
        </section>

        <p className="rules-footer">
          Các quy định này nhằm đảm bảo buổi phỏng vấn thử diễn ra suôn sẻ và hiệu quả cho cả người dùng và chuyên gia. Người dùng khi tham gia cần tuân thủ các quy định để tạo môi trường học tập và làm việc tích cực.
        </p>
      </div>
    </div>
  );
}

export default RegistrationRules;