import React from 'react';
// function Hello(){
//     return <h2>Help world</h2>
// }
// export default Hello;
const Hello=(props) =>{
    console.log(props)
    return(
        <div>
            <h1>Helo {props.name}</h1>
            {props.children}
        </div>
    )
}
 export default Hello