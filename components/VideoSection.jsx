'use client';
import { useState, useRef } from 'react';
import SectionHeader from './SectionHeader';
import '@styles/videosection.css';


function VideoSection() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleButtonClick = () => {
        const video = videoRef.current;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <SectionHeader title="فيديو" number="02" />
            <section id="video" className='video-section'>
                <div className='container'>
                    <div className='video-content'>
                        <video alt="worksamplesVideo" loading="lazy" ref={videoRef} muted src="/videos/introVid.mp4"></video>
                        {isPlaying ? null : 
                        <button id="Play Video" aria-label='play video' onClick={handleButtonClick}>
                            <i className={`lab la-${isPlaying ? 'stop' : 'google-play'}`}></i>
                        </button>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default VideoSection;
