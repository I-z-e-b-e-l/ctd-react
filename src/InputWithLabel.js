import React from 'react';

function InputWithLabel(props){

    const inputRef = React.useRef();

    React.useEffect(()=>{
        if (props.isFocused) {
            inputRef.current.focus();
        }
    }, [props.isFocused]);

    return(
        <React.Fragment>
            <label htmlFor={props.htmlFor}>
                {props.children}
            </label>
            <input 
                id={props.id}
                type={props.type} 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                // autoFocus
                ref={inputRef}
            />
        </React.Fragment>
    )

}



// function InputWithLabel(props){
//     return(
//         <React.Fragment>
//             <label htmlFor={props.htmlFor}>
//                 {props.children}
//             </label>
//             <input 
//                 id={props.id}
//                 type={props.type} 
//                 name={props.name}
//                 value={props.value}
//                 onChange={props.onChange}
//                 autoFocus
//             />
//         </React.Fragment>
//     )

// }

export default InputWithLabel;