"use client"
import React, { useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Modal from "./common/Modal";
import Glide from 'react-glidejs';

type Service = {
    title: string,
    description: string,
    bgImage: string,
    modalContent: React.ReactElement
}

const Services = () => {
    const gliderRef = useRef(null);
    const router = useRouter();

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [modalIndex, setModalIndex] = useState<number>(0);

    const handleFindOutMore = (section: string) => {
        window.localStorage.setItem('section', section);
        setOpenModal(false);
        router.push('/#contact');
    }

    const SERVICES: Service[] = [
        {
            title: 'Social Media Marketing & Analytics',
            description: 'We help you to grow your business with our Social Media Marketing & Analytics services.',
            bgImage: '/assets/services/marketing.png',
            modalContent: <div className={'grid grid-cols-12 h-full'}>
                <div className={'col-span-12 md:col-span-4 relative h-[6rem] md:h-auto'}>
                    <Image
                        src={'/assets/services/marketing-modal.png'}
                        fill
                        alt={'Social Media Marketing & Analytics'}
                        className={'object-cover'}
                    />
                </div>
                <div className={'p-4 md:p-20 col-span-12 md:col-span-8 mt-0 md:mt-8 flex flex-col md:justify-center'}>
                    <h2 className={'lg:text-6xl md:text-3xl text-xl text-primary font-archivo-black mb-6'}>
                        Social Media Marketing & Analytics
                    </h2>
                    <h5 className={'font-poppins-bold mb-6 text-2xl'}>
                        Raise Your Profile & Measure Success
                    </h5>
                    <p className={'text-sm mb-3'}>
                    In today's digital marketplace, small companies have the ability to win mindshare and influence their market through their websites and apps.
We provide SEO/SEM and Analytics to attract target markets and segments.
                    </p>
                    <p className={'text-sm'}>
                        We generate valuable content based on a solid market strategy to provide you with the framework and tools that will fuel your growth.
                    </p>
                    <button
                        className={'btn-primary mt-20 ml-auto'}
                        onClick={() => handleFindOutMore('Social Media Marketing & Analytics')}
                    >
                        Find out more
                    </button>
                </div>
            </div>,
        },
        {
            title: 'People, Culture and Change',
            description: 'We help you to grow your business with our Social Media Marketing & Analytics services.',
            bgImage: '/assets/services/people.png',
            modalContent: <div className={'grid grid-cols-12 h-full w-full'}>
                <div className={'col-span-12 md:col-span-4 relative h-[6rem] md:h-auto'}>
                    <Image
                        src={'/assets/services/people-culture-change-modal.png'}
                        fill
                        alt={'People, Culture and Change'}
                        className={'object-cover'}
                    />
                </div>
                <div className={'p-4 md:p-20 col-span-12 md:col-span-8 mt-0 md:mt-8 flex flex-col md:justify-center'}>
                    <h2 className={'lg:text-6xl md:text-3xl text-2xl text-primary font-archivo-black mb-6'}>
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
                    <button
                        className={'btn-primary mt-20 ml-auto'}
                        onClick={() => handleFindOutMore('People, Culture and Change')}
                    >
                        Find out more
                    </button>
                </div>
            </div>,
        },
        {
            title: 'Program Management',
            description: 'We help you to grow your business with our Social Media Marketing & Analytics services.',
            bgImage: '/assets/services/digital-brand.png',
            modalContent:<div className={'grid grid-cols-12 h-full'}>
                <div className={'col-span-12 md:col-span-4 relative h-[6rem] md:h-auto'}>
                    <Image
                        src={'/assets/services/program-managment.avif'}
                        fill
                        alt={'Program Management'}
                        className={'object-cover'}
                    />
                </div>
                <div className={'p-4 md:p-20 col-span-12 md:col-span-8 mt-0 md:mt-8 flex flex-col md:justify-center'}>
                    <h2 className={'lg:text-5xl md:text-3xl text-2xl text-primary font-archivo-black mb-6'}>
                        Program Management
                    </h2>
                    <h5 className={'mb-6 text-xl font-poppins-bold'}>
                        Where vision and strategy materialises into powerful digital assets
                    </h5>
                    <p className={'text-sm mb-3'}>
                        We deliver your digital vision and strategy with dedicated project and program managemt to produce excellent outcomes for your business. Collaborative teams working in a fun environment meeting regularly to track progress and working through realistic plans and budgets.
                    </p>
                    <p className={'text-sm mb-3'}>
                        Effective project and program governance structure provides regular reports on progress and updates to make informative decisions.
                    </p>

                    <button
                        className={'btn-primary mt-20 ml-auto'}
                        onClick={() => handleFindOutMore('Program Management')}
                    >
                        Find out more
                    </button>
                </div>
            </div>,
        },
        {
            title: 'Digital Transformation',
            description: 'We help you to grow your business with our Social Media Marketing & Analytics services.',
            bgImage: '/assets/services/digital-transformation.png',
            modalContent: <div className={'grid grid-cols-12 h-full w-full'}>
                <div className={'col-span-12 md:col-span-4 relative h-[6rem] md:h-auto'}>
                    <Image
                        src={'/assets/services/digital-transformation-modal-comp.png'}
                        fill
                        alt={'Digital Transformation'}
                        className={'object-cover'}
                    />
                </div>
                <div className={'p-4 md:p-20 col-span-12 md:col-span-8 mt-0 md:mt-8 flex flex-col md:justify-center'}>
                    <h2 className={'lg:text-5xl md:text-3xl text-2xl text-primary font-archivo-black mb-6'}>
                        Digital Transformation
                    </h2>
                    <p className={'text-sm mb-3'}>
                        We lead digital projects from strategy to implementation through the transformation of people, processes and technology.
                    </p>
                    <p className={'text-sm'}>
                        We have the ability to adapt and can deal with exponential changes in technology.
                    </p>
                    <button
                        className={'btn-primary mt-20 ml-auto'}
                        onClick={() => handleFindOutMore('Digital Transformation & Program Management')}
                    >
                        Find out more
                    </button>
                </div>
            </div>,
        },
        /*
        {
            title: 'Blockchain',
            description: 'We help you to grow your business with our Social Media Marketing & Analytics services.',
            bgImage: '/assets/services/blockchain.png',
            modalContent: <div className={'grid grid-cols-12 h-full'}>
                <div className={'col-span-12 md:col-span-4 relative h-[6rem] md:h-auto'}>
                    <Image
                        src={'/assets/services/blockchain-modal.png'}
                        fill
                        alt={'Blockchain (Minting, Staking & Mining)'}
                        className={'object-cover'}
                    />
                </div>
                <div className={'p-4 md:p-20 col-span-12 md:col-span-8 mt-0 md:mt-8 flex flex-col justify-center'}>
                    <h2 className={'lg:text-7xl md:text-3xl text-2xl text-primary font-archivo-black mb-6'}>
                        Blockchain
                    </h2>
                    <h5 className={'mb-6 text-xl font-poppins-bold'}>
                        Seize the opportunity with this emerging technology to help grow your business.
                    </h5>
                    <p className={'text-sm mb-3'}>
                        With the Blockchain digital technology becoming more and more evident in today’s society, we can help you understand, learn and grow in this new world by using Blockchain technology.
                    </p>
                    <button
                        className={'btn-primary mt-20 ml-auto'}
                        onClick={() => handleFindOutMore('Blockchain')}
                    >
                        Find out more
                    </button>
                </div>
            </div>,
        },
        */
    ];

    return (
        <section id={"section-services"} className={'h-screen w-full grid grid-cols-1 md:grid-cols-2 py-4 md:py-0 relative'}>
            <Image
                src={'/assets/textura1.png'}
                fill
                alt={'Services'}
                className={'object-cover h-full w-full'}
            />
            <div className={'grid grid-cols-12 m-auto px-4 md:px-20 relative'}>
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
                <div className={'col-span-1 hidden md:block'} />
                <div className={'col-span-12 md:col-span-11'}>
                    <p className={'font-poppins-bold text-xl md:text-2xl mb-6'}>
                        Innovative Digital Solutions to Rock your World!
                    </p>
                    <p className={'mb-6 text-sm md:text-base'}>
                        We help organisations with their digital transformation and implement their requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.
                    </p>
                    <p className={'font-semibold text-sm md:text-base'}>
                        We unite people, process, tools and data in a creative way that will help your business grow.
                    </p>
                </div>
            </div>

            <div className={'flex-col gap-5 hidden md:flex'}>
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
            <div className={'md:hidden my-6'}>
                <Glide
                    ref={gliderRef}
                    throttle={0}
                    type={"carousel"}
                    perView={1}
                >
                    {
                        SERVICES.map((s, index) => {
                            return (
                                <div
                                    key={`${s.title}-${index}`}
                                    className={'group relative rounded-md bg-black cursor-pointer transition-all flex h-[12rem]'}
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
                                    <h3 className={'absolute bottom-3 left-3 flex flex-col'}>
                                        {s.title} <span className={'ml-2 md:hidden text-xs'}>...Tap for more</span>
                                    </h3>
                                </div>
                            )
                        })
                    }
                </Glide>
            </div>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                {SERVICES[modalIndex].modalContent}
            </Modal>
        </section>
    )
};

export default Services;