import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa"; // Import play/pause icons
import musicFile from "../assets/bg.mp3"; // Import your music file

const BackgroundMusic = ({ volume = 0.09 }) => {
    const [isPlaying, setIsPlaying] = useState(true); // Default state: Playing
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;

            // Attempt to play the audio when the component mounts
            const playAudio = async () => {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.warn("Autoplay prevented by browser. User interaction required.");
                    setIsPlaying(false); // Set to false if autoplay fails
                }
            };

            playAudio();
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

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }} // Hover effect
            whileTap={{ scale: 0.9 }} // Click effect
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            style={{
                padding: "0px",
                margin: "0px",
                position: "fixed",
                bottom: "20px",
                right: "25px",
                zIndex: 1000,
                cursor: "pointer",
                background: isPlaying ? "#ff4848" : "rgba(56, 56, 56, 0.53)",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            onClick={togglePlay}
        >
            <audio ref={audioRef} src={musicFile} loop />

            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ color: "white", fontSize: "20px" }}
            >
                {isPlaying ? <FaPause /> : <FaPlay />}
            </motion.div>
        </motion.div>
    );
};

export default BackgroundMusic;
