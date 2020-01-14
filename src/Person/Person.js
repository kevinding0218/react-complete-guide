import React from 'react';

// a component is just a function which returns some jsx, some html
// props means the attributes on your component which is set and passed from outside, e.g: <Person name="Max" age="28" />
// props.children refers to any elements that's between the opening and closing tag of our component
const person = (props) => {
return (
<div>
    <p>I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
</div>)
};

// export the function as default of this file
export default person;
