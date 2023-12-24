import React from "react";

const CTABanner = () => {
    return (
        <div className={'p-10 flex bg-gradient-to-b from-gradient-from to-gradient-to w-full max-w-[1300px] rounded-md justify-between'}>
            <div>
                <h3>READY TO TALK ABOUT</h3>
                <h3>YOUR NEXT PROJECT</h3>
            </div>
            <button className={'btn-primary'}>
                Reach us
            </button>
        </div>
    )
};

export default CTABanner;