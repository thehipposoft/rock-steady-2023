import React from "react";

const Footer = () => {
    return (
        <div className={'max-w-[1300px] py-10'}>
            <div className={'grid grid-cols-4 gap-5 max-w-[1300px]'}>
                <div>
                    logo
                    <p>
                        Leaders in digital transformation from strategy to implementation through transformation of people, process and technology.
                    </p>
                </div>
                <div>
                    <h4>About</h4>
                    <ul>
                        <li>Social media</li>
                        <li>SEO/SEM</li>
                        <li>UX UI</li>
                        <li>Block Chain Technology</li>
                    </ul>
                </div>
                <div>
                    <h4>How</h4>
                    <ul>
                        <li>Discover</li>
                        <li>Design</li>
                        <li>Develop</li>
                        <li>Deploy</li>
                        <li>Manteinance</li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <a>rocksteadydigital@gmail.com</a>
                    <div>
                        socials
                    </div>
                </div>
            </div>
            <p className={'text-center'}>
                Created by <a>hipposoft</a> | All Rights Reserved
            </p>
        </div>
    )
};

export default Footer;