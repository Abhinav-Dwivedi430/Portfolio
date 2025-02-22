import React from 'react';
import "../index.css"; // Ensure the CSS file exists for styling.

const DownloadButton = () => {
    const resumeUrl = "https://github.com/Abhinav-Dwivedi430/Resume/blob/dc978765a123b4eb56a0dac0a0be8d61ea1d6314/Abhinav%20Dwivedi.pdf";

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
