import React from "react";

const VideoBanner = () => {
    return (
        <div>
            <video autoPlay muted>
                <source src="https://res.cloudinary.com/du31j65g6/video/upload/v1703040232/new-branding-video-comp_kx414d.mp4" type="video/mp4" />
            </video>
        </div>
    )
};

export default VideoBanner;