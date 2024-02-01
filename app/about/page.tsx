import React from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import AboutComponent from "@/components/About";

const About: NextPage = () => {
    return(
        <div>
            <Head>
                <meta></meta>
                <title>ROCK STEADY | About me</title>
            </Head>
            <main>
               <AboutComponent />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default About;