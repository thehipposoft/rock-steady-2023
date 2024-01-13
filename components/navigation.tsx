import React from "react";
import Image from "next/image";

const Navigation = () => {
    return (
        <nav className={"flex w-full justify-between items-center gap-20 bg-primary px-10 py-4 absolute z-10"}>
            <Image
                alt={'RockSteady Logo'}
                src={'/assets/logo.png'}
                width={118}
                height={64}
            />
            <ul className={'flex justify-center gap-32'}>
                <li>
                    <a href={'#section-services'}>Services</a>
                </li>
                <li>
                    <a href={'#section-how-works'}>How</a>
                </li>
                <li>
                    <a href={'#section-values'}>Values</a>
                </li>
                <li>
                    <a href={'#section-mission'}>About</a>
                </li>
            </ul>
            <button className={'btn-primary flex'}>
                Contact us
            </button>
        </nav>
    )
};

export default Navigation;