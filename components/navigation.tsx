"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navigation = () => {
    const [showNav, setShowNav] = useState<boolean>(false);
    const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNav(true);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <nav className={`${showNav ? 'opacity-100' : 'opacity-0'} duration-300 transition-all flex w-full justify-between items-center gap-20 bg-primary px-10 py-4 absolute z-10`}>
            <Image
                alt={'RockSteady Logo'}
                src={'/assets/logo.png'}
                width={100}
                height={50}
            />
            <ul className={'justify-center gap-32 hidden md:flex'}>
                <li>
                    <a href={'#section-services'}>Services</a>
                </li>
                <li>
                    <a href={'#section-how-works'}>How</a>
                </li>
                <li>
                    <a href={'#section-values'}>Values</a>
                </li>
                <li>
                    <a href={'#section-mission'}>About</a>
                </li>
            </ul>
            <a href={'/#contact'} className={'hover:bottom-0 hover:no-underline'}>
                <button className={'btn-primary hidden md:flex max-h-[49px] text-lg'}>
                    Contact us
                </button>
            </a>

            <svg className={'h-[3rem] md:hidden'} onClick={() => setOpenMobileNav(true)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_iconCarrier">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                </g>
            </svg>
            <ul className={`${openMobileNav ? ' translate-x-[-100%]' : ''} p-4 transition-all duration-200 absolute h-screen w-[90vw] bg-white top-0 left-[100%] md:hidden`}>
                <li className={'mb-4'}>
                    <svg className={'ml-auto'} onClick={() => setOpenMobileNav(false)} viewBox="0 0 24 24" width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_iconCarrier">
                            <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                    </svg>
                </li>
                <li>
                    <Image
                        alt={'RockSteady Logo'}
                        src={'/assets/logo.png'}
                        width={150}
                        height={64}
                        className={'m-auto mb-10'}
                    />
                </li>
                <li className={'my-5'}>
                    <a className={'text-text-primary text-2xl'} href={'#section-services'} onClick={() => setOpenMobileNav(false)}>
                        Services
                    </a>
                </li>
                <li className={'my-5'}>
                    <a className={'text-text-primary text-2xl'} href={'#section-how-works'} onClick={() => setOpenMobileNav(false)}>
                        How
                    </a>
                </li>
                <li className={'my-5'}>
                    <a className={'text-text-primary text-2xl'} href={'#section-values'} onClick={() => setOpenMobileNav(false)}>
                        Values
                    </a>
                </li>
                <li className={'my-5'}>
                    <a className={'text-text-primary text-2xl'} href={'#section-mission'} onClick={() => setOpenMobileNav(false)}>
                        About
                    </a>
                </li>
                <button className={'btn-primary flex m-auto w-full mt-16 max-h-[49px]'}>
                    Contact us
                </button>
            </ul>
        </nav>
    )
};

export default Navigation;