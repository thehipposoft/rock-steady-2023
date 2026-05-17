//'use client'
import React from "react";

const SchemaOrg = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.rocksteadydigital.com.au/#organization",
                name: "Rock Steady Digital",
                url: "https://www.rocksteadydigital.com.au/",
                logo: "https://www.rocksteadydigital.com.au/assets/logo.png",
                sameAs: [
                    "https://www.facebook.com/profile.php?id=61551540136730",
                    "https://www.instagram.com/rocksteadydigital/",
                    "https://www.youtube.com/@rocksteadydigital",
                    "https://www.linkedin.com/company/rocksteadydigital/",
                    "https://x.com/RockSteadyDigi",
                    "https://www.tiktok.com/@rocksteadydigital",
                    "https://ar.pinterest.com/rocksteadydigital/"
                ],
                description: "We help organisations with their digital transformation and implement their requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations."
            },
            {
                "@type": "WebSite",
                "@id": "https://www.rocksteadydigital.com.au/#website",
                name: "Rock Steady Digital",
                url: "https://www.rocksteadydigital.com.au/",
                inLanguage: "en-AU",
                publisher: {
                    "@id": "https://www.rocksteadydigital.com.au/#organization"
                }
            }
        ]
    };

    return (
        <script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export default SchemaOrg