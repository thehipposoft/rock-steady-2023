"use client"
import React, { ReactNode, useEffect } from "react";

type Props = {
    children: ReactNode,
    open: boolean,
    onClose: any,
};

const Modal = ({
    children,
    open,
    onClose
}:Props) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    
    return (
        <dialog open={open} className={'w-full h-full overflow-hidden fixed top-0 z-10'}>
            <span onClick={() => onClose()} className={'cursor-pointer'}>
                <svg className={'absolute right-1 md:right-16 top-[8rem] md:top-12 w-[3rem] h-[3rem]'} width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000">
                        </path>
                    </g>
                </svg>
            </span>
            {children}
        </dialog>
    )
};

export default Modal;