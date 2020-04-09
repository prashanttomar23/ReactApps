import React from 'react'
import Person from './Person'



function NameList() {
    const names=['AS','asd','ret']
    const nameList=names.map(name=>
        <Person name={name}></Person>)
    
    return (
        <div>{nameList}</div>
    )
}

export default NameList
