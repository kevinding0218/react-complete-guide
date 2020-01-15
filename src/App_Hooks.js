import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  // useState returns an array with exactly two elements and always two elements
  // first element will always be our current state
  // second element in state array will always be a function that allows us to update this state
  // such that React is aware of if and will re-render this component
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value'});

  // when using React Hooks, your function which you get as the second element in that array
  // does not merge whatever you pass
  // means whenever you update state, you have to manually make sure including all old state data
  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'MaxIMILIAN', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
};

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>
        My Hobbies: Racing
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default app;
