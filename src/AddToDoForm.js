import React from "react";

function AddToDoForm(){
    return(
        <form>
            <label htmlFor='todoTitle'>title</label>
            <input id='todoTitle'></input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddToDoForm