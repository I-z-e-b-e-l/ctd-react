import React from 'react';

// function InputWithLabel(props){

//     const inputRef = React.useRef();

//     React.useEffect(()=>{
//         if (isFocused) {
//             inputRef.current.focus();
//         }
//     }, [isFocused]);

//     return(
//         <React.Fragment>
//             <label htmlFor={htmlFor}>
//                 {children}
//             </label>
//             <input 
//                 id={id}
//                 type={type} 
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//                 // autoFocus
//                 ref={inputRef}
//             />
//         </React.Fragment>
//     )

// }

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
    });

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