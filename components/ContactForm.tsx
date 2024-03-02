"use client"
import React from "react";
import { Form } from "./Form";
import { required, email } from '@/utils/fieldValidations';

const ContactForm = () => {
    return (
        <section id={'contact'} className={'md:w-[700px] px-6 md:px-0 md:min-h-screen flex flex-col justify-center my-16 md:my-0'}>
            <div className={'col-span-12'}>
                <div className={'flex justify-between items-center mb-6'}>
                    <svg width="40" height="20" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                    </svg>
                    <span className={'mx-10'}>
                        <h3 className={'subsection-title-empty text-center md:text-6xl text-3xl'}>
                            READY TO
                        </h3>
                        <h3 className={'subsection-title text-center md:text-8xl text-4xl'}>
                            ROCK?
                        </h3>
                    </span>
                    <svg width="40" height="20" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3714 1L13.1333 9.16129L1 11.8817V13.3656L13.1333 16.3333L14.3714 24L16.1048 16.3333L27 13.3656V11.8817L16.1048 9.16129L14.3714 1Z" fill="#080D26" stroke="black"/>
                    </svg>
                </div>
            </div>
            <Form
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: '',
                        placeholder: 'Name',
                        size: 'half',
                        validations: [required]
                    },
                    {
                        name: 'customerEmail',
                        type: 'text',
                        label: '',
                        size: 'half',
                        placeholder: 'Email',
                        validations: [required, email]
                    },
                    {
                        name: 'subject',
                        type: 'text',
                        label: '',
                        placeholder: 'Subject',
                        validations: [required]
                    },
                    {
                        name: 'message',
                        type: 'textArea',
                        label: '',
                        placeholder: 'Message',
                    },
                ]}
                onSuccessMessage={'Your message has been successfully sent! We will contact you very soon'}
                onErrorMessage={'Please try again in some minutes'}
                submitButtonLabel={'Send'}
                emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/rock-steady-mail'}
            />
        </section>
    )
};

export default ContactForm;