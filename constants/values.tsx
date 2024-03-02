import React from "react";
import Image from "next/image";

const VALUES = [
    {
        title: 'Collaboration',
        description: 'Create a collaborative environment between people and organisations. Promote people interactions through to gain effectiveness in our communications.',
        icon: <Image
            width={39}
            height={39}
            alt={'Collaboration Icon'}
            src={'/assets/icons/collaboration.svg'}
        />,
    },
    {
        title: 'Growth',
        description: 'Determined to create a better outcome for all through learning new ways of working using technology and non-technology approaches.',
        icon: <Image
            width={50}
            height={50}
            alt={'Growth Icon'}
            src={'/assets/icons/growth.svg'}
        />,
    },
    {
        title: 'Continuous Improvement',
        description: 'Drive towards an improved working environment – culturally, economically, and socially.',
        icon: <Image
            width={60}
            height={50}
            alt={'Improvement Icon'}
            src={'/assets/icons/improvement.svg'}
        />,
    },
    {
        title: 'Innovation',
        description: 'Adaptable in using emerging technology to enhance processes, tools and culture.',
        icon:<Image
            width={80}
            height={80}
            alt={'Innovation Icon'}
            src={'/assets/icons/innovation.svg'}
        />,
    },
    /*
    {
        title: 'Diversity',
        description: 'Equality for all and live in a world that is fair and just.',
        icon: <svg width="50" height="50" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.4301 13.1973C34.2403 13.1973 36.5184 10.9192 36.5184 8.10904C36.5184 5.29886 34.2403 3.02075 31.4301 3.02075C28.6199 3.02075 26.3418 5.29886 26.3418 8.10904C26.3418 10.9192 28.6199 13.1973 31.4301 13.1973Z" stroke="#080D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M49.8852 31.7115C52.6954 31.7115 54.9735 29.4334 54.9735 26.6232C54.9735 23.813 52.6954 21.5349 49.8852 21.5349C47.075 21.5349 44.7969 23.813 44.7969 26.6232C44.7969 29.4334 47.075 31.7115 49.8852 31.7115Z" stroke="#080D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M37.975 54.9791C40.7852 54.9791 43.0633 52.701 43.0633 49.8908C43.0633 47.0806 40.7852 44.8025 37.975 44.8025C35.1648 44.8025 32.8867 47.0806 32.8867 49.8908C32.8867 52.701 35.1648 54.9791 37.975 54.9791Z" stroke="#080D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.1606 50.8443C14.9707 50.8443 17.2488 48.5662 17.2488 45.756C17.2488 42.9458 14.9707 40.6677 12.1606 40.6677C9.35037 40.6677 7.07227 42.9458 7.07227 45.756C7.07227 48.5662 9.35037 50.8443 12.1606 50.8443Z" stroke="#080D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.11564 25.0223C10.9258 25.0223 13.2039 22.7442 13.2039 19.934C13.2039 17.1238 10.9258 14.8457 8.11564 14.8457C5.30545 14.8457 3.02734 17.1238 3.02734 19.934C3.02734 22.7442 5.30545 25.0223 8.11564 25.0223Z" stroke="#080D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.1297 12.6489L14.6056 41.2936M45.3637 28.959L16.8192 43.7079M37.1881 44.8655L32.2182 13.1371M11.708 23.5384L34.3836 46.2865M44.8598 25.8185L13.1024 20.9513M26.8134 10.4509L12.6529 17.6333M11.3298 40.7366L8.89258 24.9642M32.8864 49.1466L17.1334 46.8423M47.5665 31.1533L40.2935 45.3609M35.0228 11.7136L46.2929 23.02" stroke="#080D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
    },*/
];

export {
    VALUES
};