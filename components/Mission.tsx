import React from "react";
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
    return (
        <section id={"section-mission"} className={'p-12 h-screen'}>
            <div className={'max-w-[1300px] mx-auto'}>
                <h2 className={'text-text-primary text-center 2xl:mb-28 mb-10 section-title'}>
                    DIFFERENT <span className={'section-title-empty'}>FROM THE REST</span>
                </h2>
                <div className={'flex justify-between'}>
                    <div className={'max-w-[42rem]'}>
                        <h4 className={'text-text-primary mb-4 text-4xl font-poppins-bold'}>
                            Our mission
                        </h4>
                        <p className={'mb-4'}>
                            Rock Steady Digital's mission is a journey of digital transformation through a journey of creativity and innovation.
                        </p>
                        <p>
                            We create a fun and energetic environment and work with our clients and partner organisations to deliver outstanding results. We are passionate about helping people and companies succeed through continuous improvement.
                        </p>
                    </div>
                    <div className={'transition-all rounded-md shadow-md text-center hover:shadow-xl max-w-[24rem]'}>
                        <Image
                            alt={'Kamlesh LAD - Founder'}
                            src={'/assets/kam-home.png'}
                            width={390}
                            height={300}
                            className={'rounded-md'}
                        />
                        <div className={'2xl:p-10 p-4'}>
                            <h5 className={'mb-3 text-xl font-poppins-bold'}>
                                KAMLESH LAD - FOUNDER
                            </h5>
                            <p className={'mb-3'}>
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