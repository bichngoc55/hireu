import { FavoriteBorder, Search, ThumbUp } from '@mui/icons-material';
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
    Typography
} from '@mui/material';
import React from 'react';

const JobBoard = () => {
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
        '& *': { fontFamily: 'Asap, sans-serif' }
      }}
    >
      <Box sx={{ display: 'flex', maxWidth: '100%', gap: 6 }}>
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
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Select
                displayEmpty
                defaultValue=""
                sx={{
                  width: '33%',
                  bgcolor: 'white',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E0E0E0'
                  }
                }}
              >
                <MenuItem value="">Cấp bậc</MenuItem>
              </Select>
              <Select
                displayEmpty
                defaultValue=""
                sx={{
                  width: '33%',
                  bgcolor: 'white',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E0E0E0'
                  }
                }}
              >
                <MenuItem value="">Vị trí</MenuItem>
              </Select>
              <Select
                displayEmpty
                defaultValue=""
                sx={{
                  width: '33%',
                  bgcolor: 'white',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E0E0E0'
                  }
                }}
              >
                <MenuItem value="">Chuyên ngành</MenuItem>
              </Select>
            </Box>
          </Box>

          {/* Technology Tags */}
          <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
            {technologies.map((tech) => (
              <Chip
                key={tech.name}
                label={`${tech.name} ${tech.count}`}
                sx={{
                  bgcolor: tech.name === 'Khác' ? '#6D6C6C' : '#4B93CD',
                  color: 'white',
                  borderRadius: 1,
                  height: 28
                }}
              />
            ))}
          </Box>

          {/* Job Listings */}
          <Box>
  <Card sx={{ mb: 2, borderRadius: 3, bgcolor: '#ECF7FF' }}>
    <CardContent>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <img 
          src="/logo-2.png" 
          alt="Company" 
          style={{ 
            borderRadius: 8, 
            width: '100px', // Đặt chiều rộng cố định
            height: '100px', // Đặt chiều cao cố định
            objectFit: 'cover' // Đảm bảo hình ảnh được cắt đúng tỉ lệ
          }} 
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: '#000000', fontWeight: 500, mb: 1 }}>
            <strong>PHP Web Developer (Junior/Mid)</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#6D6C6C' }}>CÔNG TY TNHH THK HOLDINGS VIỆT NAM</Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
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
          <Typography variant="body2" color="textSecondary">
            Backend Developer | IT - Phần mềm
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right', minWidth: 150 }}>
          <Typography sx={{ color: '#4B93CD', fontWeight: 500, mb: 1, fontSize: '1.5rem' }}>
            <strong>10 - 15 triệu</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Đã đăng 30 phút trước
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
      </Box>
    </CardContent>
  </Card>
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
              borderRadius: '50%', // Định dạng hình tròn
              width: '60px', // Chiều rộng
              height: '60px', // Chiều cao
              objectFit: 'cover' // Đảm bảo hình ảnh không bị biến dạng
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
            bgcolor: '#CBEAFF', // Màu nền
            borderColor: '#CBEAFF',
            color: '#4B93CD', // Màu chữ
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

export default JobBoard;