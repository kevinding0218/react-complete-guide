import React from 'react';

// a component is just a function which returns some jsx, some html
const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

// export the function as default of this file
export default person;
