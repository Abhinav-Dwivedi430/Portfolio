import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundMusic = ({ audioSrc, volume = 0.09 }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Set the initial volume of the audio
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Animation variants for sound waves
    const waveVariants = {
        initial: { scaleY: 0.5 },
        animate: {
            scaleY: [0.5, 1, 0.5], // Bouncing effect
            transition: {
                duration: 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, cursor: 'pointer' }}>
            <audio ref={audioRef} src={audioSrc} loop />
            <div
                onClick={togglePlay}
                style={{
                    width: '50px',
                    height: '40px',
                    borderRadius: '50%',
                    background: isPlaying ? '#ff4848' : '#7777',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Sound Waves */}
                {isPlaying && (
                    <>
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '2px',
                                height: '20px',
                                background: '#fff',
                                left: '15px',
                            }}
                            variants={waveVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.2 }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '2px',
                                height: '20px',
                                background: '#fff',
                                left: '19px',
                            }}
                            variants={waveVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.4 }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '2px',
                                height: '20px',
                                background: '#fff',
                                left: '23px',
                            }}
                            variants={waveVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.6 }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '2px',
                                height: '20px',
                                background: '#fff',
                                left: '27px',
                            }}
                            variants={waveVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.8 }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '2px',
                                height: '20px',
                                background: '#fff',
                                left: '31px',
                            }}
                            variants={waveVariants}
                            initial="initial"
                            animate="animate"
                            // transition={{ delay: 1.0 }}
                        />
                    </>
                )}

                {/* Play/Pause Text */}
                <span style={{ fontSize: '14px', color: '#fff' }}>
                    {isPlaying ? '' : '|||||'}
                </span>
            </div>
        </div>
    );
};

export default BackgroundMusic;
