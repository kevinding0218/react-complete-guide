import React from 'react';

// a component is just a function which returns some jsx, some html
// props means the attributes on your component, e.g: <Person name="Max" age="28" />
const person = (props) => {
return <p>I'm {props.name} and I am {props.age} years old!</p>
};

// export the function as default of this file
export default person;
