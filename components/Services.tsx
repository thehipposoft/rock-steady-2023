import React from "react";
import Image from "next/image";
import { SERVICES } from "@/constants/services";

const Services = () => {
    return (
        <section className={'h-screen w-full bg-texture bg-cover bg-no-repeat grid md:grid-cols-2'}>
            <div className={'grid grid-cols-12 m-auto px-20'}>
                <div className={'col-span-12'}>
                    <div className={'flex justify-between items-center'}>
                        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                        </svg>
                        <span>
                            <h3>CREATIVE SOLUTIONS</h3>
                            <h3>THAT ROCKS</h3>
                        </span>
                        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                        </svg>
                    </div>
                </div>
                <div className={'col-span-1'} />
                <div className={'col-span-11'}>
                    <p>Innovative Digital Solutions to Rock your World!</p>
                    <p>
                        We help organisations with their digital transformation and implement their requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.
                    </p>
                    <p>
                        We unite people, processes, tools and data in a creative way that will help your business grow.
                    </p>
                </div>
            </div>

            <div className={'flex flex-col gap-5'}>
                {
                    SERVICES.map((s, index) => {
                        return (
                            <div key={`${s.title}-${index}`} className={'relative rounded-md bg-black h-full'}>
                                <Image
                                    alt={s.title}
                                    src={s.bgImage}
                                    fill
                                    className={'rounded-md object-cover'}
                                />

                                <h3 className={'absolute bottom-3 left-3'}>
                                    {s.title}
                                </h3>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
};

export default Services;