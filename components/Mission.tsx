import React from "react";
import Image from "next/image";

const Mission = () => {
    return (
        <div className={'p-10'}>
            <div className={'max-w-[1300px] mx-auto'}>
                <h2 className={'text-text-primary text-center mb-6'}>
                    DIFFERENT <span>FROM THE REST</span>
                </h2>
                <div className={'flex gap-10'}>
                    <div>
                        <h4 className={'text-text-primary mb-4'}>
                            Our mission
                        </h4>
                        <p className={'mb-4'}>
                            Rock Steady Digital's mission is a journey of digital transformation through a journey of creativity and innovation.
                        </p>
                        <p>
                            We create a fun and energetic environment and work with our clients and partner organisations to deliver outstanding results. We are passionate about helping people and companies succeed through continuous improvement.
                        </p>
                    </div>
                    <div className={'rounded-md shadow-md text-center'}>
                        <Image
                            alt={'Kamlesh LAD - Founder'}
                            src={'/assets/kam-home.png'}
                            width={400}
                            height={400}
                            className={'rounded-md'}
                        />
                        <div className={'p-10'}>
                            <h5 className={'mb-3'}>
                                KAMLESH LAD - FOUNDER
                            </h5>
                            <p>
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