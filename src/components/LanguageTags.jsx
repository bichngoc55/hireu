// LanguageTags.js
import React from "react";
import { Box, Chip } from "@mui/material";

const LanguageTags = ({ languages, onLanguageSelect }) => {
  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
      {languages.map((lang) => (
        <Chip
          key={lang.name}
          label={`${lang.name} ${lang.count}`}
          onClick={() => onLanguageSelect(lang.name)}
          sx={{
            backgroundColor: "#6698CB",
            color: "white",
            "&:hover": {
              backgroundColor: "#5588bb",
            },
          }}
        />
      ))}
    </Box>
  );
};

export default LanguageTags;
