import React from 'react';

type CustomInputPropsType = {
    fieldName: string,
    fieldType: string,
    label: string,
    handleChange: any,
    value: any,
    validations: any,
    errors: any,
    size?: string,
    placeholder: string,

}

const CustomInput = (
    {
        fieldName,
        fieldType,
        label,
        handleChange,
        value,
        validations,
        errors,
        size,
        placeholder
    }:CustomInputPropsType) => {
    return (
        <div className={size === 'half' ? `col-span-1`  : `col-span-2`}>
            <label className={'contact-label'}>{label}</label>
            <input
                type={fieldType}
                name={fieldName}
                id={fieldName}
                className={errors && errors[fieldName] ? `input transition-all duration-150 border-red-700 bg-red-100` : `input`}
                onChange={(event) => handleChange(event, validations)}
                value={value}
                placeholder={placeholder}
            />
            <span className={'text-red-700'}>
                {errors ? errors[fieldName] : null}
            </span>
        </div>
    )
};

export default CustomInput
