// SearchSection.js
import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchSection = ({
  onSearch,
  onFilterChange,
  filters = {
    level: "",
    position: "",
    specialization: "",
  },
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Tìm kiếm trên HireU"
          onChange={(e) => onSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#666" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "white",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Select
          fullWidth
          displayEmpty
          value={filters.level}
          onChange={(e) => onFilterChange("level", e.target.value)}
          sx={{ backgroundColor: "white" }}
        >
          <MenuItem value="">Cấp bậc</MenuItem>
        </Select>
        <Select
          fullWidth
          displayEmpty
          value={filters.position}
          onChange={(e) => onFilterChange("position", e.target.value)}
          sx={{ backgroundColor: "white" }}
        >
          <MenuItem value="">Vị trí</MenuItem>
        </Select>
        <Select
          fullWidth
          displayEmpty
          value={filters.specialization}
          onChange={(e) => onFilterChange("specialization", e.target.value)}
          sx={{ backgroundColor: "white" }}
        >
          <MenuItem value="">Chuyên ngành</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default SearchSection;
