import { ArrowBack, FavoriteBorder, Search, ThumbUp } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';

const JobDetails = () => {
  const technologies = [
    { name: 'Java', count: '08' },
    { name: 'Python', count: '08' },
    { name: 'JavaScript', count: '08' },
    { name: 'C/C#', count: '21' },
    { name: 'Khác', count: '21' },
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: '#F4F4F4', 
        minHeight: '100vh',
        fontFamily: 'Asap, sans-serif',
        p: 3,
        '& *': { fontFamily: 'Asap, sans-serif' },
      }}
    >
      <Box sx={{ display: 'flex', gap: 6 }}>
        {/* Left Sidebar */}
        <Box sx={{ width: 240, p: 3, pl: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <ThumbUp sx={{ color: '#4B93CD' }} />
              <Typography sx={{ color: '#4B93CD' }}>Gợi ý cho bạn</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box 
                sx={{ 
                  width: 28, 
                  height: 28, 
                  borderRadius: '50%',
                  border: '1px solid #6D6C6C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FavoriteBorder sx={{ fontSize: 16 }} />
              </Box>
              <Typography>Đã lưu</Typography>
            </Box>
          </Box>
        </Box>

        {/* Main Content */}
        <Box sx={{ width: '45%', p: 3 }}>
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
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'white',
                  borderRadius: 3
                }
              }}
            />
          </Box>

          {/* Technology Tags */}
          

          {/* Job Listings */}
          <Box sx={{ bgcolor: '#FFFFFF', p: 4, borderRadius: 2, boxShadow: 2 }}>
          <div className="flex items-center mb-4">
    <ArrowBack sx={{ color: '#4B93CD', mr: 1 }} />
    <span className="text-blue-500">Back</span>
  </div>
  <h1 className="text-2xl font-bold mb-2">
    Product Manager/ Product Owner   
    <span style={{ marginLeft: '10px', color: '#4B93CD' }}>20 - 35 triệu</span>
  </h1>
  <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
    <Chip
      label="TP. HCM"
      size="small"
      sx={{
        bgcolor: '#D3EEFF',
        borderRadius: 1,
        color: '#4B93CD'
      }}
    />
    <Chip
      label="1 năm"
      size="small"
      sx={{
        bgcolor: '#D3EEFF',
        borderRadius: 1,
        color: '#4B93CD'
      }}
    />
  </Box>
  <div className="text-gray-600 mb-4">Còn <strong>03</strong> ngày để ứng tuyển</div>
  
  {/* Flexbox for Apply Button and Favorite Button */}
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, marginTop: "10px" }}>
    <Button variant="contained" color="primary" sx={{ flexGrow: 1, mr: 1 }}>Ứng tuyển ngay</Button>
    <Box 
      sx={{ 
        width: 32, 
        height: 32, 
        borderRadius: '50%',
        border: '1px solid #4B93CD',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
    >
      <FavoriteBorder sx={{ fontSize: 18, color: "#4B93CD" }} />
    </Box>
  </Box>
</Box>

<div className="border p-4 rounded-lg" style={{ backgroundColor: '#ECF7FF' }}>

<h2 className="text-lg font-bold mb-2">Mô tả công việc</h2>

<ul className="list-disc list-inside text-gray-600 mb-4">

<li>Dẫn dắt quá trình lập kế hoạch để phát triển các tính năng giúp thúc đẩy tăng trưởng tổng giá trị giao dịch của nền tảng.</li>

<li>Nghiên cứu và phân tích thị trường, đối thủ cạnh tranh và xu hướng sản phẩm toàn cầu để xác định và áp dụng các ý tưởng mới mang lại giá trị cho khách hàng.</li>

<li>Làm việc trực tiếp với khách hàng để hiểu được những khó khăn của họ nhằm phát triển các tính năng nền tảng giúp khách hàng dễ dàng tiếp cận nguồn tài trợ chính thức hơn.</li>

</ul>

<h2 className="text-lg font-bold mb-2">Yêu cầu ứng viên</h2>

<h3 className="font-bold mb-2">Yêu cầu:</h3>

<ul className="list-disc list-inside text-gray-600 mb-4">

<li>Cử nhân ngành Ngân hàng hoặc Tài chính từ một trường đại học danh tiếng như Đại học Ngoại thương, Đại học Kinh tế Quốc dân, Học viện Ngân hàng hoặc Học viện Tài chính ...</li>

<li>Ít nhất 1 năm kinh nghiệm làm PO/PM, ưu tiên trong lĩnh vực tín dụng hoặc ngân hàng số tại một ngân hàng hàng đầu.</li>

<li>Khả năng nghiên cứu, tổng hợp, phân tích thị trường và khách hàng để xác định hướng đi và lập kế hoạch phát triển sản phẩm.</li>

</ul>

<h3 className="font-bold mb-2">Ưu tiên:</h3>

<ul className="list-disc list-inside text-gray-600 mb-4">

<li>Bằng Thạc sĩ Quản trị Kinh doanh (MBA), tốt nhất là từ một trường đại học danh tiếng ở Anh, Hoa Kỳ, Úc hoặc các nước phương Tây khác.</li>

<li>Kiến thức về Tư duy thiết kế và phát triển sản phẩm.</li>

<li>Kiến thức cơ bản về thiết kế phần mềm (UI, UX).</li>

</ul>

<h2 className="text-lg font-bold mb-2">Quyền lợi</h2>

<ul className="list-disc list-inside text-gray-600 mb-4">

<li>Thỏa thuận mức lương</li>

<li>Xem xét Lương 2 lần/năm</li>

<li>Thưởng cuối năm theo hiệu suất, từ 2 tháng lương</li>

<li>Ăn trưa miễn phí tại công ty</li>

<li>Giờ làm việc: 8h sáng - 5h30 chiều (Thứ 2 - Thứ 6)</li>

<li>Môi trường làm việc hiện đại, rộng rãi với nhiều tiện ích giải trí</li>

</ul>

<h2 className="text-lg font-bold mb-2">Địa điểm làm việc</h2>

<p className="text-gray-600 mb-4">Tòa N03T6 Nguyễn Thị Minh Khai, Q3, TP. HCM</p>

<h2 className="text-lg font-bold mb-2">Thời gian làm việc</h2>

<p className="text-gray-600">Thứ 2 - Thứ 6 (từ 08:00 đến 17:30)</p>

</div>
          </Box>
        

        {/* Right Sidebar */}
        <Box sx={{ width: 450, p: 3, pr: 4 }}>
          <div className="w-1/3 ml-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Thông tin về công ty</h2>
              <div className="flex items-center mb-4">
              <img alt="Company logo" style={{ width: '60px', height: 'px' }} className="rounded-full mr-4" src="/logo-1.png" />
              <div>
                  <h3 className="font-bold">CÔNG TY CỔ PHẦN JETPAY</h3>
                  <p className="text-gray-600">1000+ nhân viên</p>
                  <p className="text-gray-600">BA, Tester, UI/UX, PO/PM</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                JetPay là Công ty thành viên của Công ty cổ phần MISA với quy mô hơn 3000 nhân sự, chuyên phát triển các giải pháp trung gian thanh toán: Cổng thanh toán, Ví điện tử, Ngân hàng điện tử, dịch vụ hỗ trợ thu/chi hộ...
              </p>
              <Button variant="contained" color="primary" fullWidth>Xem công ty</Button>
            </div>
          </div>
        </Box>
      </Box>
    </Box>

  );
};

export default JobDetails;