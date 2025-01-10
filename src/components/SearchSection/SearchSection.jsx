import React from "react";
import "./SearchSection.css";

const SearchSection = ({
  onSearch,
  onFilterChange,
  filters = {
    level: "",
    position: "",
    specialization: "",
  },
}) => {
  const filterOptions = {
    level: ["Intern", "Junior", "Senior", "Lead"],
    position: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "DevOps Engineer",
    ],
    specialization: [
      "Web Development",
      "Software Engineering",
      "Mobile Development",
      "Cloud Computing",
    ],
  };

  return (
    <div className="search-section">
      <div className="search-box">
        <input
          type="text"
          placeholder="Tìm kiếm trên HireU"
          style={{ fontFamily: "Asap" }}
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="filter-box">
        <div className="filter-select">
          <select
            value={filters.level}
            onChange={(e) => onFilterChange("level", e.target.value)}
            className="select"
          >
            <option value="">Cấp bậc</option>
            {filterOptions.level.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-select">
          <select
            value={filters.position}
            onChange={(e) => onFilterChange("position", e.target.value)}
            className="select"
          >
            <option value="">Vị trí</option>
            {filterOptions.position.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-select">
          <select
            value={filters.specialization}
            onChange={(e) => onFilterChange("specialization", e.target.value)}
            className="select"
          >
            <option value="">Chuyên ngành</option>
            {filterOptions.specialization.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
