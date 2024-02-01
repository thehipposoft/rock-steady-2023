
"use client"
import React from 'react';
import { ABOUT_TEXT, COMPANIES } from '../constants/about';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return(
        <div className={'flex sm:flex-row flex-col bg-white md:h-screen relative'}>
            <svg className={'absolute top-0 right-0'} width="612" height="461" viewBox="0 0 612 461" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M137.78 -85.4503C76.9675 -128.163 85.6592 -220.804 153.355 -251.46L1090.35 -675.778C1254.1 -749.932 1437.33 -621.1 1422.95 -441.918L1390.52 -37.7909L815.217 222.736C725.293 263.458 620.544 253.63 539.764 196.893L137.78 -85.4503Z" fill="url(#paint0_linear_1710_360)"/>
                <mask id="mask0_1710_360" maskUnits="userSpaceOnUse" x="0" y="-681" width="1391" height="963">
                <path d="M0.181641 -182.095L1099.7 -680.009L1390.52 -37.7909L696.117 276.67C680.002 283.968 661.229 282.207 646.753 272.039L0.181641 -182.095Z" fill="#F9F8FF"/>
                </mask>
                <g mask="url(#mask0_1710_360)">
                <ellipse cx="267.865" cy="218.492" rx="267.865" ry="218.492" transform="matrix(-0.51241 -0.858741 0.910133 -0.414317 443.485 417.973)" fill="url(#paint1_linear_1710_360)" fill-opacity="0.42" />
                </g>
                <defs>
                <linearGradient id="paint0_linear_1710_360" x1="158.073" y1="-200.169" x2="1389.81" y2="-205.403" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A60321"/>
                <stop offset="0.81119" stop-color="#671AE4"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1710_360" x1="267.865" y1="0" x2="267.865" y2="436.983" gradientUnits="userSpaceOnUse">
                <stop stop-color="#684FFF"/>
                <stop offset="1" stop-color="#FFF8F0" stop-opacity="0"/>
                </linearGradient>
                </defs>
            </svg>

            <svg className={'absolute bottom-0'} width="811" height="504" viewBox="0 0 811 504" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M643.742 427.009C698.032 445.192 698.436 521.839 644.34 540.593L-1005.32 1112.5L-1172.72 629.652L-92.3303 255.101C-21.3499 230.493 55.7821 230.087 127.018 253.945L643.742 427.009Z" fill="#F9F8FF"/>
                <path d="M611.896 434.882C670.145 448.922 674.101 530.275 617.49 549.901L-1372.61 1239.83L-1539.99 757.021L-203.492 293.684C-142.013 272.37 -75.7101 269.146 -12.4533 284.393L611.896 434.882Z" fill="url(#paint0_linear_1710_365)"/>
                <mask id="mask0_1710_365" maskUnits="userSpaceOnUse" x="-1173" y="236" width="1858" height="877">
                <path d="M643.742 427.009C698.032 445.192 698.436 521.839 644.34 540.593L-1005.32 1112.5L-1172.72 629.652L-92.3303 255.101C-21.3499 230.493 55.7821 230.087 127.018 253.945L643.742 427.009Z" fill="#F9F8FF"/>
                </mask>
                <g mask="url(#mask0_1710_365)">
                <ellipse cx="457.06" cy="304.261" rx="457.06" ry="304.261" transform="matrix(-0.851162 0.524903 -0.825623 -0.564222 337.248 720.492)" fill="url(#paint1_linear_1710_365)" fill-opacity="0.44" />
                </g>
                <defs>
                <linearGradient id="paint0_linear_1710_365" x1="351.065" y1="642.266" x2="-823.366" y2="-219.548" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A70422"/>
                <stop offset="0.660142" stop-color="#671AE4"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1710_365" x1="457.06" y1="0" x2="457.06" y2="608.522" gradientUnits="userSpaceOnUse">
                <stop stop-color="#684FFF"/>
                <stop offset="1" stop-color="#FFF8F0" stop-opacity="0"/>
                </linearGradient>
                </defs>
            </svg>

            <div
                className={`w-full flex`}
            >
                <div className={'sm:w-1/2 flex flex-col items-center relative justify-center'}>
                    <Image
                        alt={'Kamlesh Lad'}
                        src={'/assets/images/KAM_PHOTO2.png'}
                        className={'rounded-lg md:w-[50%]'}
                        width={600}
                        height={500}
                    />
                    <div className={'py-6 px-8 md:w-[55%] 2xl:w-[50%] rounded-md absolute bg-purple md:bottom-16 2xl:bottom-40 right-16'}>
                        <h4 className={'text-white font-poppins-bold'}>
                            Digital Transformation Leader - Agile Program Delivery
                        </h4>
                        <p className={'font-italic italic mt-2 text-white text-sm'}>
                            “I value freedom and equality and want to build a sustainable
                            world for our future generations through emerging digital
                            technologies and cultural change”.
                        </p>
                        <a
                            className='bg-none pt-4 float-right'
                            href='https://www.linkedin.com/in/kamleshlad/'
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                alt='Linked In icon'
                                className={'w-[32px] duration-300 hover:scale-110'}
                                src='/assets/images/about/linkedin.svg'
                            />
                        </a>
                    </div>
                </div>
                <div className={'sm:w-1/2 flex flex-col justify-center items-center sm:items-start relative h-fit m-auto'}>
                    <a
                        href={'/#ABOUT'}
                        className={'absolute flex justify-center duration-300 hover:scale-105 -top-10 right-[14rem]'}
                    >
                        &#8617; HOME PAGE
                    </a>
                    <h2 className={'text-4xl font-archivo-black text-text-primary'}>
                        ABOUT ME
                    </h2>
                    <p className={'pt-6 w-5/6 text-center sm:text-left'}>
                        {ABOUT_TEXT}
                    </p>
                    <p className={'mt-5'}>
                        Some of the enterprises I worked for:
                    </p>
                    <div className='md:flex my-12 items-center grid grid-cols-2 gap-4'>
                        {COMPANIES.map((value, index) =>
                        <a
                            href={value.url}
                            className={'bg-none w-full duration-300 hover:scale-110'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                key={index}
                                src={value.image}
                                className={'w-16'}
                                width={96}
                                height={20}
                                alt={value.alt}
                            />
                        </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;