import React from 'react';
import "../index.css"; // Ensure the CSS file exists for styling.

const DownloadButton = () => {
    const resumeUrl = "https://github.com/Abhinav-Dwivedi430/Resume/edit/main/Abhinav_Dwivedi.md";

    return (
        <div className="button-container">
            <a
                href={resumeUrl}
                download="Resume.pdf"
                className="download-button"
            >
                Resume
            </a>
        </div>
    );
};

export default DownloadButton;
