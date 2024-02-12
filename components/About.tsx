
"use client"
import React, { useEffect } from 'react';
import { ABOUT_TEXT, COMPANIES } from '../constants/about';
import Image from 'next/image';

const About = () => {
    useEffect(() => {
        const c:any = document.getElementById('canvas-about');

        if (c) {
            const colour = c.getAttribute('data-colour') || '#ff0000'; // changed color to red
            const $ = c.getContext('2d');
            const w = c.width = window.innerWidth;
            const h = c.height = c.nextElementSibling.offsetHeight || window.innerHeight;
            const intLines = 45; // increased the number of lines
            const draw = function (t:any) {
                $.clearRect(0, 0, c.width, c.height);
                $.lineWidth = 1;
                $.globalAlpha = .3;
                $.fillStyle = 'transparent';
                $.fillRect(0, 0, w, h);
                for (let i = 0; i < intLines; i++) {
                    $.strokeStyle = colour;
                    $.beginPath();
                    $.moveTo(-0, h / 2 + i);
                    for (let j = 0; j < w; j += 2) {
                        $.lineTo(
                            Math.cos(1 / 10) + j + 0.002 * j * j,
                            Math.floor(h / 2 + j / 2 *
                                Math.sin(j / 50 - t / 50 - 1 / 118) +
                                (i * 10) * Math.sin(j / 25 - (i + t) / 5))
                        );
                    }
                    ;
                    $.stroke();
                }
            }
            let t = 0;
            const run = function () {
                window.requestAnimationFrame(run);
                t += 0.025;
                draw(t);
            };
            run();
        }
    },[])

    return(
        <div className={'flex sm:flex-row flex-col bg-white md:h-screen relative overflow-hidden'}>
            <canvas className="absolute z-0 w-full h-[80%] rotate-[130deg] right-[35%] object-contain" id="canvas-about" data-colour="#b01e22"></canvas>
            <svg className={'absolute top-0 right-0 hidden md:block'} width="612" height="461" viewBox="0 0 612 461" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <svg className={'absolute bottom-0 max-w-full hidden md:block'} width="811" height="504" viewBox="0 0 811 504" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <div className={`w-full flex flex-wrap`}>
                <div className={'sm:w-1/2 flex flex-col items-center relative justify-center mt-16 md:mt-0'}>
                    <Image
                        alt={'Kamlesh Lad'}
                        src={'/assets/images/KAM_PHOTO2.png'}
                        className={'rounded-lg md:w-[50%]'}
                        width={600}
                        height={500}
                    />
                    <div className={'py-3 md:py-6 px-4 md:px-8 md:w-[55%] 2xl:w-[50%] rounded-md absolute bg-purple md:bottom-16 2xl:bottom-40 md:right-16 w-full -bottom-4'}>
                        <h4 className={'text-white font-poppins-bold'}>
                            Digital Transformation Leader - Agile Program Delivery
                        </h4>
                        <p className={'font-italic italic mt-2 text-white text-sm'}>
                            “I value freedom and equality and want to build a sustainable
                            world for our future generations through emerging digital
                            technologies and cultural change”.
                        </p>
                        <a
                            className={'float-right'}
                            href='https://www.linkedin.com/in/kamleshlad/'
                            target="_blank"
                            rel="noopener noreferrer">
                            <Image
                                alt={'Linked In icon'}
                                width={32}
                                height={32}
                                className={'w-[32px] duration-300 hover:scale-110'}
                                src={'/assets/images/about/linkedin.svg'}
                            />
                        </a>
                    </div>
                </div>
                <div className={'sm:w-1/2 flex flex-col justify-center items-center sm:items-start md:relative h-fit m-auto'}>
                    <a
                        href={'/#ABOUT'}
                        className={'absolute flex justify-center duration-300 hover:scale-105 hover:underline md:right-[14rem] top-6 md:top-2 right-6 h-fit'}
                    >
                        <svg fill="#000000" className={'mr-2'} width={25} height={20} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 869.959 869.958">
                            <path d="M146.838,484.584c10.271,10.395,23.804,15.6,37.347,15.6c13.329,0,26.667-5.046,36.897-15.155 c20.625-20.379,20.825-53.62,0.445-74.245l-41.688-42.191h423.78c88.963,0,161.34,72.376,161.34,161.339v4.32 c0,43.096-16.782,83.61-47.255,114.084c-20.503,20.502-20.503,53.744,0,74.246c10.251,10.251,23.688,15.377,37.123,15.377 c13.435,0,26.872-5.125,37.123-15.377c50.305-50.306,78.009-117.188,78.009-188.331v-4.32c0-71.142-27.704-138.026-78.009-188.331 c-50.306-50.305-117.189-78.009-188.331-78.009h-424.99l42.25-41.747c20.625-20.379,20.825-53.62,0.445-74.245 c-20.376-20.624-53.618-20.825-74.244-0.445L15.601,277.068c-9.905,9.787-15.517,23.107-15.6,37.03 c-0.084,13.924,5.367,27.31,15.154,37.215L146.838,484.584z">
                            </path>
                        </svg>
                        HOME PAGE
                    </a>
                    <h2 className={'text-4xl font-archivo-black text-text-primary mt-10 md:mt-0'}>
                        ABOUT ME
                    </h2>
                    <p className={'pt-6 w-5/6 text-center sm:text-left'}>
                        {ABOUT_TEXT}
                    </p>
                    <p className={'mt-5'}>
                        Some of the enterprises I worked for:
                    </p>
                    <div className='md:flex my-12 items-center grid md:grid-cols-2 grid-cols-3 gap-4'>
                        {COMPANIES.map((value, index) =>
                        <a
                            href={value.url}
                            className={'bg-none w-full duration-300 hover:scale-110'}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
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