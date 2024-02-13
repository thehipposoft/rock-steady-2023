import React, { useRef } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import GlideReact from 'react-glidejs';

type ItemsType = {
    title: string,
    text: React.ReactElement,
    image: string,
    order: number,
    icon: React.ReactElement,
}

type CarousePropsTypes = {
    selectedServiceIndex: number,
    setSelectedServiceIndex: (value: number) => void,
    items: ItemsType[],
}

const Carousel = ({
    items,
    selectedServiceIndex,
    setSelectedServiceIndex,
}:CarousePropsTypes) => {
    const gliderRef = useRef<any>(null);
    const router = useRouter();

    return (
        <div className={'md:flex flex-col md:justify-center items-center p-4 md:p-10 h-full md:h-auto mt-4 md:mt-0 bg-white'}>
            <div className={'hidden md:block min-h-[8rem] md:min-h-[13rem]'}>
                {
                    items.map((item, index) => {
                        return (
                            <div key={`${item.title}-${index}`}>
                                <h3 className={`text-primary font-poppins-bold text-3xl text-center mb-4 transition-all duration-200 top-0 ${index === selectedServiceIndex ? 'opacity-100' : 'opacity-0 absolute -z-10'}`}>
                                    {items[selectedServiceIndex].title}
                                </h3>
                                <div className={`text-center mb-10 transition-all duration-200 bottom-0 ${index === selectedServiceIndex ? 'opacity-100' : 'opacity-0 absolute -z-10'}`}>
                                    {items[selectedServiceIndex].text}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <svg className={'max-w-full hidden md:block'} width="426" height="12" viewBox="0 0 426 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.452637H205.545L211.464 8.97567C212.229 10.077 213.84 10.1285 214.674 9.0782L221.52 0.452637H426" stroke="#080D26" strokeWidth="0.5"/>
            </svg>
            <div className={'w-full justify-between mt-10 min-h-[7rem] hidden md:flex'}>
                {
                    items.map((item, index) => {
                        return (
                            <div
                                key={`${item.order}-${index}`}
                                className={`flex flex-col items-center transition-all duration-300 w-full ${index === selectedServiceIndex ? 'selected-icon w-[120%] p-3 border-b-2 border-[#5a0220]' : ''}`}
                                onMouseEnter={() => setSelectedServiceIndex(index)}
                            >
                                <span className={` transition-all duration-300 ${index === selectedServiceIndex ? ' scale-125' : ''}`}>
                                    {item.icon}
                                </span>
                                <h3 className={`text-primary text-center ${index === selectedServiceIndex ? ' text-xl' : ''}`}>
                                    {item.title}
                                </h3>
                            </div>
                        )
                    })
                }
            </div>
            <div className={'md:hidden'}>
                <GlideReact
                    ref={gliderRef}
                    throttle={0}
                    type={"carousel"}
                    perView={1}
                    focusAt={'center'}
                >
                    {
                        items.map((item, index) => {
                            return (
                                <div
                                    key={`${item.order}-${index}`}
                                    className={`glide__slide flex flex-col items-center transition-all duration-300 w-full`}
                                >
                                    <div className={'relative md:hidden h-[10rem] mb-12 w-full'}>
                                        <Image
                                            alt={`How it works - ${item.title}`}
                                            src={item.image}
                                            fill
                                            className={`object-cover w-full transition-all duration-300`}
                                        />
                                    </div>
                                    <div>
                                        <h3 className={`text-primary font-poppins-bold text-3xl text-center mb-4 transition-all duration-200 top-0`}>
                                            {item.title}
                                        </h3>
                                        <div className={`text-center mb-10 transition-all duration-200 bottom-0`}>
                                            {item.text}
                                        </div>
                                    </div>
                                    <svg className={'max-w-full mb-10'} width="426" height="12" viewBox="0 0 426 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.452637H205.545L211.464 8.97567C212.229 10.077 213.84 10.1285 214.674 9.0782L221.52 0.452637H426" stroke="#080D26" strokeWidth="0.5"/>
                                    </svg>
                                    <span className={`transition-all duration-300`}>
                                        {item.icon}
                                    </span>
                                    <h3 className={`text-primary text-center`}>
                                        {item.title}
                                    </h3>
                                </div>
                            )
                        })
                    }
                </GlideReact>
            </div>
            <button
                className={'btn-primary mt-20 mx-auto hidden md:flex'}
                onClick={() => {
                    window.localStorage.setItem('section', 'How it works');
                    router.push('/#contact');
                }}
            >
                Find out more
            </button>
        </div>
    )
};

export default Carousel;