"use client"
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "./common/Carousel";

type constantsType = {
    key: string,
    title: string,
    text: string,
    image: string,
}

const HOW_WORKS: constantsType[] = [
    {
        key: 'discovery',
        title: 'This is how it works',
        text: 'A discovery is a preliminary phase that involves researching the problem space, framing the problem to be solved, and gathering enough evidence and initial direction on what to do next.',
        image: '/assets/services/digital-brand.png',
    },
    {
        key: 'grow',
        title: 'This is how it works',
        text: 'A discovery is a preliminary phase that involves researching the problem space, framing the problem to be solved, and gathering enough evidence and initial direction on what to do next.',
        image: '/assets/services/marketing-modal.png',
    },
    {
        key: 'grow',
        title: 'This is how it works',
        text: 'A discovery is a preliminary phase that involves researching the problem space, framing the problem to be solved, and gathering enough evidence and initial direction on what to do next.',
        image: '/assets/services/marketing-modal.png',
    },
    {
        key: 'grow',
        title: 'This is how it works',
        text: 'A discovery is a preliminary phase that involves researching the problem space, framing the problem to be solved, and gathering enough evidence and initial direction on what to do next.',
        image: '/assets/services/marketing-modal.png',
    },
    {
        key: 'grow',
        title: 'This is how it works',
        text: 'A discovery is a preliminary phase that involves researching the problem space, framing the problem to be solved, and gathering enough evidence and initial direction on what to do next.',
        image: '/assets/services/marketing-modal.png',
    },

]

const HowWorks = () => {
    const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

    return (
        <section id={"section-how-works"} className={'h-screen grid grid-cols-2 w-full'}>
            <div className={'relative'}>
                <Image
                    alt={'How it works'}
                    src={HOW_WORKS[selectedServiceIndex].image}
                    fill
                    className={'object-cover w-full'}
                />
            </div>
            <Carousel

            />
        </section>
    )
};

export default HowWorks;