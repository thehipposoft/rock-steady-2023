import type { Metadata } from 'next';
import AboutComponent from "@/components/About";

export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn more about Rock Steady Digital and our mission to help organisations deliver practical digital transformation outcomes.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Rock Steady Digital',
        description:
            'Learn more about Rock Steady Digital and our mission to help organisations deliver practical digital transformation outcomes.',
        url: '/about',
        type: 'website',
    },
    twitter: {
        title: 'About Rock Steady Digital',
        description:
            'Learn more about Rock Steady Digital and our mission to help organisations deliver practical digital transformation outcomes.',
    },
}

const About = () => {
    return (
        <main>
            <AboutComponent />
        </main>
    )
}

export default About;