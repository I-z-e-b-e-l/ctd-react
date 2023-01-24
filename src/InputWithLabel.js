import React from 'react';


function InputWithLabel({
    htmlFor,
    id,
    type,
    name,
    value,
    onChange,
    children,
    }){

    const inputRef = React.useRef();

    React.useEffect(()=>{
        inputRef.current.focus();
    }, [value]);

    return(
        <React.Fragment>
            <label htmlFor={htmlFor}>
                {children}
            </label>
            <input 
                id={id}
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                // autoFocus
                ref={inputRef}
            />
        </React.Fragment>
    )

}

export default InputWithLabel;