'use client'
import React from "react";
import Script from "next/script"

const SchemaOrg = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-org"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Rock Steady Digital",
                        "url": "https://www.rocksteadydigital.com.au/",
                        "logo": "https://www.rocksteadydigital.com.au/assets/logo.png",
                        "sameAs": [
                            "https://www.facebook.com/profile.php?id=61551540136730",
                            "https://www.instagram.com/rocksteadydigital/",
                            "https://www.youtube.com/@rocksteadydigital",
                            "https://www.linkedin.com/company/rocksteadydigital/",
                            "https://x.com/RockSteadyDigi",
                            "https://www.tiktok.com/@rocksteadydigital",
                            "https://ar.pinterest.com/rocksteadydigital/",
                        ],
                        "description": "We help organisations with their digital transformation and implement their requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations."
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg