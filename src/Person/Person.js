import React from 'react';
import './Person.css';
import Radium from 'radium';

// a component is just a function which returns some jsx, some html
// props means the attributes on your component which is set and passed from outside, e.g: <Person name="Max" age="28" />
// props.children refers to any elements that's between the opening and closing tag of our component
// props change will trigger React to re-render components and potentially update the DOM in browser

// Stateless/dumb component - no internal logic or presentational components because they present something,
// output content, only get external data and output in a structured way
const person = (props) => {
return (
<div className="Person">
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
</div>)
};

// export the function as default of this file
export default Radium(person);
