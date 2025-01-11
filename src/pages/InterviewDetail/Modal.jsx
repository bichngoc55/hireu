import React, { useState } from "react";
import "./style.css"; // Import CSS để tạo kiểu cho modal

const Modal = ({ isOpen, onClose, children }) => {
  const [selected, setSelected] = useState();
  if (!isOpen) return null;

  return (
    <div className="modal-overlayd">
      <div className="modal-contentd">
        <div className="sure">Bạn có chắn chắn muốn đăng ký phỏng vấn?</div>
        <div className="chonca">Chọn ca phỏng vấn bạn muốn đăng ký</div>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="select1"
        >
          <option value="">Cấp bậc</option>
          <option value="9:00">9:00</option>
          <option value="9:00">10:00</option>
          <option value="9:00">13:30</option>
          <option value="9:00">14:00</option>
          <option value="9:00">15:30</option>
          <option value="9:00">16:30</option>
        </select>

        <input type="file" className="select1" style={{ marginTop: "15px" }} />
        {/* <button className="close-buttond" onClick={onClose}>
          &times;
        </button> */}
        <div className="namngang" style={{ margin: "15px 0px" }}>
          <input
            type="checkbox"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px",
            }}
          />
          <div className="expe">
            Tôi đồng ý với{" "}
            <span className="underlineds">điều khoản và quy định</span> tham gia
            phỏng vấn của HireU
          </div>
        </div>

        <div className="namngang" style={{ justifyContent: "flex-end" }}>
          <button className="HUYBTN" onClick={onClose}>
            Hủy
          </button>
          <button className="DKIBTN" onClick={onClose}>
            <div>Đăng ký</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
