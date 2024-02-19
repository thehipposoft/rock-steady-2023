"use client"
import React, {useEffect, useState, useRef} from "react";
import Navigation from "./navigation";

const VideoBanner = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [showSkip, setShowSkip] = useState<boolean>(false);
    const [videoFinished, setVideoFinished] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkip(true);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (section) {
                const rect = section.getBoundingClientRect();
                const video = videoRef.current;

                if (
                    rect.bottom <= 0 ||
                    rect.right <= 0 ||
                    rect.left >= window.innerWidth ||
                    rect.top >= window.innerHeight
                ) {
                    setVideoFinished(true);

                    if(video) {
                        video.pause();
                    }
                } else {
                    video?.play();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleVideoEnd = () => {
        if(videoFinished) {
            window.location.href = "/#section-services";
        }

        const video = videoRef.current;

        if (video) {
            video.currentTime = 0;
            video.play();
        }
        setVideoFinished(true);
    };

    return (
        <section ref={sectionRef} className={'relative h-screen flex overflow-hidden w-full bg-primary'}>
            <Navigation />
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className={'object-cover w-full md:h-full h-[45%] my-auto'}
                onEnded={handleVideoEnd}
            >
                <source src="https://res.cloudinary.com/du31j65g6/video/upload/v1703040232/new-branding-video-comp_kx414d.mp4" type="video/mp4" />
            </video>
            <a
                href={'/#section-services'}
                onClick={() => setVideoFinished(true)}
                className={`${showSkip ? 'md:opacity-100' : 'md:opacity-0'} hover:bottom-11 hover:no-underline group transition-all duration-150 absolute text-xl bottom-11 translate-x-[50%] right-[50%] flex cursor-pointer items-center hover:bg-[#ffffff3d] px-3 rounded-2xl border-2`}>
                <p className={'text-white w-full group-hover:underline text-sm'}>
                    skip video
                </p>
                <svg viewBox="0 0 24 24" width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M19 5V19M7.59951 17.9204L13.4383 13.2494C13.9721 12.8223 14.239 12.6088 14.3357 12.3508C14.4204 12.1246 14.4204 11.8754 14.3357 11.6492C14.239 11.3912 13.9721 11.1777 13.4383 10.7506L7.59951 6.07961C6.76734 5.41387 6.35125 5.081 6.00108 5.08063C5.69654 5.0803 5.40845 5.21876 5.21846 5.45677C5 5.73045 5 6.2633 5 7.329V16.671C5 17.7367 5 18.2695 5.21846 18.5432C5.40845 18.7812 5.69654 18.9197 6.00108 18.9194C6.35125 18.919 6.76734 18.5861 7.59951 17.9204Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </g>
                </svg>
            </a>
        </section>
    )
};

export default VideoBanner;