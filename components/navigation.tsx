import React from "react";
import Image from "next/image";

const Navigation = () => {
    return (
        <nav className={"flex w-full justify-between items-center gap-20 bg-primary px-10 py-6"}>
            <Image
                alt={'RockSteady Logo'}
                src={'/assets/logo.png'}
                width={200}
                height={200}
            />
            <ul className={'flex w-full justify-between'}>
                <li>Services</li>
                <li>About</li>
                <li>How</li>
                <li>Values</li>
            </ul>
            <button className={'btn-primary'}>
                Contact us
            </button>
        </nav>
    )
};

export default Navigation;