import React, { useEffect } from "react";
import Glide from '@glidejs/glide';

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
    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            perView: 3,
            gap: 10,
        }).mount();
    },[]);

    return (
        <div className={'flex flex-col md:justify-center items-center p-4 md:p-10 h-full md:h-auto mt-4 md:mt-0'}>
            <div className={'min-h-[8rem] md:min-h-[13rem]'}>
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
            <svg className={'max-w-full'} width="426" height="12" viewBox="0 0 426 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div className={"glide mt-10 md:hidden how-work"}>
                <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides">
                        {
                            items.map((item, index) => {
                                return (
                                    <li
                                        key={`${item.order}-${index}`}
                                        className={`glide__slide flex flex-col items-center transition-all duration-300 w-full ${index === selectedServiceIndex ? 'selected-icon p-3 border-b-2 border-[#5a0220]' : ''}`}
                                        onClick={() => {
                                            console.log(">>click")
                                            setSelectedServiceIndex(index)
                                        }}
                                    >
                                        <span className={`transition-all duration-300 ${index === selectedServiceIndex ? '' : ''}`}>
                                            {item.icon}
                                        </span>
                                        <h3 className={`text-primary text-center ${index === selectedServiceIndex ? '' : ''}`}>
                                            {item.title}
                                        </h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Carousel;