import React from 'react'

const RefFunc= React.forwardRef((props,refer)=>{
    return (
        <div>
            <input type="text" ref={refer}></input>
        </div>
    )
})

export default RefFunc
