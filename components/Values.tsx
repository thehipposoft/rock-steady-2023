"use client"
import React, { useEffect } from "react";
import Glide from '@glidejs/glide';
import { VALUES } from "@/constants/values";

const Values = () => {
    useEffect(() => {
        new Glide('.glide-values', {
            type: 'carousel',
            perView: 1,
        }).mount();
    },[]);

    return (
        <section id={"section-values"} className={'min-h-screen w-full bg-texture bg-cover bg-no-repeat p-10 flex flex-col'}>
            <div className={'flex items-center justify-center 2xl:mb-10 md:mb-4'}>
                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                </svg>
                <h2 className={'section-title mx-10'}>
                    <span className={'section-title-empty'}>OUR </span>
                    VALUES
                </h2>
                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                </svg>
            </div>
            <div className={'hidden md:flex flex-wrap justify-center md:p-2 2xl:p-6 flex-grow'}>
                {
                    VALUES.map((v, index) => {
                        return (
                            <div key={`value-${index}`} className={'group w-1/3 md:p-6 2xl:p-10 flex flex-col items-center hover:scale-110 transition-all'}>
                                <div className={'bg-[#b40fe71a] rounded-full p-3 icon-border h-24 w-24 mb-4'}>
                                    {v.icon}
                                </div>
                                <h4 className={'text-2xl text-text-primary font-poppins-extrabold mb-3'}>
                                    {v.title}
                                </h4>
                                <p className={'text-center text-[13px]'}>
                                    {v.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={"glide-values mt-10 md:hidden"}>
                <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides">
                        {
                            VALUES.map((v, index) => {
                                return (
                                    <div key={`value-${index}`} className={'group flex flex-col items-center transition-all'}>
                                        <div className={'bg-[#b40fe71a] rounded-full p-3 icon-border h-24 w-24 mb-4'}>
                                            {v.icon}
                                        </div>
                                        <h4 className={'text-2xl text-text-primary font-poppins-extrabold mb-3'}>
                                            {v.title}
                                        </h4>
                                        <p className={'text-center text-[13px]'}>
                                            {v.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Values;