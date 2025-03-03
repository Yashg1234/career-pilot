"use client";

import { useEffect, useRef, useState } from "react";

const Preloader = ({ setLoading }) => {
    const [showPreloader, setShowPreloader] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        // Check screen size and disable preloader on small screens
        if (window.innerWidth < 640) {
            setShowPreloader(false);
            setLoading(false); // Skip preloader for small screens
            return;
        }

        const timer = setTimeout(() => setLoading(false), 8000); // Adjust duration

        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play();
                } catch (error) {
                    console.log("Autoplay blocked:", error);
                }
            }
        };

        const audioTimeout = setTimeout(playAudio, 500);

        return () => {
            clearTimeout(timer);
            clearTimeout(audioTimeout);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [setLoading]);

    if (!showPreloader) return null; // Don't render preloader on small screens

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            {/* Preloader Video */}
            <video
                src="/preloader2.mp4"
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setLoading(false)}
            />

            {/* Separate Preloader Audio */}
            <audio ref={audioRef} src="/preloader-audio.mp3" />
        </div>
    );
};

export default Preloader;
