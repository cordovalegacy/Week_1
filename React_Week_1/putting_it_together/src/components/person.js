import React, { useState } from 'react';

const Person = (props) => {
    const [ ageCount, setAgeCount ] = useState(props.age);
    return (
        <div>
            <h1>{props.lastName}, {props.firstName} </h1>
            <p>Age: { ageCount }</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ ( event ) => setAgeCount( ageCount + 1 ) }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
        )
}

export default Person;