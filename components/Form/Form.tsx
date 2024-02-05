"use client"
import React, { useState } from 'react';
import axios from 'axios';
//Hook
import useContactForm from './useContactForm';
//Component
import MyInput from './CustomInput';

type SelectOptions = {
    value: any,
    label: string,
}

type FieldType = {
    name: string,
    type: string,
    label: string,
    placeholder: string,
    validations?: any[],
    selectOptions?: SelectOptions[],
    size?: string
}

type MyCustomFormPropsType = {
    fields: FieldType[],
    onSuccessMessage: string,
    onErrorMessage: string,
    emailServiceURL: string,
    submitButtonLabel: string,
    afterSubmitAction?: any,
};

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    emailServiceURL,
    submitButtonLabel,
    afterSubmitAction
}:MyCustomFormPropsType) => {
    const [messageSent, setMessageSent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [messageDescription, setMessageDescription] = useState<string>('');
    const initialValues = {
        name: '',
        customerEmail: '',
        subject: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        handleSubmit,
        setValues,
    } = useContactForm({
        initialValues,
        fields,
        onSubmit: () => {
            setIsLoading(true);
            const section = window.localStorage.getItem('section') || 'Contact form'

            axios.post(
                emailServiceURL,
                {
                    subject: values.subject,
                    message: values.message,
                    name: values.name,
                    customerEmail: values.customerEmail,
                    section: section,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json, text/plain, */*',
                    },
                }
            )
                .then(function (response) {
                    setIsLoading(false);
                    setValues(initialValues);
                    setMessageSent('succeed');
                    if(afterSubmitAction) {
                        afterSubmitAction();
                    }
                })
                .catch(function (error) {
                    setIsLoading(false);
                    setMessageDescription(error.toString());
                    setMessageSent('error');
                });
        }
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'mb-4'}>Thank you!</h2>
                <p>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Something went wrong</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    return (
        <form
            className={'mx-auto grid grid-cols-2 gap-5 w-full'}
            onSubmit={(event) => handleSubmit(event)}
        >
            {
                fields.map((field) => {
                    const {
                        name,
                        type,
                        label,
                        validations,
                        selectOptions,
                        size,
                        placeholder
                    } = field;

                    switch (type) {
                        case 'text':
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    size={size}
                                    placeholder={placeholder}
                                />
                            );
                        case 'textArea':
                            return (
                                <div className={'col-span-2'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={5}
                                        cols={40}
                                        className={''}
                                        placeholder={placeholder}
                                        onChange={(e) => handleChange(e, [])}
                                    />
                                </div>
                            );
                        case 'select':
                            return (
                                <select key={name}>
                                    {
                                        selectOptions && selectOptions.map(option => <option value={option.value}>{option.label}</option>)
                                    }
                                </select>
                            );
                        default:
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    size={size}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    placeholder={placeholder}
                                />
                            )
                    }
                })
            }
            {renderSentMessage()}
            <section className={'text-center'}>
                <button
                    type={'submit'}
                    className={'btn-primary py-2 px-10 cursor-pointer !from-gradient-from !to-gradient-to !bg-gradient-to-b !text-white'}
                    disabled={isLoading}
                >
                    {submitButtonLabel ? submitButtonLabel : 'SEND'}
                </button>
            </section>
        </form>
    )
};

export default MyCustomForm
