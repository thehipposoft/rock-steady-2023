import React from "react";
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
    return (
        <section id={"section-mission"} className={'p-4 md:p-12 md:h-screen'}>
            <div className={'max-w-[1300px] mx-auto'}>
                <h2 className={'text-text-primary text-2xl md:text-6xl text-center 2xl:mb-28 mb-6 md:mb-10 section-title mt-6 md:mt-0'}>
                    DIFFERENT <span className={'section-title-empty text-2xl md:text-6xl'}>FROM THE REST</span>
                </h2>
                <div className={'flex md:justify-between justify-center flex-wrap'}>
                    <div className={'max-w-[42rem]'}>
                        <h4 className={'text-text-primary mb-4 text-xl md:text-4xl font-poppins-bold'}>
                            Our mission
                        </h4>
                        <p className={'mb-4 text-[13px] md:text-base'}>
                            Rock Steady Digital's mission is a journey of digital transformation through a journey of creativity and innovation.
                        </p>
                        <p className={'text-[13px] md:text-base'}>
                            We create a fun and energetic environment and work with our clients and partner organisations to deliver outstanding results. We are passionate about helping people and companies succeed through continuous improvement.
                        </p>
                    </div>
                    <div className={'transition-all rounded-md shadow-md text-center hover:shadow-xl max-w-[24rem] mt-6 md:mt-0'}>
                        <Image
                            alt={'Kamlesh LAD - Founder'}
                            src={'/assets/kam-home.png'}
                            width={390}
                            height={300}
                            className={'rounded-md'}
                        />
                        <div className={'2xl:p-10 p-4'}>
                            <h5 className={'mb-3 text-lg md:text-xl font-poppins-bold'}>
                                KAMLESH LAD - FOUNDER
                            </h5>
                            <p className={'mb-3 text-sm md:text-lg'}>
                                I can help you reach your digital goals so you can focus on the more important things in life.
                            </p>
                            <Link href={'/about'}>
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