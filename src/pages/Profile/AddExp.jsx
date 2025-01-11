import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import React, { useState } from 'react';

const AddExperienceModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    occupation: '',
    position: '',
    company: '',
    address: '',
    isCurrentlyWorking: false,
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
    // Clear error when user types
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      isCurrentlyWorking: event.target.checked
    });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.occupation) newErrors.occupation = 'Vui lòng nhập nghề nghiệp';
    if (!formData.position) newErrors.position = 'Vui lòng chọn vị trí làm việc';
    if (!formData.company) newErrors.company = 'Vui lòng nhập tên công ty';
    if (!formData.address) newErrors.address = 'Vui lòng nhập địa chỉ';
    if (!formData.startMonth || !formData.startYear) newErrors.startDate = 'Vui lòng chọn ngày vào làm';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ borderBottom: 1, borderColor: 'divider' }}>
        Thêm kinh nghiệm
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Nghề nghiệp"
            required
            fullWidth
            placeholder="Ví dụ: Thiết kế giao diện người dùng"
            value={formData.occupation}
            onChange={handleChange('occupation')}
            error={!!errors.occupation}
            helperText={errors.occupation}
          />

          <FormControl required fullWidth error={!!errors.position}>
            <InputLabel>Vị trí làm việc</InputLabel>
            <Select
              value={formData.position}
              onChange={handleChange('position')}
              placeholder="Vui lòng chọn vị trí làm việc"
            >
              <MenuItem value="designer">Designer</MenuItem>
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </Select>
            {errors.position && <FormHelperText>{errors.position}</FormHelperText>}
          </FormControl>

          <TextField
            label="Tên công ty"
            required
            fullWidth
            placeholder="Ví dụ: FPT Software"
            value={formData.company}
            onChange={handleChange('company')}
            error={!!errors.company}
            helperText={errors.company}
          />

          <TextField
            label="Địa chỉ"
            required
            fullWidth
            placeholder="Ví dụ: Quận 9, Thủ Đức, TP. HCM"
            value={formData.address}
            onChange={handleChange('address')}
            error={!!errors.address}
            helperText={errors.address}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isCurrentlyWorking}
                onChange={handleCheckboxChange}
              />
            }
            label="Tôi vẫn đang làm ở công ty trên"
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl sx={{ flex: 1 }} required error={!!errors.startDate}>
              <InputLabel>Tháng</InputLabel>
              <Select
                value={formData.startMonth}
                onChange={handleChange('startMonth')}
                label="Tháng"
              >
                {months.map(month => (
                  <MenuItem key={month} value={month}>Tháng {month}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ flex: 1 }} required error={!!errors.startDate}>
              <InputLabel>Năm</InputLabel>
              <Select
                value={formData.startYear}
                onChange={handleChange('startYear')}
                label="Năm"
              >
                {years.map(year => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {!formData.isCurrentlyWorking && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl sx={{ flex: 1 }}>
                <InputLabel>Tháng</InputLabel>
                <Select
                  value={formData.endMonth}
                  onChange={handleChange('endMonth')}
                  label="Tháng"
                >
                  {months.map(month => (
                    <MenuItem key={month} value={month}>Tháng {month}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <InputLabel>Năm</InputLabel>
                <Select
                  value={formData.endYear}
                  onChange={handleChange('endYear')}
                  label="Năm"
                >
                  {years.map(year => (
                    <MenuItem key={year} value={year}>{year}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="outlined" color="error" onClick={onClose}>
              Huỷ
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Thêm kinh nghiệm
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddExperienceModal;