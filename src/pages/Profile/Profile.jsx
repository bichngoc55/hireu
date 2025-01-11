import { Add, Close, Edit, FavoriteBorder, ThumbUp } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import { Avatar, Box, Button, Card, CardContent, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';

const ProfilePage = () => {
  const connections = [
    {
      name: 'Nguyễn Như Huỳnh',
      role: 'Sinh viên trường Đại học Công nghệ Thông tin',
      avatar: '/api/placeholder/48/48'
    },
    {
      name: 'Hồ Huỳnh Thiên',
      role: 'Sinh viên trường Đại học Khoa học Tự Nhiên',
      avatar: '/api/placeholder/48/48'
    },
    {
      name: 'Nguyễn Thị Bích Ngọc',
      role: 'Sinh viên trường Đại học Sư phạm Kỹ Thuật TPHCM',
      avatar: '/api/placeholder/48/48'
    }
  ];

  return (
    <Box sx={{ 
      maxWidth: '100%',
      margin: '0 auto',
      display: 'flex',
      gap: 3,
      px: 2
    }}>
      {/* Left Column - Suggestions - 20% */}
      <Box sx={{ width: '20%', p: 3, pl: 4 }}>
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

      {/* Middle Column - Main Profile Content - 50% */}
      <Box sx={{ width: '50%' }}>
        {/* Header Card */}
        <Card sx={{ mb: 2, position: 'relative' }}>
          <Box sx={{ height: 160, bgcolor: '#001529', borderRadius: '4px 4px 0 0' }} />
          <Avatar
            src="/api/placeholder/120/120"
            sx={{
              width: 120,
              height: 120,
              border: '4px solid white',
              position: 'absolute',
              top: 100,
              left: 24
            }}
          />
          <CardContent sx={{ pt: 8, pb: 2 }}>
            <Typography variant="h5" gutterBottom>Hồ Kim Thiên Nga</Typography>
            <Typography color="textSecondary">
              Sinh viên trường Đại học Công nghệ Thông tin, ĐHQG - HCM
            </Typography>
            <Typography color="textSecondary" fontSize="small">
              Thủ Đức, TP. Hồ Chí Minh, Việt Nam
            </Typography>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Paper sx={{ mb: 2, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Kinh nghiệm</Typography>
            <IconButton size="small"><Close /></IconButton>
          </Box>
          <Typography color="textSecondary" fontSize="small" sx={{ mb: 2 }}>
            Giới thiệu những thành tựu của bản để thu hút nhiều lượt xem hồ sơ và kết nối
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mr: 2 }}>
              <Typography variant="body2" color="textSecondary">Nghề nghiệp</Typography>
              <Typography>Nơi làm việc</Typography>
              <Typography variant="caption" color="textSecondary">2023 - nay</Typography>
            </Box>
          </Box>
          <Button variant="outlined" size="small" color="primary">
            Thêm kinh nghiệm
          </Button>
        </Paper>

        {/* Education Section */}
        <Paper sx={{ mb: 2, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Học vấn</Typography>
            <Box>
              <IconButton size="small"><Add /></IconButton>
              <IconButton size="small"><Edit /></IconButton>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SchoolIcon sx={{ mr: 2, color: 'primary.main' }} />
            <Box>
              <Typography>Trường Đại học Công nghệ Thông tin, ĐHQG - HCM</Typography>
              <Typography variant="body2" color="textSecondary">2022 - 2026</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Skills Section */}
        <Paper sx={{ mb: 2, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Kỹ năng</Typography>
            <IconButton size="small"><Close /></IconButton>
          </Box>
          <Typography color="textSecondary" fontSize="small" sx={{ mb: 2 }}>
            Thể hiện khả năng của bạn với những cơ hội mới - 50% nhà tuyển dụng dựa vào dữ liệu kỹ năng để tìm kiếm ứng viên phù hợp.
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Kỹ năng mềm</Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Công nghệ</Typography>
          <Button variant="outlined" size="small" color="primary">
            Thêm kỹ năng
          </Button>
        </Paper>
      </Box>

      {/* Right Column - Connections - 30% */}
      <Box sx={{ width: '30%' }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Những người bạn có thể biết</Typography>
          <List>
            {connections.map((connection, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemAvatar>
                  <Avatar src={connection.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={connection.name}
                  secondary={connection.role}
                  sx={{
                    '& .MuiListItemText-primary': { fontSize: '0.9rem' },
                    '& .MuiListItemText-secondary': { fontSize: '0.8rem' }
                  }}
                />
                <Button variant="outlined" size="small" sx={{ ml: 2 }}>
                  Kết bạn
                </Button>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProfilePage;