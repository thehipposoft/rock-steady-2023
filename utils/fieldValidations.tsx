const required = (value:string) => value ? undefined : 'Required';

const email = (value: string) => {
    if (!value) {
        return 'Required';
    }
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
};

export {
    required,
    email,
}