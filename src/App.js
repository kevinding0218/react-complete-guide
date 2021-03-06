import React, { Component } from "react";
import classes from './App.css';
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// Stateful/smart components - either class-based with state or functional with useState
// Having as many pure functional presentation components as possible and only use state
// no matter how in a few selected components, this would make your app easy to manage and maintain
// It's very clear where your main logic sits and where your data changes and then is distributed to the rest of your app
class App extends Component {
  // notes: this state property here is only available in class-based React component which 'extends Component'
  // In React 16.8, you can manage state in functional components.
  // if state changes, it'll lead React to re-render our DOM or to update the DOM
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // only use the ES 6 arrow function would make the 'this' pointed to the 'class App' property
  switchNameHandler = newName => {
    // Don't do this this.state.persons[0].name='Maximilian';
    // we shouldn't mutate which means chane the state directly like this,
    // React will not recognize that and will not pick up the change

    // Instead use a special method React gives you, you also access this with 'this' and then it's setState
    // setState allows us to update this special state property here and it will then ensure that React gets to
    // know about this update and updates the DOM
    // setState takes an object as an argument and it'll merge whatever we define here with our existing state.
    // it'll not discard otherState and leave it as untouched
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  // event.target - should be the input into which we typed
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // javascript object is reference type, we should mutate it by using {...oldObject}
    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative way by using Object.assign
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // not update the original object now
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  // in javascript, objects and arrays are reference types, so when get persons from my state here
  // I actually get a pointer to the origianl person's object managed by react, to the original state
  // slice - copys the full array and returns a new one which is then stored here
  // es6 new feature for copy array using [...oldArray]
  // You should always update state in an immutable fashion, so without mutating the original state first
  // Create a copy, change that and then update the state with said state
  deletePersonHandler = personIndex => {
    //
    // const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePesonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // it does look like html but it is NOT
    // all the 'div'/'h1' are not html element but managed or provided by the react
    // note here the className attribute was defined in JSX but will later on be translated to class in HTML

    // it is a typical thing and typical best practice to wrap everything into one root element per component
    // also makes sense since you typically want to style your components and want to add css class
    // which is responsible for styling to the root element as <div>.

    // if you have parentheses in onClick handler, this will execute immediately once react renders to the DOM because you execute the function with parenthesis
    // we only want to pass a reference and we do this by using 'this' and then referring to that property which holds the function

    // click={this.switchNameHandler} - pass methods also as props so that you can call a method which might change the state in another component
    // which doesn't have direct access to the state and whcih shouldn't have direct access to the state

    // this.switchNameHandler.bind(this, 'Jialu') - (recommend)the 'this' controls refers to the class component

    // onClick={() => this.switchNameHandler()} - (not recommend) pass here is an anonymous function which will be executed on a click
    // and which then returns the result of this function getting executed

    // to show/hide a html element, use 'if' javascript statement in jsx as {}, return html element or null/(hide)
    // alternative javascript way, assign the jsx to variable we conditionally assign
    let persons = null;
    let btnClass = '';

    // Map simples maps every element in a given array such as our persons array here into something else as a new array
    // Map has second parameter as index
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if ( this.state.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join( ' ' )}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePesonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );

    // param1: element that you want to render in the DOM, e.g: html or your own component
    // param2: (optional) configuration for param1 element, e.g: css class name
    // param3: any children element which is nested inside the param1 element
    // param4: content of param3 element
    // html render as
    // <div>'h1' 'Hi, I'm a React App!!!'
    // 'h1' here is interpreted as text, not render as an element
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');

    // if we want to render another element inside div, we need
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
