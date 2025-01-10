import React, { useState } from "react";
import "./InterviewCalendarStyle.css";

const CANCEL_REASONS = [
  "Tôi có công việc đột xuất trùng với lịch phỏng vấn",
  "Tôi muốn chuẩn bị kỹ càng hơn cho lần phỏng vấn sau",
  "Buổi phỏng vấn này không còn phù hợp với tôi",
];

const CancelModal = ({ open, onClose, onConfirm }) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const handleConfirm = () => {
    const reason =
      selectedReason === "Lý do khác..." ? customReason : selectedReason;
    if (selectedReason === "Lý do khác..." && !customReason.trim()) {
      alert("Vui lòng nhập lý do");
      return;
    }
    onConfirm(reason);
    setSelectedReason("");
    setCustomReason("");
  };
  const handleClose = () => {
    setSelectedReason("");
    setCustomReason("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">
          Bạn có chắc chắn muốn hủy buổi phỏng vấn đã đăng ký?
        </h2>

        <p className="modal-subtitle">
          Hãy cho chúng tôi biết lý do bạn muốn hủy...
        </p>

        {CANCEL_REASONS.map((reason) => (
          <div
            key={reason}
            onClick={() => setSelectedReason(reason)}
            className={`reason-box ${
              selectedReason === reason ? "selected" : ""
            }`}
          >
            <p>{reason}</p>
          </div>
        ))}

        <textarea
          placeholder="Nhập lý do của bạn..."
          value={customReason}
          onChange={(e) => setCustomReason(e.target.value)}
          className={`custom-reason-textarea ${customReason ? "selected" : ""}`} 
        />

        <h3 className="note-title">Lưu ý:</h3>
        <p className="note-text">
          - Nếu bạn hủy buổi phỏng vấn đã đăng ký trước 24h bắt đầu thì buổi
          đăng ký này sẽ được xóa khỏi lịch của bạn, bạn vẫn có thể đăng ký lại
          (nếu còn số lượng trống) hoặc đăng ký buổi phỏng vấn thử khác một cách
          bình thường.
        </p>
        <p className="note-text">
          - Nếu bạn hủy trong vòng 24h trước khi bắt đầu buổi phỏng vấn thì tài
          khoản của bạn sẽ bị cảnh cáo, nếu bị cảnh cáo quá 3 lần thì bạn sẽ
          không được đăng ký phỏng vấn trong vòng 3 tháng
        </p>

        <div className="button-container">
          <button onClick={handleClose} className="cancel-button">
            Thoát
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedReason}
            className={`confirm-button ${!selectedReason ? "disabled" : ""}`}
          >
            Xác nhận hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
