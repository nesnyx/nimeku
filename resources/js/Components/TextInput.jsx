import { forwardRef, useEffect, useRef } from 'react';


export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false,variant='primary',defaultValue,placeholder,autoComplete,required,onChange,handleChange,isError, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full  text-black input-${variant} ${className}`
            }
            autoComplete={autoComplete}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={(e)=> handleChange(e)}
            required = {required}
            ref={input}
        />
    );
});
