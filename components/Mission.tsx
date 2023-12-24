import React from "react";
import Image from "next/image";

const Mission = () => {
    return (
        <div className={'p-12'}>
            <div className={'max-w-[1300px] mx-auto'}>
                <h2 className={'text-text-primary text-center mb-20 section-title'}>
                    DIFFERENT <span className={'section-title-empty'}>FROM THE REST</span>
                </h2>
                <div className={'flex gap-10'}>
                    <div className={'px-10'}>
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
                    <div className={'transition-all rounded-md shadow-md text-center hover:shadow-xl'}>
                        <Image
                            alt={'Kamlesh LAD - Founder'}
                            src={'/assets/kam-home.png'}
                            width={400}
                            height={400}
                            className={'rounded-md'}
                        />
                        <div className={'p-10'}>
                            <h5 className={'mb-3 text-xl font-poppins-bold'}>
                                KAMLESH LAD - FOUNDER
                            </h5>
                            <p className={'mb-3'}>
                                I can help you reach your financial goals so you can focus on the more important things in life.
                            </p>
                            <button className={'btn-primary w-full justify-center'}>
                                Get to know me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Mission;