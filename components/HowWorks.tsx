import React from "react";
import Image from "next/image";

const HowWorks = () => {
    return (
        <div className={'h-screen grid grid-cols-2 w-full'}>
            <div className={'relative'}>
                <Image
                    alt={'How it works'}
                    src={'/assets/services/digital-brand.png'}
                    fill
                    className={'object-cover w-full'}
                />
            </div>
            <div>
                Carousel
            </div>
        </div>
    )
};

export default HowWorks;