import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // it does look like html but it is NOT
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //   </div>
    // );

    // param1: element that you want to render in the DOM, e.g: html or your own component
    // param2: (optional) configuration for param1 element, e.g: css class name
    // param3: any children element which is nested inside the param1 element
    // param4: content of param3 element
    // html render as
    // <div>"h1" "Hi, I'm a React App!!!"
    // 'h1' here is interpreted as text, not render as an element
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    
    // if we want to render another element inside div, we need
    return React.createElement('div', {className: 'App'}, 
      React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
