import React from "react";

const CTABanner = () => {
    return (
        <div className={'px-10 py-14 flex bg-gradient-to-b from-gradient-from to-gradient-to w-full max-w-[1300px] rounded-md justify-between items-center'}>
            <div>
                <h3 className={'section-title text-white text-5xl mb-2'}>
                    READY TO TALK ABOUT
                </h3>
                <h3 className={'section-title-empty text-5xl text-white-stroke'}>
                    YOUR NEXT PROJECT?
                </h3>
            </div>
            <button className={'btn-primary h-fit'}>
                Reach us
            </button>
        </div>
    )
};

export default CTABanner;