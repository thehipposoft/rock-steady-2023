"use client"
import React, { useRef } from "react";
import { VALUES } from "@/constants/values";
import GlideReact from 'react-glidejs';

const Values = () => {
    const gliderRef = useRef(null);

    return (
        <section id={"section-values"} className={'md:min-h-screen w-full bg-texture bg-cover bg-no-repeat p-10 flex flex-col'}>
            <div className={'flex items-center justify-center 2xl:mb-10 md:mb-4 mb-10'}>
                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                </svg>
                <h2 className={'section-title mx-10 text-center'}>
                    <span className={'section-title-empty'}>OUR </span>
                    VALUES
                </h2>
                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                </svg>
            </div>
            <div className={'hidden md:grid grid-cols-2 justify-center md:p-2 2xl:p-3 flex-grow gap-4'}>
                {
                    VALUES.map((v, index) => {
                        return (
                            <div key={`value-${index}`} className={'group col-span-1 p-6 flex flex-col items-center hover:scale-110 transition-all hover:bg-[#5a02200d] rounded-xl '}>
                                <div className={'bg-[#b40fe71a] rounded-full p-3 icon-border h-24 w-24 mb-4'}>
                                    {v.icon}
                                </div>
                                <h4 className={'text-3xl text-text-primary font-poppins-extrabold mb-3 text-center'}>
                                    {v.title}
                                </h4>
                                <p className={'text-center'}>
                                    {v.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={'my-auto md:hidden'}>
                <GlideReact
                        ref={gliderRef}
                        throttle={0}
                        type={"carousel"}
                        perView={1}
                        focusAt={'center'}
                    >
                        {
                            VALUES.map((v, index) => {
                                return (
                                    <div key={`value-${index}`} className={'flex flex-col items-center transition-all justify-center'}>
                                        <div className={'bg-[#b40fe71a] rounded-full p-3 icon-border h-32 w-32 mb-4'}>
                                            {v.icon}
                                        </div>
                                        <h4 className={'text-center text-3xl text-text-primary font-poppins-extrabold mb-6'}>
                                            {v.title}
                                        </h4>
                                        <p className={'text-center'}>
                                            {v.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                </GlideReact>
            </div>
        </section>
    )
};

export default Values;