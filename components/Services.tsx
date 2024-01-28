"use client"
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./common/Modal";

type Service = {
    title: string,
    description: string,
    bgImage: string,
    modalContent: React.ReactElement
}

const Services = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [modalIndex, setModalIndex] = useState<number>(0);

    const SERVICES: Service[] = [
        {
            title: 'SM Marketing & Analytics',
            description: 'We help you to grow your business with our SM Marketing & Analytics services.',
            bgImage: '/assets/services/marketing.png',
            modalContent: <div className={'grid grid-cols-12 h-full'}>
                <div className={'col-span-4 relative'}>
                    <Image
                        src={'/assets/services/marketing-modal.png'}
                        fill
                        alt={'SM Marketing & Analytics'}
                    />
                </div>
                <div className={'p-20 col-span-8 mt-8 flex flex-col justify-center'}>
                    <h2 className={'lg:text-6xl md:text-3xl text-xl text-primary font-archivo-black mb-6'}>
                        SM Marketing & Analytics
                    </h2>
                    <h5 className={'font-poppins-bold mb-6 text-xl'}>
                        Raise Your Profile & Measure Success
                    </h5>
                    <p className={'text-sm mb-3'}>
                    In today's digital marketplace, small companies have the ability to win mindshare and influence their market through their websites and apps.
We provide SEO/SEM and Analytics to attract target markets and segments.
                    </p>
                    <p className={'text-sm'}>
                        We generate valueable content based on a solid market strategy to provide you with the framework and tools that will fuel your growth for 5 yo 10 years.
                    </p>
                    <button className={'btn-primary mt-20 ml-auto'}>
                        Find out more
                    </button>
                </div>
            </div>,
        },
        {
            title: 'People, Culture and Change',
            description: 'We help you to grow your business with our SM Marketing & Analytics services.',
            bgImage: '/assets/services/people.png',
            modalContent: <div className={'grid grid-cols-12 h-full'}>
                <div className={'col-span-4 relative'}>
                    <Image
                        src={'/assets/services/people-culture-change-modal.png'}
                        fill
                        alt={'People, Culture and Change'}
                    />
                </div>
                <div className={'p-20 col-span-8 mt-8 flex flex-col justify-center'}>
                    <h2 className={'lg:text-6xl md:text-3xl text-xl text-primary font-archivo-black mb-6'}>
                        People, Culture and Change
                    </h2>
                    <h5 className={'mb-6 text-xl font-poppins-bold'}>
                        Empower People through Growth
                    </h5>
                    <p className={'text-sm mb-3'}>
                        With any Digital Transformation, there is a huge impact to the organization on People and Culture.
                    </p>
                    <p className={'text-sm'}>
                        Rock Steady Digital can help you through this process and build strategies and action plans to deliver change more smoothly.
                    </p>
                    <button className={'btn-primary mt-20 ml-auto'}>
                        Find out more
                    </button>
                </div>
            </div>,
        },
        {
            title: 'Digital Brand Competitor Analysis',
            description: 'We help you to grow your business with our SM Marketing & Analytics services.',
            bgImage: '/assets/services/digital-brand.png',
            modalContent:<div className={'grid grid-cols-12 h-full'}>
                <div className={'col-span-4 relative'}>
                    <Image
                        src={'/assets/services/competitor-modal.png'}
                        fill
                        alt={'Digital Brand Competitor Analysis'}
                    />
                </div>
                <div className={'p-20 col-span-8 mt-8 flex flex-col justify-center'}>
                    <h2 className={'lg:text-5xl md:text-3xl text-xl text-primary font-archivo-black mb-6'}>
                        Digital Brand Competitor Analysis
                    </h2>
                    <h5 className={'mb-6 text-xl font-poppins-bold'}>
                        Manifest your digital strategy to realise benefits
                    </h5>
                    <p className={'text-sm mb-3'}>
                        We lead digital projects from strategy to implementation through the transformation of people, processes and technology
    We have the ability to adapt and flexibility to deal with exponential changes in technology.
                    </p>
                    <p className={'text-sm'}>
                        We have the ability to adapt and flexibility to deal with exponential changes in technology.
                    </p>
                    <button className={'btn-primary mt-20 ml-auto'}>
                        Find out more
                    </button>
                </div>
            </div>,
        },
        {
            title: 'Digital Transformation & Program Management',
            description: 'We help you to grow your business with our SM Marketing & Analytics services.',
            bgImage: '/assets/services/digital-transformation.png',
            modalContent: <div className={'grid grid-cols-12 h-full'}>
                <div className={'col-span-4 relative'}>
                    <Image
                        src={'/assets/services/digital-transformation-modal-comp.png'}
                        fill
                        alt={'Digital Transformation & Program Management'}
                    />
                </div>
                <div className={'p-20 col-span-8 mt-8 flex flex-col justify-center'}>
                    <h2 className={'lg:text-5xl md:text-3xl text-xl text-primary font-archivo-black mb-6'}>
                        Digital Transformation & Program Management
                    </h2>
                    <h5 className={'mb-6 text-xl font-poppins-bold'}>
                        Manifest your digital strategy to realise benefits
                    </h5>
                    <p className={'text-sm mb-3'}>
                        We lead digital projects from strategy to implementation through the transformation of people, processes and technology
    We have the ability to adapt and flexibility to deal with exponential changes in technology.
                    </p>
                    <p className={'text-sm'}>
                        We have the ability to adapt and flexibility to deal with exponential changes in technology.
                    </p>
                    <button className={'btn-primary mt-20 ml-auto'}>
                        Find out more
                    </button>
                </div>
            </div>,
        },
        {
            title: 'Blockchain (Minting, Staking & Mining)',
            description: 'We help you to grow your business with our SM Marketing & Analytics services.',
            bgImage: '/assets/services/blockchain.png',
            modalContent: <div className={'grid grid-cols-12 h-full'}>
                <div className={'col-span-4 relative'}>
                    <Image
                        src={'/assets/services/blockchain-modal.png'}
                        fill
                        alt={'Blockchain (Minting, Staking & Mining)'}
                    />
                </div>
                <div className={'p-20 col-span-8 mt-8 flex flex-col justify-center'}>
                    <h2 className={'lg:text-7xl md:text-3xl text-xl text-primary font-archivo-black mb-6'}>
                        Blockchain
                    </h2>
                    <h5 className={'mb-6 text-xl font-poppins-bold'}>
                        Seize the opportunity with this emerging technology to help grow your business.
                    </h5>
                    <p className={'text-sm mb-3'}>
                        With the Blockchain digital technology becoming more and more evident in today’s society, we can help you understand, learn and grow in this new world by using Blockchain Minting, Staking and Mining solutions.
                    </p>
                    <button className={'btn-primary mt-20 ml-auto'}>
                        Find out more
                    </button>
                </div>
            </div>,
        },
    ];

    return (
        <section id={"section-services"} className={'h-screen w-full bg-texture bg-cover bg-no-repeat grid md:grid-cols-2'}>
            <div className={'grid grid-cols-12 m-auto px-20'}>
                <div className={'col-span-12'}>
                    <div className={'flex justify-between items-center mb-6'}>
                        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                        </svg>
                        <span>
                            <h3 className={'subsection-title text-center'}>
                                CREATIVE SOLUTIONS
                            </h3>
                            <h3 className={'subsection-title-empty text-center'}>
                                THAT ROCKS
                            </h3>
                        </span>
                        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                        </svg>
                    </div>
                </div>
                <div className={'col-span-1'} />
                <div className={'col-span-11'}>
                    <p className={'font-poppins-bold text-2xl mb-6'}>
                        Innovative Digital Solutions to Rock your World!
                    </p>
                    <p className={'mb-6'}>
                        We help organisations with their digital transformation and implement their requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.
                    </p>
                    <p className={'font-semibold'}>
                        We unite people, processes, tools and data in a creative way that will help your business grow.
                    </p>
                </div>
            </div>

            <div className={'flex flex-col gap-5'}>
                {
                    SERVICES.map((s, index) => {
                        return (
                            <div
                                key={`${s.title}-${index}`}
                                className={'group relative rounded-md bg-black h-full cursor-pointer transition-all'}
                                onClick={() => {
                                    setModalIndex(index);
                                    setOpenModal(true);
                                }}
                            >
                                <Image
                                    alt={s.title}
                                    src={s.bgImage}
                                    fill
                                    className={'rounded-md object-cover transition-all group-hover:brightness-50'}
                                />
                                <h3 className={'absolute bottom-3 left-3 flex'}>
                                    {s.title} <span className={'group-hover:opacity-100 ml-2 opacity-0 transition-all'}>... Read more</span>
                                </h3>
                            </div>
                        )
                    })
                }
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                {SERVICES[modalIndex].modalContent}
            </Modal>
        </section>
    )
};

export default Services;