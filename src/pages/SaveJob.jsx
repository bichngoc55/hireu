import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';
import React, { useState } from 'react';

const SaveList = () => {
  const [filterValue, setFilterValue] = useState('recent');

  const jobs = [
    {
      id: 1,
      logo: '9',
      title: 'PHP Web Developer (Junior/Mid)',
      company: 'CÔNG TY TNHH THK HOLDINGS VIỆT NAM',
      location: 'TP. HCM',
      duration: '1 năm',
      salary: '10 - 15 triệu',
      savedDate: '30/12/2024 - 14:45',
      updatedAt: '17 phút trước'
    },
    {
      id: 2,
      logo: 'JP',
      title: 'Product Manager/ Product Owner',
      company: 'CÔNG TY CỔ PHẦN JETPAY',
      location: 'Hà Nội',
      duration: '2 năm',
      salary: '20 - 35 triệu',
      savedDate: '28/12/2024 - 11:15',
      updatedAt: '2 ngày trước'
    },
    {
      id: 3,
      logo: '1C',
      title: 'Chuyên Viên Triển Khai Phần Mềm B2B',
      company: 'CÔNG TY TNHH 1C VIỆT NAM',
      location: 'Hà Nội',
      duration: 'Dưới 2 năm',
      salary: '15 - 30 triệu',
      savedDate: '01/01/2025 - 09:21',
      updatedAt: '1 tuần trước'
    }
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: '#F4F4F4', 
        minHeight: '100vh',
        fontFamily: 'Asap, sans-serif',
        '& *': { fontFamily: 'Asap, sans-serif' }
      }}
    >
      <Box sx={{ display: 'flex', maxWidth: '100%' }}>
        
       
        

        {/* Main Content */}
        <Box 
          sx={{ 
            flex: 1, 
            p: 3, 
            backgroundImage: 'url("/path-to-your-background-image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0 20px 20px 0',
            overflow: 'hidden'
          }}
        >
          {/* Tách mục "VIỆC LÀM ĐÃ LƯU" ra */}
          <Box sx={{ bgcolor: '#FFFFFF', p: 4, borderRadius: 2, boxShadow: 2, mb: 3 }}>
            <Typography variant="h5" className="text-white mb-2">
              VIỆC LÀM ĐÃ LƯU
            </Typography>
            <Typography variant="body1" className="text-gray-200" style={{ paddingTop: "15px" }}>
              Xem lại danh sách những việc làm mà bạn đã lưu trước đó. Ứng tuyển ngay để không
              bỏ lỡ cơ hội nghề nghiệp dành cho bạn.
            </Typography>
          </Box>

          {/* Danh sách việc làm đã lưu */}
          <Box sx={{ bgcolor: '#FFFFFF', p: 4, borderRadius: 2, boxShadow: 2 }}>
            <div className="text-gray-600 mb-4" style={{ paddingTop: "15px", paddingBottom: '15px' }}>
              Danh sách <strong>03</strong> việc làm đã lưu
            </div>
            <RadioGroup 
              row 
              value={filterValue} 
              onChange={(e) => setFilterValue(e.target.value)}
              className="mb-4"
            >
              <FormControlLabel 
                value="recent" 
                control={<Radio color="primary" />} 
                label="Cập nhật gần nhất" 
              />
              <FormControlLabel 
                value="urgent" 
                control={<Radio color="primary" />} 
                label="Tuyển gấp" 
              />
              <FormControlLabel 
                value="salary" 
                control={<Radio color="primary" />} 
                label="Lương cao nhất" 
              />
            </RadioGroup>
          </Box>

          {/* Job Listings */}
          <Box style = {{paddingTop:'20px'}}>
            {jobs.map(job => (
              <Card key={job.id} sx={{ mb: 2, borderRadius: 3, bgcolor: '#ECF7FF' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <img 
                      src="/logo-2.png" 
                      alt="Company" 
                      style={{ 
                        borderRadius: 8, 
                        width: '100px', 
                        height: '100px', 
                        objectFit: 'cover' 
                      }} 
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ color: '#000000', fontWeight: 500, mb: 1 }}>
                        <strong>{job.title}</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1, color: '#6D6C6C' }}>{job.company}</Typography>
                      <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                        <Chip
                          label={job.location}
                          size="small"
                          sx={{
                            bgcolor: '#D3EEFF',
                            borderRadius: 1,
                            color: '#4B93CD'
                          }}
                        />
                        <Chip
                          label={job.duration}
                          size="small"
                          sx={{
                            bgcolor: '#D3EEFF',
                            borderRadius: 1,
                            color: '#4B93CD'
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="textSecondary">
                        Backend Developer | IT - Phần mềm
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right', minWidth: 150 }}>
                      <Typography sx={{ color: '#4B93CD', fontWeight: 500, mb: 1, fontSize: '1.5rem' }}>
                        <strong>{job.salary}</strong>
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                        Đã đăng {job.updatedAt}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: '#4B93CD',
                            borderRadius: 1,
                            '&:hover': { bgcolor: '#3d7ab0' }
                          }}
                        >
                          Ứng tuyển
                        </Button>
                        <Button
                          sx={{
                            bgcolor: '#E7E7E7',
                            borderRadius: 1,
                            color: '#000000'
                          }}
                        >
                          Bỏ lưu
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ width: 450, p: 3, pr: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
            Top công ty nổi bật
          </Typography>
          <Card sx={{ borderRadius: 3, mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img 
                    src="/logo-1.png" 
                    alt="NashTech" 
                    style={{ 
                      borderRadius: '50%', 
                      width: '60px', 
                      height: '60px', 
                      objectFit: 'cover' 
                    }} 
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>NashTech</Typography>
                    <Typography variant="body2" color="textSecondary">1000+ nhân viên</Typography>
                    <Typography variant="body2" color="textSecondary">BA, Tester, UI/UX</Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 1,
                    bgcolor: '#CBEAFF', 
                    borderColor: '#CBEAFF',
                    color: '#4B93CD', 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      borderColor: '#3d7ab0'
                    }
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

export default SaveList;