import React from "react";

const CTABanner = () => {
    return (
        <section className={'w-full px-6 h-screen flex items-center'}>
            <div className={'m-auto h-fit px-4 md:px-10 py-6 md:py-14 my-10 flex flex-wrap bg-gradient-to-b from-gradient-from to-gradient-to w-full max-w-[1300px] rounded-md justify-between items-center'}>
                <div>
                    <h3 className={'section-title text-white text-2xl md:text-5xl mb-2 '}>
                        READY TO TALK ABOUT
                    </h3>
                    <h3 className={'section-title-empty text-2xl md:text-5xl text-white-stroke'}>
                        YOUR NEXT PROJECT?
                    </h3>
                </div>
                <a href={'/#contact'}>
                    <button className={'btn-primary h-fit md:mt-0 mt-6'}>
                        Reach us
                    </button>
                </a>
            </div>
        </section>
    )
};

export default CTABanner;