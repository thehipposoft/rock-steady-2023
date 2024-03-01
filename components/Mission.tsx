"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
    useEffect(() => {
        const canvas:any = Array.from(document.querySelectorAll('#canvas-mission'));

        canvas.forEach((c:any) => {
            if (c) {
                const colour = c.getAttribute('data-colour') || '#00a098';
                const $ = c.getContext('2d');
                const w = c.width = window.innerWidth;
                const h = c.height = c.nextElementSibling.offsetHeight || window.innerHeight;
                const intLines = 10;
                const draw = function (t:any) {
                    $.clearRect(0, 0, c.width, c.height);
                    $.lineWidth = 1;
                    $.globalAlpha = .5;
                    $.fillStyle = 'transparent';
                    $.fillRect(0, 0, w, h);
                    for (let i = 0; i < intLines; i++) {
                        $.strokeStyle = colour;
                        $.beginPath();
                        $.moveTo(-0, h / 2 + i);
                        for (let j = 0; j < w; j += 2) {
                            $.lineTo(
                                Math.cos(1 / 10) + j + 0.004 * j * j,
                                Math.floor(h / 2 + j / 2 *
                                    Math.sin(j / 50 - t / 50 - 1 / 118) +
                                    (i * 15) * Math.sin(j / 25 - (i + t) / 5))
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
        })
    },[]);

    return (
        <section id={"section-mission"} className={'lg:h-screen relative overflow-hidden w-full'}>
            <canvas className="absolute -z-50 w-full" id="canvas-mission" data-colour="#5a02205e"></canvas>
            <div className={'max-w-[1300px] mx-auto p-4 lg:p-12'}>
                <h2 className={'text-text-primary text-2xl lg:text-6xl text-center 2xl:mb-20 mb-6 lg:mb-10 section-title mt-6 lg:mt-0'}>
                    DIFFERENT <span className={'section-title-empty text-2xl lg:text-6xl'}>FROM THE REST</span>
                </h2>
                <div className={'flex lg:justify-between justify-center flex-wrap'}>
                    <div className={'max-w-[42rem]'}>
                        <h4 className={'text-text-primary mb-4 text-xl lg:text-4xl font-poppins-bold'}>
                            Our mission
                        </h4>
                        <p className={'mb-4 text-[13px] lg:text-base'}>
                            Rock Steady Digital's mission is a journey of digital transformation through a journey of creativity and innovation.
                        </p>
                        <p className={'text-[13px] lg:text-base'}>
                            We create a fun and energetic environment and work with our clients and partner organisations to deliver outstanding results. We are passionate about helping people and companies succeed through continuous improvement.
                        </p>
                    </div>
                    <div className={'transition-all rounded-md shadow-md text-center hover:shadow-xl max-w-[24rem] mt-6 lg:mt-0'}>
                        <Image
                            alt={'Kamlesh LAD - Founder'}
                            src={'/assets/kam-home.png'}
                            width={390}
                            height={300}
                            className={'rounded-md'}
                        />
                        <div className={'2xl:p-10 p-4 bg-[#ffffff9c] rounded-b-md'}>
                            <h5 className={'mb-3 text-lg lg:text-xl font-poppins-bold'}>
                                KAMLESH LAD - FOUNDER
                            </h5>
                            <p className={'mb-3 text-sm lg:text-lg'}>
                                I can help you reach your digital goals so you can focus on your business.
                            </p>
                            <Link href={'/about'} className={'hover:bottom-0 hover:no-underline'}>
                                <button
                                    className={'btn-primary w-full justify-center'}
                                >
                                    Get to know me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Mission;