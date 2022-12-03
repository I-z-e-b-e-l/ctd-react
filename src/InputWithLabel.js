import React from 'react';

function InputWithLabel(props){
    return(
        <React.Fragment>
            <label htmlFor={props.htmlFor}>
                Title: 
            </label>
            <input 
                id={props.id}
                type={props.type} 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </React.Fragment>
    )

}

export default InputWithLabel;