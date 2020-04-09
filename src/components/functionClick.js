import React from 'react'

function FunctionClick() {
    function clickhandler(){
        console.log("done")
    }
    return (
        <div>
            <button onClick={clickhandler}>CLick Me</button>
        </div>
    )
}

export default FunctionClick
