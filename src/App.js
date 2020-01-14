import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // it does look like html but it is NOT
    // all the 'div'/'h1' are not html element but managed or provided by the react
    // note here the className attribute was defined in JSX but will later on be translated to class in HTML

    // it is a typical thing and typical best practice to wrap everything into one root element per component
    // also makes sense since you typically want to style your components and want to add css class
    // which is responsible for styling to the root element as <div>.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
      </div>
    );

    // param1: element that you want to render in the DOM, e.g: html or your own component
    // param2: (optional) configuration for param1 element, e.g: css class name
    // param3: any children element which is nested inside the param1 element
    // param4: content of param3 element
    // html render as
    // <div>"h1" "Hi, I'm a React App!!!"
    // 'h1' here is interpreted as text, not render as an element
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    
    // if we want to render another element inside div, we need
    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
