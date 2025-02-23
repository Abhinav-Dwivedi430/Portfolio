import React from 'react';
import { socials } from '../constants';

const SocialMediaLinks = () => {
    return (
        <div
            style={{
                position: 'fixed', // Keeps the icons fixed on the screen
                top: '50%', // Vertically centers the icons
                right: '0', // Aligns the icons to the right edge
                transform: 'translateY(-50%)', // Corrects vertical alignment
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                padding: '10px',
                borderRadius: '10px 0 0 10px', // Rounded edges for a sleek look
                zIndex: 1000, // Ensures the icons appear above most elements
            }}
        >
            {socials.map((item) => (
                <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, background 0.3s ease',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <img
                        src={item.icon}
                        alt={`${item.name} icon`}
                        style={{
                            width: '30px', // Icon size
                            height: '30px',
                        }}
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialMediaLinks;
