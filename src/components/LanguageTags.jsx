import React from "react";

const LanguageTags = ({ languages, onLanguageSelect, selectedLanguage }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "24px",
      }}
    >
      {languages.map((lang) => (
        <div
          key={lang.name}
          onClick={() => onLanguageSelect(lang.name)}
          style={{
            backgroundColor:
              selectedLanguage === lang.name ? "#4B93CD" : "white",
            color: selectedLanguage === lang.name ? "white" : "#a0a0a0",
            padding: "4px 10px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#5588bb";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color =
              selectedLanguage === lang.name ? "white" : "#a0a0a0";
          }}
        >
          <span style={{ marginRight: "6px" }}>{lang.name}</span>
          <span
            style={{
              backgroundColor: selectedLanguage === lang.name ? "white" : "#4B93CD",
              borderRadius: "12px",
              padding: "0px 8px",
              color: selectedLanguage === lang.name ? "#4B93CD" : "white"
            }}
          >
            {lang.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LanguageTags;
