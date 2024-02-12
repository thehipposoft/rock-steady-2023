import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <section id={"section-footer"} className={'relative w-full overflow-hidden'}>
            <Image
                fill
                alt={'Footer pattern'}
                src={'/assets/footer-background.png'}
                className={'!h-[130%] md:!h-[120%] absolute'}
            />
            <div className={'max-w-[1300px] px-4 md:px-0 py-6 md:py-10 mx-auto relative'}>
                <div className={'grid md:grid-cols-12 gap-10 max-w-[1300px]'}>
                    <div className={'col-span-4'}>
                        <Image
                            alt={'RockSteady Logo'}
                            src={'/assets/logo.png'}
                            width={118}
                            height={64}
                            className={'mb-3'}
                        />
                        <p className={'text-sm'}>
                            Leaders in digital transformation from strategy to implementation through transformation of people, process and technology.
                        </p>
                    </div>
                    <ul className={'flex justify-evenly col-span-5'}>
                        <li className={'text-text-primary mb-3'}>
                            <a href={'#section-services'}>
                                Services
                            </a>
                        </li>
                        <li className={'text-text-primary mb-3'}>
                            <a href={'#section-how-works'}>
                                How
                            </a>
                        </li>
                        <li className={'text-text-primary mb-3'}>
                            <a href={'#section-values'}>
                                Values
                            </a>
                        </li>
                        <li className={'text-text-primary mb-3'}>
                            <a href={'#section-mission'}>
                                About
                            </a>
                        </li>
                    </ul>

                    <div className={'col-span-2'}>
                        <h4 className={'text-text-primary mb-4 font-poppins-bold'}>
                            Contact
                        </h4>
                        <div className={'flex items-center gap-10 mt-5'}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1601_453)">
                                    <path d="M18.3174 14.0627L19.0119 9.53848H14.6705V6.60254C14.6705 5.36504 15.2768 4.15801 17.2213 4.15801H19.1947V0.306445C19.1947 0.306445 17.4041 0.000976562 15.6916 0.000976562C12.1166 0.000976562 9.77988 2.16816 9.77988 6.09082V9.53926H5.80566V14.0635H9.77988V25.001H14.6705V14.0635L18.3174 14.0627Z" fill="#001847"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1601_453">
                                <rect width="25" height="25" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8569 2.77427C23.5842 1.7478 22.781 0.939377 21.7612 0.665028C19.9127 0.166504 12.5003 0.166504 12.5003 0.166504C12.5003 0.166504 5.08798 0.166504 3.23941 0.665028C2.21957 0.939421 1.41636 1.7478 1.14375 2.77427C0.648438 4.63482 0.648438 8.51668 0.648438 8.51668C0.648438 8.51668 0.648438 12.3985 1.14375 14.2591C1.41636 15.2856 2.21957 16.0603 3.23941 16.3346C5.08798 16.8332 12.5003 16.8332 12.5003 16.8332C12.5003 16.8332 19.9126 16.8332 21.7612 16.3346C22.781 16.0603 23.5842 15.2856 23.8569 14.2591C24.3522 12.3985 24.3522 8.51668 24.3522 8.51668C24.3522 8.51668 24.3522 4.63482 23.8569 2.77427ZM10.076 12.0411V4.99224L16.2713 8.51676L10.076 12.0411Z" fill="#001847"/>
                            </svg>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5046 5.88452C8.39917 5.88452 5.89429 8.3894 5.89429 11.4949C5.89429 14.6003 8.39917 17.1052 11.5046 17.1052C14.6101 17.1052 17.115 14.6003 17.115 11.4949C17.115 8.3894 14.6101 5.88452 11.5046 5.88452ZM11.5046 15.1423C9.4978 15.1423 7.85718 13.5066 7.85718 11.4949C7.85718 9.48315 9.49292 7.84741 11.5046 7.84741C13.5164 7.84741 15.1521 9.48315 15.1521 11.4949C15.1521 13.5066 13.5115 15.1423 11.5046 15.1423ZM18.6531 5.65503C18.6531 6.38257 18.0671 6.96362 17.3445 6.96362C16.6169 6.96362 16.0359 6.37769 16.0359 5.65503C16.0359 4.93237 16.6218 4.34644 17.3445 4.34644C18.0671 4.34644 18.6531 4.93237 18.6531 5.65503ZM22.3689 6.98315C22.2859 5.23022 21.8855 3.67749 20.6013 2.39819C19.322 1.1189 17.7693 0.718506 16.0164 0.630615C14.2097 0.528076 8.79468 0.528076 6.98804 0.630615C5.23999 0.713623 3.68726 1.11401 2.40308 2.39331C1.1189 3.67261 0.723389 5.22534 0.635498 6.97827C0.532959 8.78491 0.532959 14.2 0.635498 16.0066C0.718506 17.7595 1.1189 19.3123 2.40308 20.5916C3.68726 21.8708 5.23511 22.2712 6.98804 22.3591C8.79468 22.4617 14.2097 22.4617 16.0164 22.3591C17.7693 22.2761 19.322 21.8757 20.6013 20.5916C21.8806 19.3123 22.281 17.7595 22.3689 16.0066C22.4714 14.2 22.4714 8.78979 22.3689 6.98315ZM20.0349 17.9451C19.6541 18.9021 18.9167 19.6394 17.9548 20.0251C16.5144 20.5964 13.0964 20.4646 11.5046 20.4646C9.91284 20.4646 6.48999 20.5916 5.05444 20.0251C4.09741 19.6443 3.36011 18.907 2.97437 17.9451C2.40308 16.5046 2.53491 13.0867 2.53491 11.4949C2.53491 9.90308 2.40796 6.48022 2.97437 5.04468C3.35522 4.08765 4.09253 3.35034 5.05444 2.9646C6.49487 2.39331 9.91284 2.52515 11.5046 2.52515C13.0964 2.52515 16.5193 2.39819 17.9548 2.9646C18.9119 3.34546 19.6492 4.08276 20.0349 5.04468C20.6062 6.48511 20.4744 9.90308 20.4744 11.4949C20.4744 13.0867 20.6062 16.5095 20.0349 17.9451Z" fill="#001847"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <p className={'text-center mt-10 mb-5'}>
                    Created by Rock Steady Digital & <a href={'https://www.thehipposoft.com/'} target={'_blank'}>hipposoft</a> | All Rights Reserved
                </p>
            </div>

        </section>
    )
};

export default Footer;